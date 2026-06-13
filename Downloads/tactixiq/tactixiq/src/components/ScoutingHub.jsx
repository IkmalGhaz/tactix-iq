import { OPPONENTS } from '../data.js'

const RATING_COLORS = {
  danger:  'text-rose-400 bg-rose-500/10 border-rose-500/20',
  warning: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  safe:    'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
}

const RESULT_STYLES = {
  W: 'bg-emerald-500/15 text-emerald-400',
  D: 'bg-amber-500/15 text-amber-400',
  L: 'bg-rose-500/15 text-rose-400',
}

export default function ScoutingHub({ opponentId }) {
  const opp = OPPONENTS[opponentId]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Player Profiles */}
      <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5 space-y-4">
        <div>
          <p className="text-white text-sm font-semibold leading-none">Key Player Profiles</p>
          <p className="text-white/30 text-xs mt-1">{opp.name} — threat assessment</p>
        </div>
        <div className="space-y-2">
          {opp.players.map(p => (
            <div key={p.name} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <span className="text-2xl shrink-0 leading-none mt-0.5">{p.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white text-[12px] font-semibold leading-none">{p.name}</span>
                  <span className="text-white/30 text-[10px] font-medium">{p.pos}</span>
                </div>
                <p className="text-white/35 text-[10px] mt-1 leading-relaxed">{p.note}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-white font-black text-[18px] leading-none">{p.rating}</p>
                <p className="text-white/20 text-[8px] mt-0.5 font-medium uppercase tracking-wide">OVR</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-5">
        {/* Stats grid */}
        <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5 space-y-4">
          <div>
            <p className="text-white text-sm font-semibold leading-none">Match Intelligence</p>
            <p className="text-white/30 text-xs mt-1">Performance indicators from last 14 matches</p>
          </div>
          <div className="space-y-2">
            {Object.entries(opp.stats).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.025] border border-white/[0.05]">
                <span className="text-white/40 text-[11px]">{key}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-[11px] font-bold tabular-nums">{val.value}</span>
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${RATING_COLORS[val.rating]}`}>
                    {val.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent form */}
        <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5 space-y-4">
          <p className="text-white text-sm font-semibold leading-none">Recent Form</p>
          <div className="space-y-1.5">
            {opp.form.map((m, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.025] border border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-md text-[9px] font-black flex items-center justify-center ${RESULT_STYLES[m.result]}`}>
                    {m.result}
                  </span>
                  <span className="text-white/60 text-xs">vs {m.vs}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-xs font-bold tabular-nums">{m.score}</span>
                  <span className="text-white/20 text-[10px] w-12 text-right">{m.date}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Form bar */}
          <div className="flex items-center gap-1.5">
            <span className="text-white/20 text-[9px] font-medium uppercase tracking-wider mr-1">Form</span>
            {opp.form.map((m, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-md text-[9px] font-black flex items-center justify-center ${RESULT_STYLES[m.result]}`}
              >
                {m.result}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
