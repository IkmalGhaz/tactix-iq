// ─── Opponent Profiles (World Cup 2026 — Group C) ────────────────────────────

export const OPPONENTS = {
  brazil: {
    id: 'brazil',
    name: 'Brazil',
    league: 'FIFA World Cup - Group C',
    manager: 'Carlo Ancelotti',
    style: 'High Press / Explosive Samba Transition',
    formation: '4-3-3',
    color: '#FFDF00',
    weaknesses: ['Space behind advanced fullbacks', 'Midfield recovery if transition is slowed', 'Vulnerable to early central counter-runs'],
    strengths: ['Elite individual dribbling vectors', 'Devastating counter-press traps', 'Vinícius Jr high-velocity isolation'],
    stats: {
      'Press PPDA':        { value: '6.8',  rating: 'danger',  label: 'Extreme forward vertical press' },
      'High Line Depth':   { value: '55m',  rating: 'warning', label: 'Exploitable on aerial long-balls' },
      'Fullback Overlap':  { value: '82%',  rating: 'danger',  label: 'Fullbacks overlap heavily' },
      'Counterpress Win':  { value: '76%',  rating: 'warning', label: 'Requires rapid 2-touch release' },
      'xG Against':        { value: '0.81', rating: 'safe',    label: 'Elite recovery defense profile' },
      'Set Piece Conv.':   { value: '15%',  rating: 'safe',    label: 'Standard dead-ball profile' },
    },
    form: [
      { vs: 'Morocco',     score: '2-1', result: 'W', date: 'Jun 13' },
      { vs: 'Scotland',    score: '3-1', result: 'W', date: 'Jun 08' },
      { vs: 'Haiti',       score: '4-0', result: 'W', date: 'Jun 02' },
      { vs: 'Argentina',   score: '1-1', result: 'D', date: 'May 26' },
      { vs: 'England',     score: '2-1', result: 'W', date: 'May 19' },
    ],
    players: [
      { name: 'Alisson Becker',    pos: 'GK',  rating: 89, flag: '🇧🇷', note: 'Sweeper-keeper — triggers high line, bait forward to chip' },
      { name: 'Danilo',            pos: 'RB',  rating: 81, flag: '🇧🇷', note: 'Pushes into mid-line — exploit space behind on counter' },
      { name: 'Marquinhos',        pos: 'CB',  rating: 87, flag: '🇧🇷', note: 'Elite recovery pace — drag him out of shape with lateral shifting' },
      { name: 'Bruno Guimarães',   pos: 'CM',  rating: 86, flag: '🇧🇷', note: 'Press engine — limit his distribution with mid-block screening' },
      { name: 'Neymar Jr',         pos: 'AM',  rating: 84, flag: '🇧🇷', note: 'Free-roaming playmaker — close down space before turn' },
      { name: 'Vinícius Júnior',   pos: 'LW',  rating: 90, flag: '🇧🇷', note: 'Explosive pace — isolate using double-down wing-back structures' },
    ],
  },
  morocco: {
    id: 'morocco',
    name: 'Morocco',
    league: 'FIFA World Cup - Group C',
    manager: 'Mohamed Ouahbi',
    style: 'Compact Low Block / Disciplined Counter',
    formation: '4-2-3-1',
    color: '#C1272D',
    weaknesses: ['Predictable flank-heavy switches', 'Fatigue in double-pivot screening late game', 'Over-reliance on Hakimi progression'],
    strengths: ['Elite horizontal spatial denial', 'World-class wide-channel transition speed', 'Resilient penalty box congestion'],
    stats: {
      'Press PPDA':        { value: '12.4', rating: 'safe',    label: 'Passive containment low block' },
      'High Line Depth':   { value: '36m',  rating: 'safe',    label: 'Deep structural defensive line' },
      'Fullback Overlap':  { value: '21%',  rating: 'safe',    label: 'Hakimi/Mazraoui stay compact' },
      'Counterpress Win':  { value: '84%',  rating: 'danger',  label: 'Extreme numerical box coverage' },
      'xG Against':        { value: '0.74', rating: 'safe',    label: 'Elite tournament defensive record' },
      'Set Piece Conv.':   { value: '24%',  rating: 'warning', label: 'Dangerous near-post corners' },
    },
    form: [
      { vs: 'Brazil',      score: '1-2', result: 'L', date: 'Jun 13' },
      { vs: 'Haiti',       score: '3-0', result: 'W', date: 'Jun 07' },
      { vs: 'Scotland',    score: '1-1', result: 'D', date: 'Jun 01' },
      { vs: 'Spain',       score: '1-0', result: 'W', date: 'May 24' },
      { vs: 'France',      score: '0-2', result: 'L', date: 'May 18' },
    ],
    players: [
      { name: 'Yassine Bounou',    pos: 'GK',  rating: 82, flag: '🇲🇦', note: 'Elite shot-stopper — force tracking errors via low cutbacks' },
      { name: 'Achraf Hakimi',     pos: 'RB',  rating: 89, flag: '🇲🇦', note: 'World-class overlap threat — lock central passing channels to him' },
      { name: 'Noussair Mazraoui', pos: 'LB',  rating: 80, flag: '🇲🇦', note: 'Inverted fullback build-up — close down inside tracking space' },
      { name: 'Issa Diop',      pos: 'CB',  rating: 76, flag: '🇲🇦', note: 'Zonal command master — overload half-spaces to break focus' },
      { name: 'Sofyan Amrabat',    pos: 'DM',  rating: 78, flag: '🇲🇦', note: 'Aggressive anchor man — move ball horizontally to tire him out' },
      { name: 'Brahim Díaz',       pos: 'AM',  rating: 82, flag: '🇲🇦', note: 'Dynamic advanced playmaker — keep tight mid-line coverage shadow' },
    ],
  },
}

// ─── Tactical Formations ──────────────────────────────────────────────────────

export const FORMATIONS = {
  '4-3-3': {
    label: '4-3-3 Counter Block',
    tagline: 'Compact mid-block — rapid wide transitions',
    confidence: 88,
    nodes: [
      { id: 'GK',  x: 50, y: 90, role: 'GK',  name: 'Keeper'      },
      { id: 'LB',  x: 13, y: 74, role: 'DEF', name: 'Left Back'   },
      { id: 'CB1', x: 34, y: 78, role: 'DEF', name: 'Centre Back' },
      { id: 'CB2', x: 66, y: 78, role: 'DEF', name: 'Centre Back' },
      { id: 'RB',  x: 87, y: 74, role: 'DEF', name: 'Right Back'  },
      { id: 'CM1', x: 24, y: 54, role: 'MID', name: 'Left CM'     },
      { id: 'CM2', x: 50, y: 49, role: 'MID', name: 'Pivot'       },
      { id: 'CM3', x: 76, y: 54, role: 'MID', name: 'Right CM'    },
      { id: 'LW',  x: 16, y: 28, role: 'ATT', name: 'Left Wing'   },
      { id: 'ST',  x: 50, y: 20, role: 'ATT', name: 'Striker'     },
      { id: 'RW',  x: 84, y: 28, role: 'ATT', name: 'Right Wing'  },
    ],
  },
  '3-4-3': {
    label: '3-4-3 Wide Overload',
    tagline: 'Flood wide channels, exploit advanced fullback regions',
    confidence: 94,
    nodes: [
      { id: 'GK',  x: 50, y: 90, role: 'GK',  name: 'Keeper'      },
      { id: 'CB1', x: 24, y: 78, role: 'DEF', name: 'Left CB'     },
      { id: 'CB2', x: 50, y: 80, role: 'DEF', name: 'Centre CB'   },
      { id: 'CB3', x: 76, y: 78, role: 'DEF', name: 'Right CB'    },
      { id: 'LWB', x: 9,  y: 58, role: 'MID', name: 'Left WB'     },
      { id: 'CM1', x: 34, y: 52, role: 'MID', name: 'Left CM'     },
      { id: 'CM2', x: 66, y: 52, role: 'MID', name: 'Right CM'    },
      { id: 'RWB', x: 91, y: 58, role: 'MID', name: 'Right WB'    },
      { id: 'LW',  x: 18, y: 26, role: 'ATT', name: 'Left Wing'   },
      { id: 'ST',  x: 50, y: 19, role: 'ATT', name: 'Striker'     },
      { id: 'RW',  x: 82, y: 26, role: 'ATT', name: 'Right Wing'  },
    ],
  },
  '5-3-2': {
    label: '5-3-2 Deep Block',
    tagline: 'Absorb pressure — spring fast on direct counter-lanes',
    confidence: 79,
    nodes: [
      { id: 'GK',  x: 50, y: 91, role: 'GK',  name: 'Keeper'      },
      { id: 'LWB', x: 10, y: 72, role: 'DEF', name: 'Left WB'     },
      { id: 'CB1', x: 28, y: 79, role: 'DEF', name: 'Left CB'     },
      { id: 'CB2', x: 50, y: 81, role: 'DEF', name: 'Centre CB'   },
      { id: 'CB3', x: 72, y: 79, role: 'DEF', name: 'Right CB'    },
      { id: 'RWB', x: 90, y: 72, role: 'DEF', name: 'Right WB'    },
      { id: 'CM1', x: 25, y: 54, role: 'MID', name: 'Left CM'     },
      { id: 'CM2', x: 50, y: 50, role: 'MID', name: 'Pivot'       },
      { id: 'CM3', x: 75, y: 54, role: 'MID', name: 'Right CM'    },
      { id: 'ST1', x: 35, y: 24, role: 'ATT', name: 'Striker'     },
      { id: 'ST2', x: 65, y: 24, role: 'ATT', name: 'Striker'     },
    ],
  },
}

// ─── Foundry IQ Terminal Sequences ───────────────────────────────────────────

export const FOUNDRY_SEQUENCES = {
  brazil: [
    { delay: 0,    type: 'sys',  text: 'Foundry IQ v3.2 — Tactical Analysis Engine initialised' },
    { delay: 300,  type: 'sys',  text: 'Connecting to Azure AI Foundry endpoint...' },
    { delay: 700,  type: 'ok',   text: 'Agent pipeline authenticated successfully ✓' },
    { delay: 1000, type: 'info', text: 'Ingesting World Cup Group C profile: Brazil' },
    { delay: 1400, type: 'data', text: 'Formation: 4-3-3 | Core Vector: High Press / Samba Transition' },
    { delay: 1700, type: 'data', text: 'PPDA verified: 6.8 → extreme pressing line engaged' },
    { delay: 2100, type: 'data', text: 'Fullback overlap frequency: 82% → flagging space behind Danilo/Santos' },
    { delay: 2500, type: 'warn', text: 'Vinícius Júnior forward isolation sequence rated high danger threat' },
    { delay: 2900, type: 'info', text: 'Running Azure OpenAI model evaluation matrix across configurations...' },
    { delay: 3400, type: 'data', text: 'Wide Overload Index: 3-4-3 protocol yielded 94/100 efficiency' },
    { delay: 3900, type: 'ok',   text: 'Optimal deployment chosen: 3-4-3 Wide Overload Protocol' },
    { delay: 4300, type: 'info', text: 'Embedding set-piece variations based on Marquinhos tracking traits...' },
    { delay: 4800, type: 'ok',   text: 'Tactical analysis compilation finalized — confidence metrics: 94.2%' },
    { delay: 5200, type: 'sys',  text: 'Tactical telemetry ready for stream injection ■' },
  ],
  morocco: [
    { delay: 0,    type: 'sys',  text: 'Foundry IQ v3.2 — Tactical Analysis Engine initialised' },
    { delay: 300,  type: 'sys',  text: 'Connecting to Azure AI Foundry endpoint...' },
    { delay: 700,  type: 'ok',   text: 'Agent pipeline authenticated successfully ✓' },
    { delay: 1000, type: 'info', text: 'Ingesting World Cup Group C profile: Morocco' },
    { delay: 1400, type: 'data', text: 'Formation: 4-2-3-1 | Core Vector: Passive Box Containment Block' },
    { delay: 1700, type: 'data', text: 'PPDA score ingested: 12.4 → deep defensive containment active' },
    { delay: 2100, type: 'data', text: 'Defensive low-block box density verified at 84%' },
    { delay: 2500, type: 'warn', text: 'Hakimi/Mazraoui perimeter blocking highly resilient to wide transitions' },
    { delay: 2900, type: 'info', text: 'Running Azure OpenAI model evaluation matrix across configurations...' },
    { delay: 3400, type: 'data', text: 'Flank break efficiency: 4-3-3 shape yielded 79/100 matching index' },
    { delay: 3900, type: 'ok',   text: 'Optimal deployment chosen: 4-3-3 Mid-Block Counter' },
    { delay: 4300, type: 'info', text: 'Isolating progressive lines to bypass Amrabat central screen hubs...' },
    { delay: 4800, type: 'ok',   text: 'Tactical analysis compilation finalized — confidence metrics: 79.6%' },
    { delay: 5200, type: 'sys',  text: 'Tactical telemetry ready for stream injection ■' },
  ],
}

// ─── Reasoning Steps ──────────────────────────────────────────────────────────

export const REASONING_STEPS = {
  brazil: [
    {
      phase: 'Data Ingestion',
      color: 'cyan',
      title: 'Azure AI Foundry — Group C Ingestion Active',
      detail: 'Loaded Brazils official 2026 dataset. Identified baseline 4-3-3 layout, ultra-intense 6.8 PPDA metric, and average high-line depth peaking at 55m. Flagged wide channel exploit vulnerabilities due to severe fullback overlap tracking metrics sitting at 82%.',
    },
    {
      phase: 'Pattern Recognition',
      color: 'violet',
      title: 'Over-extended Wing Lines Flagged',
      detail: 'Brazils fullbacks surge heavily past the midfield line during forward possession cycles. This exposes a 20–24m vacuum of unoccupied terrain on transitions lasting roughly 4 seconds. Agent mapped primary exploit opportunities into these specific channels to bypass Bruno Guimarães coordination loops.',
    },
    {
      phase: 'Formation Synthesis',
      color: 'amber',
      title: 'Counter Shape Activated: 3-4-3 Protocol',
      detail: 'Cross-checked layout options via Azure OpenAI evaluation. The 3-4-3 structure returned a Wide Overload rating of 94/100. Advanced wing-backs are directed to hit wide vacancies immediately upon breaking the Brazilian counter-press, out-pacing their average 5.2s structural recovery cycle.',
    },
    {
      phase: 'Set Piece Integration',
      color: 'rose',
      title: 'Isolating Central Recovery Trajectories',
      detail: 'Tracking analysis indicates Marquinhos steps up to intercept near-post targets under shifting pressure, leaving back-post blind spots vulnerable. Engineered Corner Blueprint A (deep looping delivery to secondary wave runners) to break through this specific box rotation trend.',
    },
    {
      phase: 'Tactical Output',
      color: 'emerald',
      title: 'Tactical Brief Finalized — 94.2% Success Certainty',
      detail: 'Final compilation rules: (1) Isolate Bruno Guimarães with a heavy vertical block shadow, (2) Hit rapid diagonal switches into space vacated by fullbacks inside 3.5 seconds, (3) Use late arriving midfield runners to flood the penalty box. Overall confidence threshold locked at 94.2%.',
    },
  ],
  morocco: [
    {
      phase: 'Data Ingestion',
      color: 'cyan',
      title: 'Azure AI Foundry — Group C Ingestion Active',
      detail: 'Loaded Moroccos official 2026 dataset. Confirmed structural dependency on a highly disciplined 4-2-3-1 low-block system. Ingested passive PPDA of 12.4 and a deep-lying containment line averaging 36m depth. Box density index verified at 84%.',
    },
    {
      phase: 'Pattern Recognition',
      color: 'violet',
      title: 'Flank Progression Dependencies Mapped',
      detail: 'Ouahbi block surrenders central space to route high-velocity counter launches directly via Achraf Hakimi (79% channel dominance). Double-pivot screening blocks central passing lanes, forcing opposition outside where low cutbacks are typically swallowed up by Aguerd.',
    },
    {
      phase: 'Formation Synthesis',
      color: 'amber',
      title: 'Counter Shape Activated: 4-3-3 Mid-Block Counter',
      detail: 'Evaluated multiple configurations against a congested low block. The 4-3-3 shape returned a 79/100 matching index. A compact three-man midfield screen cuts off counter lines to Brahim Díaz, while wide wing-forwards pull Moroccos back-four away from central clustering.',
    },
    {
      phase: 'Set Piece Integration',
      color: 'rose',
      title: 'Targeting Set-Piece Near-Post Deficits',
      detail: 'Moroccos defensive block shows minor near-post marking delays on curling dead-ball targets. Deployed Corner Variant A (low-driven near-post flick routine) and Free Kick Blueprint B (whipped deliveries behind the wall targeting secondary runners) to catch them during reset setups.',
    },
    {
      phase: 'Tactical Output',
      color: 'emerald',
      title: 'Tactical Brief Finalized — 79.6% Success Certainty',
      detail: 'Final compilation rules: (1) Deploy a compact three-man mid-block to completely isolate Amrabat, (2) Enforce wide horizontal switches to pull their low block away from the box, (3) Focus corner targets toward near-post blind gaps. Overall confidence threshold locked at 79.6%.',
    },
  ],
};

// ─── Role Colours ─────────────────────────────────────────────────────────────

export const ROLE_COLORS = {
  GK:  { bg: 'bg-amber-400',   border: 'border-amber-200',   text: 'text-amber-950',   glow: 'shadow-amber-400/40'   },
  DEF: { bg: 'bg-blue-500',    border: 'border-blue-300',    text: 'text-blue-950',    glow: 'shadow-blue-500/40'    },
  MID: { bg: 'bg-emerald-500', border: 'border-emerald-300', text: 'text-emerald-950', glow: 'shadow-emerald-500/40' },
  ATT: { bg: 'bg-rose-500',    border: 'border-rose-300',    text: 'text-rose-950',    glow: 'shadow-rose-500/40'    },
}

// ─── Step Accent Tokens ───────────────────────────────────────────────────────

export const STEP_ACCENTS = {
  cyan:    { dot: 'bg-cyan-500',    badge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',    line: 'bg-cyan-500/20'    },
  violet:  { dot: 'bg-violet-500',  badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',  line: 'bg-violet-500/20'  },
  amber:   { dot: 'bg-amber-500',   badge: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',   line: 'bg-amber-500/20'   },
  rose:    { dot: 'bg-rose-500',    badge: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',    line: 'bg-rose-500/20'    },
  emerald: { dot: 'bg-emerald-500', badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20', line: 'bg-emerald-500/20' },
}