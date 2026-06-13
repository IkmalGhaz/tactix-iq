import { OPPONENTS } from '../data.js'

const TAB_LABELS = {
  analysis:  'Opponent Analysis',
  scouting:  'Scouting Hub',
  reasoning: 'AI Reasoning Log',
  terminal:  'Foundry IQ Terminal',
}

export default function Topbar({ activeTab, opponentId, briefReady }) {
  const opp = OPPONENTS[opponentId]

  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-white/[0.06] bg-[#070b11]/90 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="text-white/20 text-xs font-medium hidden sm:block">TactixIQ</span>
        <span className="text-white/10 text-xs hidden sm:block">›</span>
        <h1 className="text-white text-sm font-semibold">{TAB_LABELS[activeTab]}</h1>
        {briefReady && (
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-wide">
            Brief Ready
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: opp.color, boxShadow: `0 0 5px ${opp.color}80` }}
          />
          <span className="text-white/50 text-[11px] font-medium">{opp.name}</span>
          <span className="text-white/20 text-[9px]">·</span>
          <span className="text-white/25 text-[10px]">{opp.formation}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-[10px] font-black shadow-sm shadow-emerald-500/30">
          AI
        </div>
      </div>
    </header>
  )
}
