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

**DDC API AI Chat & Image Assistant** is an interactive automation built in **n8n** that demonstrates the power of unifying multiple AI models behind a single chat interface. 

By leveraging the n8n LangChain Chat Trigger, it acts as a conversational gateway. Depending on the configured routing, the assistant can either engage in intelligent dialogue using an advanced LLM or generate dynamic, high-resolution images based on user prompts.

## Key Features

### 🤖 Intelligent Chat Capabilities
- **LLM Integration**: Connects via HTTP Request to an external AI provider (API.a4f.co) to access a `gpt-4.1-mini` equivalent model.
- **Contextual Responses**: Returns conversational, context-aware responses directly to the user's chat interface.

### 🎨 On-Demand Image Generation
- **FLUX.1 Integration**: Uses the `FLUX.1-kontext-pro` model to generate 512x512 images based on the user's text prompts.
- **Dynamic Delivery**: Extracts the generated image URLs and delivers them automatically back through the chat interface.

### 🔌 Modular API Design
- **Flexible Routing**: The workflow is designed as a template. The central Chat Trigger can be easily swapped or connected to either the text-generation or image-generation nodes based on the user's specific needs at the time.
- **Bearer Token Auth**: Implements secure HTTP requests using Bearer authentication headers.

## Tech Stack
- **Automation / Orchestration**: n8n, LangChain
- **Text Generation AI**: GPT-4.1-mini 
- **Image Generation AI**: FLUX.1 
- **Integration**: RESTful APIs, custom JavaScript parsing
