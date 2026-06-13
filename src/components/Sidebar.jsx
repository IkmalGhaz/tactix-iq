const NAV_ITEMS = [
  { id: 'analysis',  label: 'Opponent Analysis',     icon: 'Analysis'  },
  { id: 'scouting',  label: 'Scouting Hub',          icon: 'Scouting'  },
  { id: 'reasoning', label: 'AI Reasoning Log',      icon: 'Reasoning' },
  { id: 'terminal',  label: 'Foundry IQ Terminal',   icon: 'Terminal'  },
]

const NavIcon = ({ type, active }) => {
  const base = `w-4 h-4 shrink-0 ${active ? 'text-emerald-400' : 'text-white/20 group-hover:text-white/40'}`
  if (type === 'Analysis')  return <svg className={base} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
  if (type === 'Scouting')  return <svg className={base} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  if (type === 'Reasoning') return <svg className={base} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12l4-4"/><circle cx="18" cy="6" r="3"/></svg>
  if (type === 'Terminal')  return <svg className={base} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
  return null
}

export default function Sidebar({ active, setActive, opponent, setOpponent }) {
  const opponents = [
    { id: 'liverpool', name: 'Liverpool FC',      color: '#C8102E' },
    { id: 'mancity',   name: 'Manchester City',   color: '#6CABDD' },
  ]

  return (
    <aside className="w-60 shrink-0 flex flex-col bg-[#070b11] border-r border-white/[0.06] h-full">
      {/* Wordmark */}
      <div className="px-5 pt-6 pb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-[11px] font-black text-black shadow-lg shadow-emerald-500/30 shrink-0">
            TQ
          </div>
          <div>
            <p className="text-white font-bold text-[13px] leading-none tracking-tight">TactixIQ</p>
            <p className="text-white/25 text-[9px] mt-0.5 tracking-widest uppercase font-medium">Scout Agent v2.1</p>
          </div>
        </div>
      </div>

      {/* Opponent selector */}
      <div className="px-3 py-3 border-b border-white/[0.06]">
        <p className="text-white/25 text-[9px] uppercase tracking-widest font-semibold px-2 mb-2">Analysing</p>
        <div className="space-y-0.5">
          {opponents.map(o => (
            <button
              key={o.id}
              onClick={() => setOpponent(o.id)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-100 ${
                opponent === o.id
                  ? 'bg-white/[0.06] text-white'
                  : 'text-white/35 hover:text-white/60 hover:bg-white/[0.03]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: o.color, boxShadow: opponent === o.id ? `0 0 6px ${o.color}80` : 'none' }}
              />
              <span className="text-[12px] font-medium leading-none">{o.name}</span>
              {opponent === o.id && <span className="ml-auto text-emerald-400/60 text-[9px]">Active</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5">
        <p className="text-white/25 text-[9px] uppercase tracking-widest font-semibold px-2 mb-2">Views</p>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`group w-full flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-[12px] font-medium transition-all duration-100 text-left ${
              active === item.id
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'text-white/35 hover:text-white/65 hover:bg-white/[0.04]'
            }`}
          >
            <NavIcon type={item.icon} active={active === item.id} />
            {item.label}
            {active === item.id && (
              <span className="ml-auto w-1 h-3.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400/50" />
            )}
          </button>
        ))}
      </nav>

      {/* Status footer */}
      <div className="px-5 py-4 border-t border-white/[0.06] space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60 animate-pulse-slow shrink-0" />
          <span className="text-emerald-400 text-[10px] font-semibold">Agent Online</span>
        </div>
        <div className="text-[9px] text-white/18 leading-relaxed font-mono">
          Microsoft Agents League<br />Hackathon Build 2025
        </div>
      </div>
    </aside>
  )
}
