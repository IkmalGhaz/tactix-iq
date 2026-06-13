// ─── Opponent Profiles ────────────────────────────────────────────────────────

export const OPPONENTS = {
  liverpool: {
    id: 'liverpool',
    name: 'Liverpool FC',
    league: 'Premier League',
    manager: 'Arne Slot',
    style: 'High Press / Gegenpressing',
    formation: '4-3-3',
    color: '#C8102E',
    weaknesses: ['Space behind fullbacks', 'Slow reset after press breaks', 'Vulnerable to early crosses'],
    strengths: ['Intense counter-press', 'High defensive line', 'Fast front-three transitions'],
    stats: {
      'Press PPDA':        { value: '7.2',  rating: 'danger',  label: 'Extreme press — very high' },
      'High Line Depth':   { value: '52m',  rating: 'warning', label: 'Exploitable on transitions' },
      'Fullback Overlap':  { value: '68%',  rating: 'danger',  label: 'Wide channels exposed' },
      'Counterpress Win':  { value: '74%',  rating: 'warning', label: 'Requires 2-touch trigger' },
      'xG Against':        { value: '0.91', rating: 'safe',    label: 'Strong defensive record' },
      'Set Piece Conv.':   { value: '18%',  rating: 'safe',    label: 'Average dead-ball threat' },
    },
    form: [
      { vs: 'Arsenal',    score: '3-1', result: 'W', date: 'Jun 07' },
      { vs: 'Man City',   score: '1-1', result: 'D', date: 'Jun 01' },
      { vs: 'Chelsea',    score: '2-0', result: 'W', date: 'May 25' },
      { vs: 'Tottenham',  score: '1-2', result: 'L', date: 'May 18' },
      { vs: 'Everton',    score: '4-0', result: 'W', date: 'May 11' },
    ],
    players: [
      { name: 'Alisson Becker',     pos: 'GK',  rating: 89, flag: '🇧🇷', note: 'Sweeper-keeper, triggers high line — bait with long balls' },
      { name: 'Trent A-Arnold',     pos: 'RB',  rating: 88, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', note: 'Pushes high — exploit space behind with LW runs' },
      { name: 'Virgil van Dijk',    pos: 'CB',  rating: 91, flag: '🇳🇱', note: 'Strong in air, slow turn — play pacey striker in behind' },
      { name: 'Alexis Mac Allister',pos: 'CM',  rating: 84, flag: '🇦🇷', note: 'Press engine, high distance covered — tire him with possession' },
      { name: 'Mohamed Salah',      pos: 'RW',  rating: 90, flag: '🇪🇬', note: 'Inside cut — cover shadow left CB, show him outside' },
      { name: 'Darwin Núñez',       pos: 'ST',  rating: 83, flag: '🇺🇾', note: 'Aggressive press trigger — use bait passes to draw him out' },
    ],
  },
  mancity: {
    id: 'mancity',
    name: 'Manchester City',
    league: 'Premier League',
    manager: 'Pep Guardiola',
    style: 'Positional Play / Tiki-Taka',
    formation: '3-2-4-1',
    color: '#6CABDD',
    weaknesses: ['Predictable build-up patterns', 'Exposed on set pieces', 'Slow physical pressing'],
    strengths: ['Positional superiority', 'Technical quality in tight spaces', 'Deep defensive block'],
    stats: {
      'Press PPDA':        { value: '11.4', rating: 'safe',    label: 'Moderate press intensity' },
      'High Line Depth':   { value: '44m',  rating: 'safe',    label: 'Compact, harder to exploit' },
      'Fullback Overlap':  { value: '55%',  rating: 'warning', label: 'IFB rotation creates pockets' },
      'Counterpress Win':  { value: '61%',  rating: 'safe',    label: 'Lower urgency off the ball' },
      'xG Against':        { value: '0.72', rating: 'safe',    label: 'Elite defensive structure' },
      'Set Piece Conv.':   { value: '24%',  rating: 'warning', label: 'Vulnerability from corners' },
    },
    form: [
      { vs: 'Newcastle',  score: '2-0', result: 'W', date: 'Jun 08' },
      { vs: 'Liverpool',  score: '1-1', result: 'D', date: 'Jun 01' },
      { vs: 'Fulham',     score: '3-0', result: 'W', date: 'May 24' },
      { vs: 'Aston Villa',score: '0-1', result: 'L', date: 'May 17' },
      { vs: 'Wolves',     score: '2-1', result: 'W', date: 'May 11' },
    ],
    players: [
      { name: 'Ederson',           pos: 'GK',  rating: 88, flag: '🇧🇷', note: 'Distributor — press his short passing triggers' },
      { name: 'Rúben Dias',        pos: 'CB',  rating: 90, flag: '🇵🇹', note: 'Deep block organiser — disrupt with movement' },
      { name: 'Rodri',             pos: 'DM',  rating: 93, flag: '🇪🇸', note: 'Metronome — neutralising him breaks City\'s rhythm' },
      { name: 'Kevin De Bruyne',   pos: 'CM',  rating: 91, flag: '🇧🇪', note: 'Deep progressive passer — deny space with mid-line' },
      { name: 'Erling Haaland',    pos: 'ST',  rating: 94, flag: '🇳🇴', note: 'Pure poacher — CB must not engage early' },
      { name: 'Phil Foden',        pos: 'LW',  rating: 89, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', note: 'Cuts inside from left — show outside, invite cross' },
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
    tagline: 'Flood wide channels, exploit exposed fullbacks',
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
    tagline: 'Absorb pressure — spring fast on transitions',
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
  liverpool: [
    { delay: 0,    type: 'sys',  text: 'Foundry IQ v3.1 — Tactical Analysis Engine initialised' },
    { delay: 300,  type: 'sys',  text: 'Connecting to Azure AI Foundry endpoint...' },
    { delay: 700,  type: 'ok',   text: 'Agent pipeline authenticated ✓' },
    { delay: 1000, type: 'info', text: 'Loading opponent profile: Liverpool FC' },
    { delay: 1400, type: 'data', text: 'Formation detected: 4-3-3 | Style: High Press / Gegenpressing' },
    { delay: 1700, type: 'data', text: 'PPDA score ingested: 7.2 → classified HIGH INTENSITY' },
    { delay: 2100, type: 'data', text: 'High line depth: 52m avg → flagged EXPLOITABLE' },
    { delay: 2400, type: 'data', text: 'Fullback overlap rate: 68% → CRITICAL vulnerability vector' },
    { delay: 2800, type: 'warn', text: 'Counterpress success rate elevated — 2-touch max trigger required' },
    { delay: 3200, type: 'info', text: 'Running formation matrix evaluation: 4-3-3, 3-4-3, 5-3-2...' },
    { delay: 3700, type: 'data', text: 'Wide Overload Index: 3-4-3 scored 91/100' },
    { delay: 4000, type: 'data', text: 'Counter-press resistance: 3-4-3 scored 87/100' },
    { delay: 4300, type: 'ok',   text: 'Optimal formation selected: 3-4-3 Wide Overload Protocol' },
    { delay: 4700, type: 'info', text: 'Generating set-piece triggers (3 embedded)...' },
    { delay: 5100, type: 'ok',   text: 'Tactical brief compiled — confidence: 94.2%' },
    { delay: 5400, type: 'sys',  text: 'Briefing ready for coaching staff delivery ■' },
  ],
  mancity: [
    { delay: 0,    type: 'sys',  text: 'Foundry IQ v3.1 — Tactical Analysis Engine initialised' },
    { delay: 300,  type: 'sys',  text: 'Connecting to Azure AI Foundry endpoint...' },
    { delay: 700,  type: 'ok',   text: 'Agent pipeline authenticated ✓' },
    { delay: 1000, type: 'info', text: 'Loading opponent profile: Manchester City' },
    { delay: 1400, type: 'data', text: 'Formation detected: 3-2-4-1 | Style: Positional Play' },
    { delay: 1700, type: 'data', text: 'PPDA score ingested: 11.4 → classified MODERATE' },
    { delay: 2100, type: 'data', text: 'Build-up pattern: left-side bias (67% of sequences)' },
    { delay: 2400, type: 'data', text: 'Set piece vulnerability: corner conversion 24% against' },
    { delay: 2800, type: 'warn', text: 'Rodri neutralisation critical — isolate pivot from CM support' },
    { delay: 3200, type: 'info', text: 'Running formation matrix evaluation: 4-4-2, 4-3-3, 5-3-2...' },
    { delay: 3700, type: 'data', text: 'Deep block efficiency: 5-3-2 scored 84/100' },
    { delay: 4000, type: 'data', text: 'Counterattack potential: 4-3-3 scored 79/100' },
    { delay: 4300, type: 'ok',   text: 'Optimal formation selected: 5-3-2 Deep Block' },
    { delay: 4700, type: 'info', text: 'Generating set-piece triggers (4 embedded)...' },
    { delay: 5100, type: 'ok',   text: 'Tactical brief compiled — confidence: 79.6%' },
    { delay: 5400, type: 'sys',  text: 'Briefing ready for coaching staff delivery ■' },
  ],
}

// ─── Reasoning Steps ──────────────────────────────────────────────────────────

export const REASONING_STEPS = {
  liverpool: [
    {
      phase: 'Data Ingestion',
      color: 'cyan',
      title: 'Foundry IQ — Opponent Profile Loaded',
      detail: 'Ingested Liverpool FC\'s last 14 match datasets across Premier League and European fixtures. Identified formation lock (4-3-3), PPDA of 7.2, and average high-line depth of 52m. Flagged wide-channel exposure as the primary exploit vector based on fullback overlap frequency of 68%.',
    },
    {
      phase: 'Pattern Recognition',
      color: 'violet',
      title: 'Three Counter-Lane Vectors Identified',
      detail: 'Liverpool\'s fullbacks consistently advance above the halfway line during build-up. This creates 18–22m pockets of unguarded space on transitions lasting 3–5 seconds per sequence. Agent identified three high-probability counter lanes: left channel, right channel, and the half-space between CB and overlapping FB.',
    },
    {
      phase: 'Formation Synthesis',
      color: 'amber',
      title: 'Counter-Formation Selected: 3-4-3',
      detail: 'Evaluated 4-3-3, 4-4-2, and 3-4-3 against the exploit profile. 3-4-3 scored highest on Wide Overload Index (91/100) due to wing-back positioning. WBs are set to surge into exposed channels within 4 seconds of press break — faster than Liverpool\'s reset time of 5.8s average.',
    },
    {
      phase: 'Set Piece Integration',
      color: 'rose',
      title: '3 Set-Piece Triggers Embedded',
      detail: 'Corner routine A: Diagonal pull-back to arriving CM (scored 2x in last 6 matches vs high-line teams). Free-kick routine B: Dummy over the wall, driven low to near post. Throw-in trigger C: Quick release to exploit fullback caught upfield. All three timed to Liverpool\'s average set-up delay.',
    },
    {
      phase: 'Tactical Output',
      color: 'emerald',
      title: 'Brief Finalised — 94.2% Confidence',
      detail: 'Final brief encodes: (1) Deep 3-CB block absorbs initial press, (2) Single vertical pass trigger releases WBs into space, (3) ST movement pattern pins CB line and prevents compression. Confidence 94.2% — highest score for a Liverpool opposition brief in 3 match cycles.',
    },
  ],
  mancity: [
    {
      phase: 'Data Ingestion',
      color: 'cyan',
      title: 'Foundry IQ — Opponent Profile Loaded',
      detail: 'Ingested Manchester City\'s last 14 match datasets. Identified 3-2-4-1 formation with left-side build-up bias (67% of sequences). PPDA of 11.4 classified as moderate — City rely on positional superiority rather than physical press to win possession.',
    },
    {
      phase: 'Pattern Recognition',
      color: 'violet',
      title: 'Pivot Dependency and Set-Piece Gaps Flagged',
      detail: 'Rodri receives 34% of all first-phase passes — neutralising the pivot disrupts City\'s entire rhythm. Additionally, corner delivery analysis reveals a 24% conversion rate against from set pieces over the last 8 matches, with consistent targeting of the near-post area.',
    },
    {
      phase: 'Formation Synthesis',
      color: 'amber',
      title: 'Counter-Formation Selected: 5-3-2',
      detail: 'Evaluated 4-3-3, 4-4-2, and 5-3-2 for defensive solidity and counterattack capacity. 5-3-2 scored 84/100 on deep block efficiency. The three-CB line covers central channels where De Bruyne and Foden operate while WBs track Haaland\'s wide movement triggers.',
    },
    {
      phase: 'Set Piece Integration',
      color: 'rose',
      title: '4 Set-Piece Triggers Embedded',
      detail: 'Corner routine A: Near-post flick-on to second wave. Corner routine B: Short corner overload to exploit City\'s single-side block. Free-kick C: Driven over the wall toward the far post. Throw-in D: Quick release to isolate IFB caught in possession cycle.',
    },
    {
      phase: 'Tactical Output',
      color: 'emerald',
      title: 'Brief Finalised — 79.6% Confidence',
      detail: 'Final brief encodes: (1) Compact mid-block denies Rodri space, (2) High-intensity counter triggers within 6 seconds of turnover, (3) Set-piece package targeting near-post weakness. Confidence 79.6% — reflects City\'s adaptability mid-match as the primary uncertainty variable.',
    },
  ],
}

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
