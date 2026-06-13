import { useState, useEffect, useRef } from 'react'
import { FOUNDRY_SEQUENCES, OPPONENTS } from '../data.js'

const LINE_COLORS = {
  sys:  'text-white/30',
  ok:   'text-emerald-400',
  info: 'text-cyan-400',
  data: 'text-violet-400',
  warn: 'text-amber-400',
  err:  'text-rose-400',
  ai:   'text-white/80',
}

const PREFIX_BG = {
  sys:  'bg-white/5 text-white/25',
  ok:   'bg-emerald-500/15 text-emerald-400',
  info: 'bg-cyan-500/15 text-cyan-400',
  data: 'bg-violet-500/15 text-violet-400',
  warn: 'bg-amber-500/15 text-amber-400',
  err:  'bg-rose-500/15 text-rose-400',
  ai:   'bg-white/10 text-white/60',
}

const LINE_PREFIX = {
  sys:  '  SYS  ',
  ok:   '   OK  ',
  info: ' INFO  ',
  data: ' DATA  ',
  warn: ' WARN  ',
  err:  '  ERR  ',
  ai:   '   AI  ',
}

function TerminalLine({ line, index }) {
  return (
    <div
      className="flex items-start gap-2.5 font-mono text-[11px] leading-5 animate-fade-up"
      style={{ animationDelay: `${index * 20}ms`, animationFillMode: 'both', opacity: 0 }}
    >
      <span className="shrink-0 text-white/15 tabular-nums select-none">{String(index + 1).padStart(2, '0')}</span>
      <span className={`shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded ${PREFIX_BG[line.type] || PREFIX_BG.sys}`}>
        {LINE_PREFIX[line.type] || '  SYS  '}
      </span>
      <span className={`${LINE_COLORS[line.type] || LINE_COLORS.sys} break-all`}>{line.text}</span>
    </div>
  )
}

// ─── Real Foundry IQ API Call ──────────────────────────────────────────────────
async function callFoundryIQ(opponentId, onChunk) {
  const opp = OPPONENTS[opponentId]

  const systemPrompt = `You are the Foundry IQ Tactical Analysis Engine for TactixIQ — an autonomous football scouting agent built for the Microsoft Agents League Hackathon 2026.

Your role: Generate a concise, expert tactical brief for a football coaching staff preparing to face ${opp.name} at the 2026 FIFA World Cup.

Rules:
- Be specific, data-driven, and concise
- Reference real players from the squad
- Output 4-6 bullet points maximum
- Each bullet must be actionable
- End with a single recommended formation and confidence score (0-100%)
- Format: plain text, no markdown headers, just bullet points then "Formation: X-X-X | Confidence: XX%"`

  const userPrompt = `Scout report needed for: ${opp.name} (${opp.flag})
Group: ${opp.group} | FIFA Rank: #${opp.fifaRank} | Manager: ${opp.manager}
Formation: ${opp.formation} | Style: ${opp.style}

Key stats:
${Object.entries(opp.stats).map(([k, v]) => `- ${k}: ${v.value} (${v.label})`).join('\n')}

Key threats:
${opp.players.slice(0, 4).map(p => `- ${p.name} (${p.pos}, ${p.rating} OVR): ${p.note}`).join('\n')}

Known weaknesses: ${opp.weaknesses.join(', ')}

Generate a tactical brief with specific counter-measures, player containment plans, and formation recommendation.`

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    })

    if (!response.ok) throw new Error(`API error: ${response.status}`)
    const data = await response.json()
    const text = data.content?.[0]?.text || 'No response from agent.'

    // Stream the AI response line by line
    const lines = text.split('\n').filter(l => l.trim())
    for (let i = 0; i < lines.length; i++) {
      await new Promise(r => setTimeout(r, 120))
      onChunk({ type: 'ai', text: lines[i] })
    }
    return true
  } catch (err) {
    onChunk({ type: 'warn', text: `Live API unavailable — showing cached brief. (${err.message})` })
    return false
  }
}

export default function FoundryTerminal({ opponentId, onComplete }) {
  const [lines, setLines] = useState([])
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const [mode, setMode] = useState('live') // 'live' | 'simulated'
  const bottomRef = useRef(null)
  const timersRef = useRef([])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  useEffect(() => {
    setLines([])
    setDone(false)
    setStarted(false)
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [opponentId])

  const addLine = (line) => setLines(prev => [...prev, line])

  const runLiveAnalysis = async () => {
    if (started) return
    setStarted(true)
    setLines([])
    setDone(false)
    setMode('live')

    // Phase 1 — simulated pipeline events (fast)
    const seq = FOUNDRY_SEQUENCES[opponentId]
    const phase1 = seq.slice(0, -3) // all but last 3

    for (const item of phase1) {
      await new Promise(r => setTimeout(r, item.delay - (phase1[phase1.indexOf(item) - 1]?.delay || 0) || 300))
      addLine(item)
    }

    // Phase 2 — real AI call
    addLine({ type: 'info', text: 'Calling Foundry IQ model — generating live tactical brief...' })
    await new Promise(r => setTimeout(r, 400))
    addLine({ type: 'sys',  text: 'Streaming response from claude-sonnet-4-6...' })
    await new Promise(r => setTimeout(r, 300))

    const success = await callFoundryIQ(opponentId, addLine)

    // Phase 3 — completion
    await new Promise(r => setTimeout(r, 300))
    if (success) {
      addLine({ type: 'ok',  text: 'Live tactical brief generated by Foundry IQ ✓' })
    }
    addLine({ type: 'ok',  text: `Agent pipeline complete — confidence assessed ■` })

    setDone(true)
    onComplete?.()
  }

  const runSimulated = () => {
    if (started) return
    setStarted(true)
    setLines([])
    setDone(false)
    setMode('simulated')

    const seq = FOUNDRY_SEQUENCES[opponentId]
    timersRef.current = seq.map((item, i) =>
      setTimeout(() => {
        setLines(prev => [...prev, item])
        if (i === seq.length - 1) {
          setTimeout(() => { setDone(true); onComplete?.() }, 200)
        }
      }, item.delay)
    )
  }

  return (
    <div className="bg-[#070b11] border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col">
      {/* Terminal chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-[#050810]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className="text-white/30 text-[10px] font-mono">foundry-iq — tactical-analysis-engine</span>
        </div>
        <div className="flex items-center gap-2">
          {done && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              Complete
            </span>
          )}
          {done && mode === 'live' && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
              Live AI
            </span>
          )}
          {started && !done && (
            <span className="flex items-center gap-1.5 text-[9px] font-semibold text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              Running
            </span>
          )}
        </div>
      </div>

      {/* Terminal body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1.5 min-h-[260px] max-h-[420px]">
        {lines.length === 0 && !started && (
          <div className="flex flex-col items-center justify-center h-44 gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/8 border border-cyan-500/15 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400/60" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
            </div>
            <p className="text-white/20 text-xs text-center">
              Choose <span className="text-emerald-400/60">Live AI</span> for real Foundry IQ output<br />
              or <span className="text-white/35">Simulated</span> for instant demo
            </p>
          </div>
        )}
        {lines.map((line, i) => <TerminalLine key={i} line={line} index={i} />)}
        {started && !done && (
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="text-white/15 tabular-nums select-none">{String(lines.length + 1).padStart(2, '0')}</span>
            <span className="text-emerald-400 animate-blink">█</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/[0.07] bg-[#050810] flex items-center gap-2 flex-wrap">
        {/* Live AI button */}
        <button
          onClick={runLiveAnalysis}
          disabled={started && !done}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
            started && !done
              ? 'bg-white/5 text-white/25 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:brightness-110'
          }`}
        >
          {started && !done && mode === 'live' ? (
            <>
              <span className="w-3 h-3 border-2 border-black/20 border-t-black/70 rounded-full animate-spin" />
              Running Foundry IQ…
            </>
          ) : (
            <>⚡ Live AI Analysis</>
          )}
        </button>

        {/* Simulated button */}
        <button
          onClick={runSimulated}
          disabled={started && !done}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
            started && !done
              ? 'border-white/5 text-white/20 cursor-not-allowed'
              : 'border-white/[0.10] text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
          }`}
        >
          {started && !done && mode === 'simulated' ? (
            <>
              <span className="w-3 h-3 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
              Simulating…
            </>
          ) : (
            'Simulate'
          )}
        </button>

        {done && (
          <button
            onClick={() => { setLines([]); setDone(false); setStarted(false) }}
            className="ml-auto text-[10px] text-white/25 hover:text-white/50 transition-colors"
          >
            Reset
          </button>
        )}

        {done && (
          <span className="text-[10px] text-white/20 font-mono ml-auto">
            {lines.length} events · {mode === 'live' ? 'live model' : 'simulated'}
          </span>
        )}
      </div>
    </div>
  )
}
