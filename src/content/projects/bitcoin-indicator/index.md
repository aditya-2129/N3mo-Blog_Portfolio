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

![Bitcoin EMA Indicator Workflow](/images/projects/bitcoin-indicator/bitcoin_indicator.png)


**Bitcoin EMA Crossover Alert System** is a sophisticated trading indicator built entirely within **n8n**. It automates the technical analysis of Bitcoin price movements by calculating 9-period and 21-period Exponential Moving Averages (EMA). When a bullish or bearish crossover occurs, the system logs the event and instantly notifies subscribers via a Telegram bot.

This workflow demonstrates complex state management in a serverless automation environment, ensuring that signals are accurate, deduplicated, and delivered reliably.

## Key Features

### 📈 Multi-Timeframe Technical Analysis
- **Custom JS Indicators**: Instead of relying on external charting APIs, the workflow uses custom JavaScript nodes to ingest raw candlestick data and mathematically compute the EMA 9 and EMA 21.
- **Crossover Detection**: Accurately identifies the exact moment the fast EMA crosses the slow EMA, classifying it as a "Bullish" (Buy) or "Bearish" (Sell) signal.
- **Multiple Timeframes**: Capable of processing data across different time intervals (e.g., 5-minute, 15-minute) simultaneously.

### 💾 Persistent State Management
- **Google Sheets Integration**: Uses Google Sheets as a lightweight database to store the state of the last known crossover. 
- **Signal Deduplication**: Before sending an alert, the workflow compares the current crossover against the last stored state (using a unique crossover key) to prevent duplicate alerts for the same event.
- **Batched Processing**: Automatically handles multiple subscriber notifications using n8n's batching mechanisms.

### 🚀 Real-Time Notifications
- **Telegram Bot Dispatcher**: Dynamically formats the trading signal (including side, price, time, and pair) into a clean, emoji-rich message.
- **Subscriber List**: Pulls a list of active Telegram chat IDs from Google Sheets to distribute the alert directly to end-users' devices.

## Tech Stack
- **Automation Core**: n8n
- **Data Processing**: Advanced JavaScript (Code Nodes)
- **Database / State**: Google Sheets API
- **Notification Delivery**: Telegram Bot API
- **Scheduling**: Cron-based interval triggers
