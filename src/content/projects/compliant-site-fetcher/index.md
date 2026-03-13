---
title: "Compliant Site Content Fetcher"
summary: "An n8n automation template designed for ethical web scraping. It automatically parses `robots.txt` files to ensure compliance before fetching and extracting data (JSON, RSS, or HTML), featuring built-in exponential backoff for rate limiting."
date: "Oct 20 2025"
draft: false
tags:
- n8n
- Web Scraping
- Automation
- RSS/Atom
- JSON
- Data Extraction
- Ethical AI
---

# 🛡️ Compliant Site Content Fetcher — Ethical Scraping Engine

![Scraping Automation Banner](https://raw.githubusercontent.com/aditya-2129/Automated-Marketing-Socials-N8N/main/public/banner.png)

**Compliant Site Content Fetcher** is a masterclass in responsible automation. Built on **n8n**, this system is designed for developers who need to aggregate web data without compromising ethical standards or technical compliance. It treats `robots.txt` files as hard boundaries, automatically validating every request before execution to preserve site integrity and prevent IP blacklisting.

By combining intelligent content detection with resilient backoff algorithms, this project sets the standard for production-grade, low-impact data extraction.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![RegEx](https://img.shields.io/badge/RegEx-black?style=for-the-badge&logo=codeforces&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) ![RSS](https://img.shields.io/badge/RSS-FFA500?style=for-the-badge&logo=rss&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🛡️ Automated Compliance Guard
- **Robots.txt Validator**: A custom-coded JavaScript engine that fetches and parses a site's `robots.txt` in real-time.
- **Auto-Kill Directive**: If the parser detects a `Disallow: /` or specific bot exclusions, the workflow terminates immediately with a detailed compliance log.
- **User-Agent Management**: Transparently declares its identity to site owners, adhering to "Politeness" protocols.

### 🧠 Polymorphic Content Extraction
- **Header-Aware Routing**: Automatically identifies the input format (HTML, JSON, or XML) and routes the payload to the specific parser node.
- **Advanced Scraping Modes**:
  - **API Mode**: Directly parses structured JSON for high-fidelity data.
  - **Feed Mode**: Converts RSS/Atom XML into refined, object-based article lists.
  - **Fallback DOM Mode**: Uses specialized selectors to extract meta-descriptions and titles from unstructured standard webpages.

### ⏳ Industrial-Grade Resilience
- **Exponential Backoff**: Implements a sophisticated retry algorithm (base 1000ms, doubling per attempt) to handle 5xx server errors or rate limiting (429s).
- **Rate-Limit Awareness**: Includes built-in `Wait` nodes that respect site-specific "crawl-delay" directives found in robots.txt files.

---

## 📁 Workflow Architecture

```bash
site-fetcher-workflow/
├── Webhook Trigger      # Entry point with Target URL
├── Compliance Node      # JavaScript-based robots.txt check
├── HTTP Fetcher         # Secure data retrieval with custom Headers
├── Logic Switch         # Determines Content-Type (JSON/RSS/HTML)
├── Payload Parser       # Regex & Logic nodes for data cleaning
└── Success Output       # Formatted JSON storage
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **n8n Instance** (v1.0+ recommended)
- **Node.js** capability enabled in n8n settings (for custom JavaScript nodes)

### 2. Workflow Import
1. Download the `compliant-fetcher.json` from this repository.
2. In n8n, click **"Add Workflow"** -> **"Import from File"**.
3. Select the JSON file.

### 3. Usage
1. Send a POST request to the Webhook URL with a `targetUrl` parameter:
   ```json
   {
     "targetUrl": "https://example.com/blog"
   }
   ```
2. Monitor the n8n execution log to see the compliance verification and data extraction result.

---

## 📄 License
This template is part of an automation framework for ethical AI and is available under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

