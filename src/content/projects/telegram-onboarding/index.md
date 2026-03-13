---
title: "Telegram Subscriber Onboarding System"
summary: "An automated n8n workflow designed to onboard new users to a Telegram bot. Captures dynamic chat context upon message receipt, checks an external Google Sheets database to prevent duplicate entries, and dispatches personalized welcome messages."
date: "Sep 12 2025"
draft: false
tags:
- n8n
- Telegram API
- Google Sheets API
- Chatbot Onboarding
- Automation
- CRM Integration
---

# 🤖 Telegram Subscriber Onboarding — Automated CRM Engine

![Telegram Onboarding Banner](/images/projects/Onboard%20users%20(captures%20chat_id%20once)/Onboard%20users%20(captures%20chat_id%20once).png)

**Telegram Subscriber Onboarding** is a foundational automation for any Telegram-based community or digital service. Built on **n8n**, this system acts as a high-speed Customer Relationship Management (CRM) entry point. It automates the entire lifecycle of a new subscriber—from identifying their unique chat ID to validating their existence in a secure database and delivering a hyper-personalized welcome experience.

By orchestrating interactions between the Telegram Bot API and Google Sheets, this workflow ensures 100% data integrity with zero manual oversight.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white) ![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white) ![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>


---

## ✨ Features at a Glance

### 📡 Real-Time Webhook Trigger
- **Instant Activation**: Captures inbound Telegram messages with sub-second latency.
- **Deep Metadata Extraction**: Automatically parses the raw JSON payload to isolate `chat_id`, `first_name`, `username`, and `last_name` for precise CRM logging.

### 📂 Google Sheets CRM Integration
- **Smart Validation**: Instantly queries your central "Subscribers" Google Sheet to check if the current user already exists.
- **Branching Logic**: Uses an `If` node to intelligently route the workflow:
  - **New Users**: Appends their row to the CRM and triggers a welcome sequence.
  - **Returning Users**: Identifies them by unique ID and skips the onboarding process to avoid spamming.
- **Secure Data Storage**: Uses OAuth2 authentication for enterprise-grade security when writing to sheets.

### 💬 Personalized Messaging Engine
- **Dynamic Variable Injection**: Uses `{{$json.first_name}}` to address the user directly, increasing engagement.
- **Rich Media Support**: Configured to send everything from text-based instructions to complex keyboard interfaces.
- **Status Updates**: Sends immediate confirmation messages (e.g., "✅ You're now subscribed!") to brand-new members.

---

## 📁 Workflow Architecture

```bash
telegram-onboarding/
├── Telegram Webhook [Trigger] # Listens for /start
├── Google Sheets [Look up]    # Checks for existing Chat ID
├── Logic Filter [If/Else]     # Determines User Status
├── Google Sheets [Append]     # Saves New User Data
└── Telegram Send [Action]     # Dispatches Personalized Welcome
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **n8n Instance** (Desktop or Self-hosted)
- **Telegram Bot Token** (Create one via [@BotFather](https://t.me/botfather))
- **Google Cloud Console Project** (Enabled Google Sheets API)

### 2. Workflow Import
1. Download the `onboarding-workflow.json` from this repository.
2. In n8n, click **"Add Workflow"** -> **"Import from File"**.
3. Select the JSON file.

### 3. Connection Config
1. **Telegram Node**: Click and select **"Add Credentials"**, paste your Bot Token.
2. **Google Sheets Node**: Follow the [n8n guide for OAuth2](https://docs.n8n.io/integrations/builtin/credentials/google/) to link your Google account.
3. **Sheet ID**: Replace the placeholder Sheet ID with the ID of your "Subscribers" spreadsheet.

### 4. Activation
- Switch the workflow toggle to **"Active"**.
- Open your bot in Telegram and type `/start`. Your name should instantly appear in your Google Sheet!

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

