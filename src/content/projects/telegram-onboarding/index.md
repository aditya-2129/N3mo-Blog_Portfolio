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

![Telegram Onboarding Workflow](/images/projects/Onboard%20users%20(captures%20chat_id%20once)/Onboard%20users%20(captures%20chat_id%20once).png)


**Telegram Subscriber Onboarding System** is a foundational automation for any Telegram-based community or service. Utilizing **n8n**, this workflow acts as a simple but highly effective Customer Relationship Management (CRM) entry point. 

When a user initiates a conversation or sends a message to the bot, the automation verifies their registration status, updates a central database, and responds with a dynamically personalized greeting.

## Key Features

### 📡 Instant Telegram Trigger
- **Webhook Integration**: Listens securely for inbound messages from a configured Telegram bot.
- **Payload Parsing**: Automatically extracts critical metadata from the incoming JSON payload, including the user's `chatId`, `username`, and `first_name`.

### 📂 Google Sheets CRM Validation
- **Database Querying**: Instantly searches a Google Sheets document (the "Telegram Subscriber" list) using the incoming `chatId`.
- **Duplicate Prevention**: Evaluates the returned data using an `If` statement. If a record matching the `chatId` is found, the workflow branches to handle it as an existing user, preventing redundant CRM entries.
- **Append & Update**: If the user is new, their information is structured and appended securely to the Google sheet.

### 💬 Contextual & Personalized Messaging
- **Dynamic Welcome**: Uses the Telegram node to send a customized "✅ Thank you for subscribing" message to brand-new users.
- **Return Greetings**: Employs personalization variables (`{{$json.first_name}}`) to greet returning users warmly (e.g., "Hi Aditya, you are already subscribed ❤").

## Tech Stack
- **Automation / Logic**: n8n
- **Database**: Google Sheets API (OAuth2 Authentication)
- **Messaging Interface**: Telegram Bot API
