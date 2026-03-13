---
title: "AI Blog Content Repurposer"
summary: "An AI-powered engine that transforms blog URLs into viral social media assets (LinkedIn, Twitter, SEO, Video) using Google Gemini and Next.js."
date: "Feb 13 2026"
draft: false
tags:
- Next.js
- Google Gemini API
- Vercel AI SDK
- TypeScript
- Tailwind CSS
- Shadcn UI
demoUrl: https://up-growth-assessment-ai-powered-blo.vercel.app/
repoUrl: https://github.com/aditya-2129/UpGrowth-Assessment-AI-Powered-Blog-Content-Repurposer
---

# 🤖 AI Blog Content Repurposer — Viral Content Engine

![AI Repurposer Banner](https://raw.githubusercontent.com/aditya-2129/UpGrowth-Assessment-AI-Powered-Blog-Content-Repurposer/main/public/banner.png)

**AI Blog Content Repurposer** is a cutting-edge automation tool designed to bridge the gap between long-form blog content and high-impact social media engagement. By leveraging the power of **Google Gemini 1.5 Pro** and the **Vercel AI SDK**, it transforms any blog URL into a suite of optimized assets for LinkedIn, Twitter, SEO, and Video Scripts—instantly.

This platform is engineered for marketers and creators who need to maximize the ROI of their content without manual effort.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white) ![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🚀 Smart Repurposing Engine
- **LinkedIn Mastery**: Generates professional, value-driven summaries with industry-relevant hashtags and engagement hooks.
- **Twitter Thread Generator**: Breaks down complex articles into punchy, viral-ready threads designed for high retweets.
- **SEO Powerhouse**: Automatically crafts meta descriptions, suggests high-ranking keywords, and optimizes title tags based on article sentiment.
- **Short-Form Video Scripts**: Converts text into dialogue-ready scripts for TikTok, Instagram Reels, and YouTube Shorts.

### 🧠 Intelligent Analysis
- **Context-Aware Extraction**: Uses custom scraping logic to isolate the core value of a blog post, ignoring navigation menus and ads.
- **Real-Time Streaming**: Watch the AI "think" and write in real-time using modern server-sent events for a seamless UX.

### 🎨 Premium User Experience
- **Dark Mode Aesthetics**: A sleek, focused interface built with **Tailwind CSS 4** and **Radix UI** primitives.
- **One-Click Copy**: Instantly copy generated assets to your clipboard for immediate posting.

---

## 📁 Project Structure

```bash
repurposer/
├── src/
│   ├── app/             # Next.js 15 App Router
│   │   ├── api/ai/      # Vercel AI SDK route handlers
│   │   └── page.tsx     # Main dashboard interface
│   ├── components/      # UI components (OutputCard, UrlInput)
│   ├── lib/             # Core logic
│   │   ├── gemini.ts    # AI model configuration
│   │   └── scraper.ts   # Blog content extraction logic
│   └── hooks/           # Custom React hooks for UI state
└── public/              # Brand assets & icons
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **Node.js 20+**
- **Google AI Studio Key** (Get it at [aistudio.google.com](https://aistudio.google.com/))

### 2. Clone & Install
```bash
git clone https://github.com/aditya-2129/UpGrowth-Assessment-AI-Powered-Blog-Content-Repurposer.git
cd UpGrowth-Assessment-AI-Powered-Blog-Content-Repurposer
npm install
```

### 3. Environment Config
Create a `.env.local` file:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key_here
```

### 4. Run Development
```bash
npm run dev
```

---

## 📄 License
This project is part of the UpGrowth assessment and is available for portfolio review purposes.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

