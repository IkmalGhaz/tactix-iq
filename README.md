# TactixIQ — Autonomous Football Scout Agent

> **Microsoft Agents League Hackathon 2026** · Reasoning Agents Track · Foundry IQ

[![Hackathon](https://img.shields.io/badge/Microsoft%20Agents%20League-2026-blue?style=flat-square)](https://aka.ms/agentsleague)
[![Track](https://img.shields.io/badge/Track-Reasoning%20Agents-purple?style=flat-square)](https://aka.ms/agentsleague)
[![IQ Layer](https://img.shields.io/badge/IQ%20Layer-Foundry%20IQ-emerald?style=flat-square)](https://aka.ms/agentsleague)
[![Live](https://img.shields.io/badge/Status-Live%20Demo-green?style=flat-square)](https://github.com/IkmalGhaz/tactix-iq)

---

## What is TactixIQ?

**TactixIQ** is an autonomous AI football scouting agent that analyses real FIFA World Cup 2026™ opponents and generates tactical briefs — automatically, step by step, like a real coaching analyst.

You select an opponent (Brazil, France, Argentina, Spain, England, Germany). The agent ingests their formation, press intensity, player threats, and defensive line data, then reasons through a multi-step pipeline to recommend a counter-formation and produce a complete tactical brief — all powered by **Microsoft Foundry IQ** and the **Claude claude-sonnet-4-6 model**.

---

## Live Demo

**Run locally:**
```bash
git clone https://github.com/IkmalGhaz/tactix-iq.git
cd tactix-iq
npm install
npm run dev
# → http://localhost:5173
```

---

## How It Works — Agent Reasoning Pipeline

TactixIQ implements a **multi-step reasoning agent** using Foundry IQ's agentic knowledge retrieval pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                   FOUNDRY IQ PIPELINE                       │
│                                                             │
│  1. DATA INGESTION                                          │
│     └─ Load opponent profile (formation, PPDA, xG, stats)  │
│                                                             │
│  2. PATTERN RECOGNITION                                     │
│     └─ Identify tactical weaknesses & exploit vectors      │
│                                                             │
│  3. PLAYER THREAT ANALYSIS                                  │
│     └─ Score key players, generate containment plans       │
│                                                             │
│  4. FORMATION SYNTHESIS                                     │
│     └─ Evaluate 4 formations, select optimal counter       │
│                                                             │
│  5. TACTICAL OUTPUT                                         │
│     └─ Generate brief + set-piece triggers + confidence %  │
└─────────────────────────────────────────────────────────────┘
```

Each step is a **discrete reasoning inference** — not a single prompt. The agent builds context progressively, exactly as a human analyst would.

---

## Microsoft IQ Integration

| IQ Layer | How TactixIQ Uses It |
|---|---|
| **Foundry IQ** | Agentic knowledge retrieval — the agent calls the AI model at each pipeline step, retrieves grounded tactical insights, and cites its reasoning. Each step reduces hallucination by grounding outputs in structured opponent data before prompting. |

The **Foundry IQ Terminal** panel in the UI visualises the live pipeline stream — every event (SYS / OK / DATA / WARN) represents a discrete Foundry IQ inference step, showing exactly how the agent reaches its conclusion.

---

## Features

| Feature | Description |
|---|---|
| 🔴 **Live AI Tactical Brief** | Real Claude claude-sonnet-4-6 API call generates a unique brief per opponent |
| ⚽ **Interactive Football Pitch** | SVG pitch with animated player nodes per formation |
| 🖥️ **Foundry IQ Terminal** | Live-streaming terminal showing every agent reasoning step |
| 📊 **Scouting Hub** | Real World Cup 2026™ squads, player ratings, recent form |
| 🧠 **AI Reasoning Log** | 5-step decision trace with phase labels and confidence score |
| 🔄 **6 Opponent Profiles** | Brazil, France, Argentina, Spain, England, Germany — real data |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| AI Model | Claude claude-sonnet-4-6 (via Anthropic API) |
| IQ Layer | Microsoft Foundry IQ (agentic reasoning pattern) |
| Data | FIFA World Cup 2026™ real squads & formations |
| Dev Tool | GitHub Copilot (VS Code) |

---

## Project Structure

```
tactix-iq/
├── src/
│   ├── App.jsx                    # Root — all views + state
│   ├── data.js                    # Real WC2026 data: squads, formations, stats
│   ├── index.css                  # Tailwind + custom utilities
│   └── components/
│       ├── Sidebar.jsx            # Nav + opponent switcher
│       ├── Topbar.jsx             # Header with live opponent info
│       ├── FoundryTerminal.jsx    # Live-streaming AI terminal
│       ├── FootballPitch.jsx      # SVG pitch + animated nodes
│       ├── ReasoningLog.jsx       # 5-step AI decision trace
│       └── ScoutingHub.jsx        # Player profiles + form table
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Hackathon Details

| Field | Value |
|---|---|
| **Event** | Microsoft Agents League Hackathon 2026 |
| **Track** | 🧠 Reasoning Agents |
| **IQ Layer** | Foundry IQ |
| **Submission Deadline** | June 14, 2026 |
| **Developer** | Mohamad Ikmal bin Mohd Ghazali |
| **University** | Universiti Kebangsaan Malaysia (UKM) |

---

## Judging Criteria Alignment

| Criterion | How TactixIQ Addresses It |
|---|---|
| **Accuracy & Relevance (20%)** | Real FIFA WC2026™ squads, formations, live results (Jun 11–13) |
| **Reasoning & Multi-step Thinking (20%)** | 5-step Foundry IQ pipeline — discrete inference per phase |
| **Creativity & Originality (15%)** | Football scouting agent is a novel, domain-specific use case |
| **User Experience & Presentation (15%)** | Premium dark-mode UI inspired by FotMob/Sofascore |
| **Reliability & Safety (20%)** | Structured prompting, grounded data, no hallucination risk on facts |

---

*Built for the Microsoft Agents League Hackathon 2026 · Foundry IQ · Reasoning Agents Track*
