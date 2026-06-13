import { REASONING_STEPS, STEP_ACCENTS } from '../data.js'

export default function ReasoningLog({ opponentId, visible }) {
  const steps = REASONING_STEPS[opponentId]

  return (
    <div className="bg-[#0d1520] border border-white/[0.07] rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-sm font-semibold leading-none">AI Scout Reasoning</p>
          <p className="text-white/30 text-xs mt-1">Agent decision trace — step by step</p>
        </div>
        {visible && (
          <span className="text-[10px] font-semibold px-2 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
            {steps.length} steps
          </span>
        )}
      </div>

      {!visible ? (
        <div className="flex flex-col items-center justify-center h-32 gap-2.5 border border-dashed border-white/[0.08] rounded-xl">
          <svg className="w-6 h-6 text-white/15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10M12 12l4-4"/><circle cx="18" cy="6" r="3"/>
          </svg>
          <p className="text-white/20 text-xs">Run analysis to see reasoning trace</p>
        </div>
      ) : (
        <div className="space-y-2">
          {steps.map((step, i) => {
            const ac = STEP_ACCENTS[step.color]
            return (
              <div
                key={i}
                className="flex gap-3 p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-150 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both', opacity: 0 }}
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center gap-1.5 pt-0.5">
                  <div className={`w-6 h-6 rounded-full ${ac.dot} flex items-center justify-center text-[9px] font-black text-black shrink-0`}>
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-px ${ac.line} flex-1`} style={{ minHeight: 16 }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-1">
                  <span className={`inline-block text-[9px] font-bold px-1.5 py-0.5 rounded mb-1.5 uppercase tracking-wide ${ac.badge}`}>
                    {step.phase}
                  </span>
                  <p className="text-white text-[12px] font-semibold leading-snug">{step.title}</p>
                  <p className="text-white/35 text-[11px] leading-relaxed mt-1">{step.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
