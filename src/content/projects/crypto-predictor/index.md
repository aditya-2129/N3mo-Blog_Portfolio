---
title: "AI Crypto Predictor & Trading Assistant"
summary: "An advanced n8n automation that acts as an AI-driven trading assistant. It ingests live market data and news, performs AI sentiment analysis, and uses Google Gemini to generate highly detailed, multi-timeframe trading signals delivered via Telegram."
date: "Dec 10 2025"
draft: false
tags:
- n8n
- AI Agent
- Google Gemini
- OpenAI
- Cryptocurrency
- Telegram API
- Market Data API
- News API
- Trading Automation
---

# 🤖 AI Crypto Predictor — Intelligence-Driven Trading Assistant

![AI Predictor Banner](/images/projects/AI%20Crypto%20Predictor/AI%20Crypto%20Predictor.png)

**AI Crypto Predictor & Trading Assistant** is a high-intelligence automation architecture built on **n8n**. It serves as a professional-grade analyst by synthesizing real-time technical price data with deep fundamental news sentiment. Using a dual-model AI approach (**OpenAI** + **Google Gemini**), it generates multi-timeframe trading strategies that include precise entries, stop-losses, and deep logic rationales.

This project represents the cutting edge of AI agents in FinTech, demonstrating how LLMs can be used to process heterogeneous data streams into institutional-quality investment signals.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white) ![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white) ![OpenAI](https://img.shields.io/badge/OpenAI_GPT--4o-412991?style=for-the-badge&logo=openai&logoColor=white) ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white) ![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🧠 Dual-Model Signal Synthesis
- **Sentimental Analysis (OpenAI)**: Automatically scrapes the latest Bitcoin news from CoinDesk and uses GPT-4o to generate "Short-term" vs "Long-term" sentiment scores.
- **Technical Strategy (Gemini)**: Ingests raw OHLCV market data (5m, 15m, 1h) and uses Gemini 1.5 Pro to evaluate RSI, MACD, and Volume profiles.
- **Unified Agent Logic**: A central LangChain agent acts as the "Lead Trader," merging the technical and fundamental reports into a single, cohesive thesis.

### 📊 Real-Time Data Aggregation
- **Exchange Integration**: Directly fetches live order book and candlestick data from Delta Exchange APIs.
- **Automated News Ingestion**: Sets up a polling mechanism to ensure the AI is always aware of the latest macro catalysts (ETF flows, regulatory news, etc.).

### 📱 Professional Signal Delivery
- **Institutional Reports**: Dispatches signal messages via Telegram that include:
  - **The "Play"**: Buy/Sell/Long/Short recommendation.
  - **Risk Params**: Precise Entry, Stop-Loss, and Take-Profit (Levels 1-3).
  - **The "Why"**: A 3-point breakdown covering Price Action, Indicators, and Sentiment.
- **Mobile-First UX**: Uses Telegram's MarkdownV2 for beautiful formatting and readability on the go.

---

## 📁 Intelligent Pipeline (n8n)

```bash
ai-predictor-logic/
├── Trigger Node         # Scheduled or On-Demand activation
├── Market Data Hook     # Fetches price action (Technical)
├── News Scraper Node    # Fetches global catalysts (Fundamental)
├── OpenAI Sentiment     # Processes News into Sentiment Scores
├── Gemini Analyst       # Processes Technicals + Sentiment
└── Telegram Dispatcher  # Formatted HTML/Markdown signal delivery
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **n8n Instance** (Hosted or Cloud)
- **Google AI Studio Key** (Gemini)
- **OpenAI API Key**
- **RapidAPI / Exchange API Keys**

### 2. Workflow Import
1. Download the `ai-predictor.json` from this repository.
2. In n8n, navigate to **"Workflows"** -> **"Import from File"**.
3. Select the JSON and import the full agent structure.

### 3. Connection Config
1. **Gemini Node**: Add your credentials for the Google Generative AI integration.
2. **OpenAI Node**: Add your OpenAI API key for the LangChain sub-agent.
3. **HTTP Nodes**: Update the `Authorization` headers with your specific data provider keys.

### 4. Customization
- Modify the **System Prompt** in the Gemini node to reflect your specific trading style (e.g., "Be conservative," "Focus on scalping").

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

