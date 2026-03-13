---
title: "Bitcoin EMA Crossover Alert System"
summary: "A robust n8n workflow that calculates Exponential Moving Average (EMA) crossovers (9/21 periods) for Bitcoin across multiple timeframes, persisting state in Google Sheets and dispatching real-time trading signals via Telegram."
date: "Jan 15 2026"
draft: false
tags:
- n8n
- Trading Automation
- Cryptocurrency
- Telegram API
- Google Sheets API
- JavaScript
- Technical Analysis
---

# ₿ Bitcoin EMA Crossover Alert System — Automated TA Engine

![Bitcoin Indicator Banner](/images/projects/bitcoin-indicator/bitcoin_indicator.png)

**Bitcoin EMA Crossover Alert System** is a sophisticated technical analysis engine built entirely within **n8n**. It automates the monitoring of Bitcoin price trends by calculating 9-period and 21-period Exponential Moving Averages (EMA). When a trend shift is detected via a crossover, the system manages the state, persists the data, and dispatches institutional-grade trading signals to subscribers.

This project demonstrates the capability of low-code automation to handle complex mathematical computations and persistent state management without a traditional backend.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white) ![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 📈 Multi-Timeframe Technical Analysis
- **On-the-Fly EMA Computation**: Uses custom-coded JavaScript nodes to calculate EMA 9 and EMA 21 from raw candlestick JSON data, bypassing the need for expensive external indicator APIs.
- **Precision Crossover Detection**: Identifies Bullish (Golden Cross) and Bearish (Death Cross) signals with absolute accuracy across 5m, 15m, and 1h timeframes.
- **Deduplication Logic**: A sophisticated check-and-balance system that ensures only the *first* signal of a new trend is alerted, preventing notification fatigue.

### 💾 Persistent Signal State
- **Serverless Database**: Leverages Google Sheets as a high-availability state store.
- **Historical Logging**: Every signal is archived with price at execution, timestamp, and timeframe for future backtesting.
- **Dynamic Subscriber Routing**: Pulls recipient chat IDs in real-time from a "Subscribers" sheet, allowing for instant user onboarding.

### 🚀 High-Fidelity Notifications
- **Rich Telegram Signals**: Dispatches beautifully formatted messages including emojis, pair name (BTC/USDT), current price, and direction.
- **Automated Retries**: Built-in error handling for the Telegram Bot API to ensure signal delivery even during network congestion.

---

## 📁 Logic Flow (n8n Nodes)

```bash
bitcoin-workflow/
├── Cron Trigger         # Interval-based price fetching
├── API Connector        # Retrieves raw market OHLCV data
├── EMA Calculator [JS]  # Core mathematical engine (Code Node)
├── State Comparator     # Logic node checking Google Sheets
├── Signal Builder [JS]  # Formats the human-readable alert
└── Telegram Dispatcher  # Multi-cast signal delivery
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **n8n Instance** (Desktop or Cloud)
- **Telegram Bot API Token**
- **Google Sheets API Credentials**
- **Exchange API Support** (Public OHLCV endpoints)

### 2. Workflow Import
1. Download the `bitcoin-indicator.json` from this repository.
2. In n8n, go to **"Workflows"** -> **"Import from File"**.
3. Select the JSON file and import.

### 3. State Setup
1. Create a Google Sheet with columns: `Timeframe`, `LastSignal`, `Timestamp`, `Price`.
2. Update the **Google Sheets** nodes in n8n with your `Document ID`.
3. Configure the **Spreadsheet ID** and range for the subscriber list.

### 4. Customization
- Adjust the **Cron Trigger** nodes to your preferred frequency (e.g., every 5 minutes).
- Edit the **EMA Calculator** node if you want to use different periods (e.g., 50/200).

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

