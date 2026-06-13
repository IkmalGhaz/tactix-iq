import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import FoundryTerminal from './components/FoundryTerminal.jsx'
import FootballPitch from './components/FootballPitch.jsx'
import ReasoningLog from './components/ReasoningLog.jsx'
import ScoutingHub from './components/ScoutingHub.jsx'
import { OPPONENTS, FORMATIONS, STEP_ACCENTS } from './data.js'

// ─── Confidence ring ──────────────────────────────────────────────────────────
function ConfidenceRing({ value, color = '#10b981' }) {
  const r = 26
  const circ = 2 * Math.PI * r
  const dash = (value / 100) * circ
  return (
    <svg width="70" height="70" viewBox="0 0 70 70">
      <circle cx="35" cy="35" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
      <circle
        cx="35" cy="35" r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        transform="rotate(-90 35 35)"
        style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
      />
      <text x="35" y="39" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" fontFamily="Inter, sans-serif">
        {value}%
      </text>
    </svg>
  )
}

// ─── Stat chip ────────────────────────────────────────────────────────────────
function StatChip({ label, value, sub, accent = 'emerald' }) {
  const colors = {
    emerald: 'text-emerald-400 bg-emerald-500/8 border-emerald-500/15',
    cyan:    'text-cyan-400    bg-cyan-500/8    border-cyan-500/15',
    violet:  'text-violet-400  bg-violet-500/8  border-violet-500/15',
    rose:    'text-rose-400    bg-rose-500/8    border-rose-500/15',
    amber:   'text-amber-400   bg-amber-500/8   border-amber-500/15',
  }
  return (
    <div className={`px-3.5 py-3 rounded-xl border ${colors[accent]} flex flex-col gap-0.5`}>
      <p className="text-[9px] font-semibold uppercase tracking-widest opacity-70">{label}</p>
      <p className="text-xl font-black leading-none">{value}</p>
      {sub && <p className="text-[9px] opacity-50">{sub}</p>}
    </div>
  )
}

// ─── Analysis view ────────────────────────────────────────────────────────────
function AnalysisView({ opponentId, briefReady, onBriefReady }) {
  const opp = OPPONENTS[opponentId]
  const formation = briefReady
    ? (opponentId === 'liverpool' ? '3-4-3' : '5-3-2')
    : '4-3-3'

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {/* Left column */}
      <div className="space-y-5">
        {/* Opponent card */}
        <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-semibold mb-1">Opponent</p>
              <h2 className="text-white text-xl font-black leading-none">{opp.name}</h2>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-[10px] text-white/40 font-mono bg-white/[0.04] px-2 py-1 rounded-md border border-white/[0.06]">{opp.formation}</span>
                <span className="text-[10px] text-white/40">{opp.style}</span>
              </div>
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.08]"
              style={{ background: `${opp.color}20`, boxShadow: `0 0 24px ${opp.color}18` }}
            >
              <span className="text-2xl">⚽</span>
            </div>
          </div>
          {/* Weaknesses */}
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <p className="text-white/25 text-[9px] uppercase tracking-widest font-semibold mb-2">Flagged Weaknesses</p>
            <div className="flex flex-wrap gap-1.5">
              {opp.weaknesses.map(w => (
                <span key={w} className="text-[10px] px-2.5 py-1 rounded-full bg-rose-500/8 border border-rose-500/15 text-rose-400 font-medium">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stat chips */}
        <div className="grid grid-cols-2 gap-3">
          <StatChip label="Press PPDA"    value={opp.stats['Press PPDA'].value}       sub={opp.stats['Press PPDA'].label}       accent="rose"    />
          <StatChip label="High Line"     value={opp.stats['High Line Depth'].value}  sub={opp.stats['High Line Depth'].label}  accent="amber"   />
          <StatChip label="FB Overlap"    value={opp.stats['Fullback Overlap'].value} sub={opp.stats['Fullback Overlap'].label} accent="violet"  />
          <StatChip label="xG Against"    value={opp.stats['xG Against'].value}       sub={opp.stats['xG Against'].label}       accent="emerald" />
        </div>

        {/* Foundry terminal */}
        <FoundryTerminal opponentId={opponentId} onComplete={onBriefReady} />
      </div>

      {/* Right column */}
      <div className="space-y-5">
        {/* Confidence summary */}
        {briefReady && (
          <div className="bg-[#0d1520] border border-emerald-500/20 rounded-2xl p-5 animate-fade-up">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-1">Agent Conclusion</p>
                <p className="text-white text-base font-black leading-snug">
                  Deploy {opponentId === 'liverpool' ? '3-4-3 Wide Overload' : '5-3-2 Deep Block'} Protocol
                </p>
                <p className="text-white/35 text-[11px] mt-1.5 leading-relaxed">
                  {opponentId === 'liverpool'
                    ? 'Flood wide channels and exploit exposed fullback space on transitions within 4 seconds of press break.'
                    : 'Absorb City\'s possession, neutralise Rodri, and spring fast counters on turnover.'}
                </p>
              </div>
              <ConfidenceRing
                value={FORMATIONS[formation].confidence}
                color="#10b981"
              />
            </div>
          </div>
        )}

        <FootballPitch formationKey={formation} generated={briefReady} />
        <ReasoningLog opponentId={opponentId} visible={briefReady} />
      </div>
    </div>
  )
}

// ─── Terminal view ────────────────────────────────────────────────────────────
function TerminalView({ opponentId, onComplete }) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5 space-y-2">
        <h2 className="text-white font-bold text-sm">Foundry IQ Terminal</h2>
        <p className="text-white/35 text-xs leading-relaxed">
          Microsoft Azure AI Foundry powers the analysis pipeline. The terminal below shows the live agent reasoning stream — each event represents a discrete inference step performed by the scout agent before producing the final tactical brief.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {['Azure AI Foundry', 'Prompt Flow', 'Agent SDK', 'RAG Pipeline'].map(t => (
            <span key={t} className="text-[9px] font-semibold px-2 py-1 rounded-full bg-cyan-500/8 border border-cyan-500/15 text-cyan-400">
              {t}
            </span>
          ))}
        </div>
      </div>
      <FoundryTerminal opponentId={opponentId} onComplete={onComplete} />
    </div>
  )
}

// ─── Reasoning view ───────────────────────────────────────────────────────────
function ReasoningView({ opponentId, briefReady }) {
  const opp = OPPONENTS[opponentId]
  const formationKey = opponentId === 'liverpool' ? '3-4-3' : '5-3-2'
  const formation = FORMATIONS[formationKey]

  return (
    <div className="max-w-2xl space-y-5">
      {briefReady && (
        <div className="bg-[#0d1520] border border-emerald-500/20 rounded-2xl p-5 flex items-center justify-between gap-4 animate-fade-up">
          <div>
            <p className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-1">Conclusion</p>
            <p className="text-white text-base font-black">{formation.label}</p>
            <p className="text-white/40 text-xs mt-1">{formation.tagline}</p>
          </div>
          <ConfidenceRing value={formation.confidence} color="#10b981" />
        </div>
      )}
      <ReasoningLog opponentId={opponentId} visible={briefReady} />
    </div>
  )
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('analysis')
  const [opponentId, setOpponentId] = useState('liverpool')
  const [briefReady, setBriefReady] = useState(false)

  const handleOpponentChange = (id) => {
    setOpponentId(id)
    setBriefReady(false)
  }

  return (
    <div className="flex h-screen bg-[#060a0f] text-white overflow-hidden">
      <Sidebar
        active={activeTab}
        setActive={setActiveTab}
        opponent={opponentId}
        setOpponent={handleOpponentChange}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar activeTab={activeTab} opponentId={opponentId} briefReady={briefReady} />

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === 'analysis' && (
            <AnalysisView
              opponentId={opponentId}
              briefReady={briefReady}
              onBriefReady={() => setBriefReady(true)}
            />
          )}
          {activeTab === 'scouting' && (
            <ScoutingHub opponentId={opponentId} />
          )}
          {activeTab === 'reasoning' && (
            <ReasoningView opponentId={opponentId} briefReady={briefReady} />
          )}
          {activeTab === 'terminal' && (
            <TerminalView
              opponentId={opponentId}
              onComplete={() => setBriefReady(true)}
            />
          )}
        </main>
      </div>
    </div>
  )
}
