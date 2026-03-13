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

**Compliant Site Content Fetcher** is an essential **n8n** template designed for developers and automation engineers who prioritize ethical web scraping and data aggregation.

Before making any data requests to a target URL, the workflow automatically retrieves and parses the site's `robots.txt` file. If the site disallows crawling at the root level, the workflow immediately aborts, ensuring 100% compliance with the site owner's terms.

## Key Features

### 🛡️ Built-In Ethical Scraping
- **Robots.txt Parser**: Uses a custom JavaScript node to fetch `BASE_URL/robots.txt` and check for "Disallow: /" directives.
- **Auto-Abort Mechanism**: Immediately halts execution if the site does not permit bots, protecting against IPs being banned or violating terms of service.

### 🧠 Intelligent Content Extraction
- **Content-Type Detection**: Automatically reads the response headers and adapts its parsing strategy.
- **Multi-Format Support**: 
  - **JSON**: Safely parses pure JSON API endpoints.
  - **RSS/Atom Feeds**: Uses regex arrays to extract article titles and links dynamically.
  - **HTML Fallback**: If the endpoint is a standard webpage, it gracefully falls back to extracting the `<title>`, `<meta name="description">`, and a text snippet.

### ⏳ Resilient Reliability
- **Exponential Backoff**: Implements a custom mathematical backoff (base 1000ms, doubling per attempt) in combination with n8n's `Wait` node. This prevents overwhelming the target server during 5xx errors or connectivity issues.

## Tech Stack
- **Automation / Logic Flow**: n8n
- **Programming Language**: JavaScript (Node.js Code Nodes)
- **Protocols Supported**: HTTP/HTTPS, REST, RSS, Atom, HTML
