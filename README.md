# ⚽ Tactix-IQ: The AI Football Tactician

**Built for the Microsoft Agents League Hackathon** 🏆

[![Demo Video](https://img.shields.io/badge/Watch-Demo_Video-red.svg)](#) *(<- Link your YouTube/Vimeo video here!)*

Tactix-IQ is an intelligent agent designed to revolutionize how fans, coaches, and analysts interact with football data. Moving beyond simple stat-retrieval, Tactix-IQ acts as a true tactical assistant. It reasons through player roles, team formations, and specific matchups to generate actionable counter-tactics and game plans.

## 💡 The Problem
Traditional sports analytics tools act as static databases. You can look up a player's goals or a team's win rate, but the user has to do all the tactical reasoning. Furthermore, hardcoding massive rosters is inefficient, token-heavy, and instantly becomes outdated when a player transfers or gets injured. 

## 🚀 Our Solution
Tactix-IQ shifts the paradigm from **data retrieval** to **agentic reasoning**. 

Instead of acting as a massive database, Tactix-IQ uses focused data to demonstrate deep, multi-step reasoning. For this MVP, we have scoped the data to highly specific, high-stakes matchups (e.g., Arsenal vs. Real Madrid in a quarter-final scenario) to demonstrate the core innovation: **how the agent thinks.**

If you ask Tactix-IQ how to break down a low block, it doesn't just list the opponent's roster. It evaluates the space on the wings, recognizes inverted fullbacks, and suggests an overlapping tactical counter-attack to feed the wingers.

## 🛠️ Built With (Microsoft Ecosystem)
*This project was built to leverage Microsoft's agentic ecosystem.*
*   **LLM Core:** Powered by advanced reasoning models to process complex tactical prompts.
*   **Agentic Framework:** Structured to perform multi-step reasoning (Analyze Opponent -> Identify Weakness -> Formulate Counter-Tactic).
*   **Microsoft Web IQ / Search Integration (Architecture):** Designed to eventually pull live roster updates and injury reports dynamically, bypassing the need for static, token-heavy databases. *(Note: MVP uses scoped mock data to ensure reliable demonstration of the reasoning engine).*

## 🌟 Key Features
1.  **Matchup Analysis:** Compares two distinct teams and identifies critical tactical battles (e.g., midfield overload vs. wide play).
2.  **Role-Based Reasoning:** Understands modern football roles (False 9, Inverted Winger, Box-to-Box Midfielder) and how they interact on the pitch.
3.  **Dynamic Tactical Suggestions:** Generates formations and instructions tailored to exploit the specific weaknesses of the opponent.

## ⚙️ Quick Start (For Judges)

1. Clone the repository:
```bash
   git clone [https://github.com/IkmalGhaz/tactix-iq.git](https://github.com/IkmalGhaz/tactix-iq.git)
   cd tactix-iq
