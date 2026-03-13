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

![AI Crypto Predictor Workflow](/images/projects/AI%20Crypto%20Predictor/AI%20Crypto%20Predictor.png)


**AI Crypto Predictor & Trading Assistant** is an intelligent n8n workflow designed to synthesize complex market information and provide actionable trading advice. By combining real-time price action with fundamental news sentiment, the AI agent generates comprehensive trading signals for both spot and leveraged positions on Bitcoin.

This project showcases the power of LangChain agents within n8n, orchestrating multiple AI models (OpenAI for sentiment, Google Gemini for final analysis) to deliver polished, institutional-grade market reports directly to a Telegram chat.

## Key Features

### 📊 Comprehensive Data Aggregation
- **Market Data Retrieval**: Fetches multi-timeframe candlestick data (5-minute, 15-minute, and 1-hour intervals) from the Delta Exchange API to understand immediate volatility and long-term trends.
- **News Ingestion**: Aggregates the latest Bitcoin-related news articles from the CoinDesk Data API. It automatically filters for the most recent and relevant stories to gauge fundamental catalysts.

### 🧠 Dual-Model AI Analysis
- **Fundamental Sentiment Analysis**: Utlizes **OpenAI's LangChain integration** to parse the news articles and generate structured "Short-term" and "Long-term" sentiment scores (ranging from -1 to 1) along with detailed rationales.
- **Trading Strategy Generation**: Feeds the combined technical data (candlesticks) and fundamental data (sentiment analysis) into a **Google Gemini LangChain Agent**. The agent acts as an expert analyst, evaluating MACD, RSI, support/resistance, and volume to formulate a concrete trading plan.

### 📱 Formatted Telegram Delivery
- **Actionable Signals**: Outputs highly structured recommendations for both Spot and Leveraged trading. This includes specific Actions (Buy/Sell/Hold/Long/Short), Entry Prices, Stop-Losses, and Take-Profit levels.
- **Deep Rationale provided**: Every signal is backed by a three-part thesis: Primary Price Action Signals, Lagging Indicator Confirmation, and Sentiment & Macro Analysis.
- **Automated Delivery**: Safely splits long AI responses to respect limits and pushes the final, perfectly formatted HTML messages to a designated Telegram bot.

## Tech Stack
- **Automation Engine**: n8n
- **AI Models & Orchestration**: Google Gemini (PaLM), OpenAI, LangChain
- **External Data Sources**: Delta Exchange API (Market Data), CoinDesk API (News Data)
- **Notification**: Telegram API
