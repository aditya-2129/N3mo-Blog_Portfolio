---
title: "DDC API AI Chat & Image Assistant"
summary: "A versatile n8n chat automation that routes user messages to an external Language Model (GPT-4.1-mini equivalent) for conversational responses, and to FLUX.1 for dynamic, high-quality image generation."
date: "Nov 05 2025"
draft: false
tags:
- n8n
- AI Chatbot
- LangChain
- GPT-4.1-mini
- FLUX.1
- Image Generation
- API Integration
---

# 🤖 DDC API AI Chat & Image Assistant — n8n Powered Intelligence

![DDC Assistant Banner](https://raw.githubusercontent.com/aditya-2129/Automated-Marketing-Socials-N8N/main/public/banner.png)

**DDC API AI Chat & Image Assistant** is a sophisticated automation architecture built on **n8n** that bridges the gap between conversational AI and generative media. By orchestrating complex logic flows, it routes user inquiries through high-performance LLMs or state-of-the-art image diffusion models, creating a unified assistant experience.

Built with **LangChain** nodes and custom API integrations, this project demonstrates the power of low-code platforms in deploying production-ready AI services.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white) ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white) ![GPT-4](https://img.shields.io/badge/GPT--4o--mini-412991?style=for-the-badge&logo=openai&logoColor=white) ![FLUX.1](https://img.shields.io/badge/FLUX.1-black?style=for-the-badge&logo=adobe&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🧠 Intelligent Chat Orchestration
- **Dual-Path Routing**: An intelligent agent logic that determines whether to respond with text or initiate an image generation task.
- **LLM Contextualization**: Integrates with `gpt-4o-mini` equivalents for rapid, personality-driven dialogue.
- **Custom Prompt Engineering**: Uses specialized system prompts to ensure the AI maintains a consistent tone and helpfulness.

### 🎨 Creative AI Pipeline
- **FLUX.1-Kontext Integration**: Connects to advanced diffusion models to generate high-fidelity 1024x1024 or 512x512 images on demand.
- **Dynamic Asset Delivery**: Automatically parses JSON responses to extract raw binary or URL-based image data for immediate user viewing.

### 🔌 Developer-Centric Design
- **Bearer Auth Security**: Implements robust API authentication headers for all external AI provider calls.
- **Node-Based Modularity**: Every segment of the logic is modular, allowing for easy swapping of models (e.g., GPT-4 to Claude 3.5).
- **Automated Logging**: Real-time workflow tracking within n8n for debugging and usage analytics.

---

## 📁 Workflow Architecture

```bash
n8n-workflow/
├── Webhook Trigger      # Entry point for user messages
├── Model Switch Node    # Logic to branch (Text vs Image)
├── LangChain Chain      # Core LLM processing engine
├── FLUX Image Node      # Custom HTTP Request for image gen
├── Response Formatter   # JavaScript node for cleaning JSON
└── Success Webhook      # Final delivery back to the client
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **n8n Desktop** or **n8n Cloud**
- **DDC API / AI Provider Key**

### 2. Workflow Import
1. Download the `workflow.json` from this repository.
2. In n8n, click **"Add Workflow"** -> **"Import from File"**.
3. Select the `workflow.json`.

### 3. Connection Config
1. Locate the **HTTP Request** nodes (Text and Image).
2. Update the **"Authentication"** section with your `Bearer Token`.
3. Set the target URLs to your specific AI provider's endpoints.

### 4. Activation
- Click the **"Execute Workflow"** button to enter testing mode.
- Send a test payload to the webhook URL to verify the response.

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

