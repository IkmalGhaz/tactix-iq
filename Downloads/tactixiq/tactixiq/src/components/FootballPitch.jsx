import { FORMATIONS, ROLE_COLORS } from '../data.js'

function PitchSVGMarkings() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 150"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <rect x="2" y="2" width="96" height="146" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      {/* Halfway line */}
      <line x1="2" y1="75" x2="98" y2="75" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
      {/* Centre circle */}
      <circle cx="50" cy="75" r="12" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
      {/* Centre dot */}
      <circle cx="50" cy="75" r="1" fill="rgba(255,255,255,0.15)" />
      {/* Top penalty area */}
      <rect x="22" y="2" width="56" height="22" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
      {/* Top 6-yard box */}
      <rect x="34" y="2" width="32" height="9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* Top penalty spot */}
      <circle cx="50" cy="17" r="0.8" fill="rgba(255,255,255,0.15)" />
      {/* Top penalty arc */}
      <path d="M 36 24 A 10 10 0 0 1 64 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* Bottom penalty area */}
      <rect x="22" y="126" width="56" height="22" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
      {/* Bottom 6-yard box */}
      <rect x="34" y="139" width="32" height="9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* Bottom penalty spot */}
      <circle cx="50" cy="133" r="0.8" fill="rgba(255,255,255,0.15)" />
      {/* Bottom penalty arc */}
      <path d="M 36 126 A 10 10 0 0 0 64 126" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* Corner arcs */}
      <path d="M 2 5 A 3 3 0 0 1 5 2"   fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <path d="M 95 2 A 3 3 0 0 1 98 5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <path d="M 2 145 A 3 3 0 0 0 5 148"   fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <path d="M 95 148 A 3 3 0 0 0 98 145" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* Subtle pitch stripe bands */}
      {[0,1,2,3,4,5].map(i => (
        <rect
          key={i}
          x="2" y={2 + i * 24.3} width="96" height="12.15"
          fill="rgba(255,255,255,0.012)"
        />
      ))}
    </svg>
  )
}

export default function FootballPitch({ formationKey, generated, animating }) {
  const formation = FORMATIONS[formationKey]

  return (
    <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-sm font-semibold leading-none">Tactical Pitch</p>
          <p className="text-white/30 text-xs mt-1">
            {generated
              ? `${formation.label} — ${formation.tagline}`
              : 'Run analysis to deploy formation'}
          </p>
        </div>
        {generated && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-wide">
              {formationKey}
            </span>
            <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/50">
              {formation.confidence}% conf.
            </span>
          </div>
        )}
      </div>

      {/* Pitch */}
      <div className="flex justify-center">
        <div
          className="relative w-full pitch-surface rounded-xl overflow-hidden border border-white/[0.08]"
          style={{ maxWidth: 340, aspectRatio: '2 / 3' }}
        >
          <PitchSVGMarkings />

          {/* Player nodes */}
          {generated && formation.nodes.map((node, i) => {
            const c = ROLE_COLORS[node.role]
            return (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  animation: 'fadeUp 0.4s ease-out forwards',
                  animationDelay: `${i * 60}ms`,
                  opacity: 0,
                }}
                title={`${node.id} — ${node.name}`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${c.bg} border-2 ${c.border} flex items-center justify-center shadow-lg ${c.glow} cursor-pointer hover:scale-110 transition-transform duration-150`}
                >
                  <span className={`text-[8px] font-black ${c.text} leading-none`}>
                    {node.id.replace(/\d+$/, '')}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Not yet generated state */}
          {!generated && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/15 text-[11px] text-center font-medium leading-relaxed px-6">
                Run Foundry IQ to<br />deploy formation
              </p>
            </div>
          )}

          {/* Attack direction arrow */}
          {generated && (
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '7%' }}>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M10 1 L10 12 M5 7 L10 12 L15 7" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 flex-wrap">
        {Object.entries(ROLE_COLORS).map(([role, c]) => (
          <div key={role} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${c.bg}`} />
            <span className="text-white/35 text-[10px] font-medium">{role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
