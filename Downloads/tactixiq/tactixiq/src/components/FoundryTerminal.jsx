import { useState, useEffect, useRef } from 'react'
import { FOUNDRY_SEQUENCES } from '../data.js'

const LINE_COLORS = {
  sys:  'text-white/30',
  ok:   'text-emerald-400',
  info: 'text-cyan-400',
  data: 'text-violet-400',
  warn: 'text-amber-400',
  err:  'text-rose-400',
}

const LINE_PREFIX = {
  sys:  '  SYS  ',
  ok:   '   OK  ',
  info: ' INFO  ',
  data: ' DATA  ',
  warn: ' WARN  ',
  err:  '  ERR  ',
}

const PREFIX_BG = {
  sys:  'bg-white/5 text-white/25',
  ok:   'bg-emerald-500/15 text-emerald-400',
  info: 'bg-cyan-500/15 text-cyan-400',
  data: 'bg-violet-500/15 text-violet-400',
  warn: 'bg-amber-500/15 text-amber-400',
  err:  'bg-rose-500/15 text-rose-400',
}

function TerminalLine({ line, index }) {
  return (
    <div
      className="flex items-start gap-2.5 font-mono text-[11px] leading-5 animate-fade-up"
      style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'both', opacity: 0 }}
    >
      <span className="shrink-0 text-white/15 tabular-nums select-none">{String(index + 1).padStart(2, '0')}</span>
      <span className={`shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded ${PREFIX_BG[line.type]}`}>
        {LINE_PREFIX[line.type]}
      </span>
      <span className={`${LINE_COLORS[line.type]} break-all`}>{line.text}</span>
    </div>
  )
}

export default function FoundryTerminal({ opponentId, onComplete, generating }) {
  const [lines, setLines] = useState([])
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const bottomRef = useRef(null)
  const timersRef = useRef([])

  // Scroll to bottom as lines appear
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  // Clear when opponent changes
  useEffect(() => {
    setLines([])
    setDone(false)
    setStarted(false)
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [opponentId])

  const runSequence = () => {
    if (started) return
    setStarted(true)
    setLines([])
    setDone(false)

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
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className="text-white/30 text-[10px] font-mono font-medium">foundry-iq — tactical-analysis-engine</span>
        </div>
        <div className="flex items-center gap-2">
          {done && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              Complete
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
            <p className="text-white/20 text-xs text-center">Run analysis to start Foundry IQ pipeline</p>
          </div>
        )}

        {lines.map((line, i) => (
          <TerminalLine key={i} line={line} index={i} />
        ))}

        {/* Blinking cursor while running */}
        {started && !done && (
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="text-white/15 tabular-nums select-none">{String(lines.length + 1).padStart(2, '0')}</span>
            <span className="text-emerald-400 animate-blink">█</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Footer action */}
      <div className="px-4 py-3 border-t border-white/[0.07] bg-[#050810] flex items-center gap-3">
        <button
          onClick={runSequence}
          disabled={started && !done}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
            started && !done
              ? 'bg-white/5 text-white/25 cursor-not-allowed'
              : done
              ? 'bg-white/[0.06] text-white/50 hover:bg-white/[0.09] hover:text-white/70'
              : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:brightness-110'
          }`}
        >
          {started && !done ? (
            <>
              <span className="w-3 h-3 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
              Processing…
            </>
          ) : done ? (
            'Re-run Analysis'
          ) : (
            'Run Foundry IQ Analysis'
          )}
        </button>
        {done && (
          <span className="text-[10px] text-white/25 font-mono">
            {FOUNDRY_SEQUENCES[opponentId].length} events · pipeline complete
          </span>
        )}
      </div>
    </div>
  )
}
