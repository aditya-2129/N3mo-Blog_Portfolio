---
title: "Delta EMA Order Placer"
summary: "An algorithmic trading tool that automates crypto order execution on Delta Exchange based on Exponential Moving Average (EMA) crossovers."
date: "Sep 15 2025"
draft: false
tags:
- Python
- Dash
- Algorithmic Trading
- Crypto
- Delta Exchange API
repoUrl: https://github.com/aditya-2129/delta_ema_order_placer_dash_window
---

# 📉 Delta EMA Order Placer — Algorithmic Crypto Trading

![Delta EMA Banner](https://raw.githubusercontent.com/aditya-2129/delta_ema_order_placer_dash_window/main/public/banner.png)

**Delta EMA Order Placer** is a specialized algorithmic trading utility engineered for the **Delta Exchange** ecosystem. It automates the execution of trend-following strategies using Exponential Moving Average (EMA) crossover logic, enabling traders to lock in entries and exits with mathematical precision and zero emotional bias.

Combining **Python**'s analytical power with a lightweight **Dash** interface, it provides a "set-and-forget" solution for managing high-volatility crypto positions.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Dash](https://img.shields.io/badge/Dash-0081C8?style=for-the-badge&logo=plotly&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white) ![Delta Exchange](https://img.shields.io/badge/Delta_Exchange-orange?style=for-the-badge&logo=bitcoin&logoColor=white) ![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socket.io&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🤖 High-Precision Algo Engine
- **EMA Crossover Strategy**: Automated Long/Short entry triggers based on fast and slow EMA intersections.
- **Low-Latency Execution**: Direct integration with Delta Exchange's REST API for rapid order placement.
- **Real-Time Data Streaming**: Uses WebSockets to ingest live price ticks, ensuring the strategy acts on the most current data.

### 🖥️ Monitoring Dashboard
- **Visual Analytics**: A clean **Dash** interface that displays live account balance, current positions, and active PnL.
- **Interactive Charts**: Dynamic Plotly charts showing the price action overlaid with your configured EMA lines.
- **Execution Logs**: A real-time terminal window inside the dashboard that tracks every API call and trade decision.

### ⚙️ Risk Management
- **Automated Stop-Loss/Take-Profit**: Once an order is placed, the system can automatically attach exit triggers to protect your capital.
- **Dynamic Position Sizing**: Configurable risk-per-trade settings that adjust based on your current wallet balance.

---

## 📁 Project Structure

```bash
delta-ema-placer/
├── app.py               # Main Dash Application & UI logic
├── engine/              # Core Trading Logic
│   ├── strategy.py      # EMA Crossover implementation
│   ├── delta_api.py     # Wrapper for Delta Exchange REST/WS
│   └── logger.py        # Professional trade logging
├── config/              # User Configuration
│   └── settings.yaml    # EMA periods, Risk settings, Symbols
├── utils/               # Technical Analysis helpers
└── requirements.txt     # Python dependencies
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **Python 3.9+**
- **Delta Exchange Account** (with API Key and Secret)

### 2. Clone & Install
```bash
git clone https://github.com/aditya-2129/delta_ema_order_placer_dash_window.git
cd delta_ema_order_placer_dash_window
pip install -r requirements.txt
```

### 3. API Configuration
Create a `config/secrets.json` file (or use environment variables):
```json
{
  "api_key": "your_delta_key",
  "api_secret": "your_delta_secret"
}
```

### 4. Adjust Strategy
Edit `config/settings.yaml`:
```yaml
symbol: "BTCUSD"
ema_fast: 9
ema_slow: 21
risk_percentage: 2.0
```

### 5. Launch Dashboard
```bash
python app.py
```
Visit `http://localhost:8050` to monitor the algorithm.

---

## ⚠️ Disclaimer
Trading cryptocurrencies involves significant risk. This tool is for educational and portfolio demonstration purposes. Always test on a testnet before using real capital.

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

