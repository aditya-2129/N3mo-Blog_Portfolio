---
title: "Unity WebGL CI/CD Pipeline"
summary: "An automated DevOps workflow for building and deploying Unity WebGL games directly to GitHub Pages using GitHub Actions."
date: "Aug 22 2025"
draft: false
tags:
- GitHub Actions
- Unity
- WebGL
- DevOps
- CI/CD
demoUrl: https://nikkiasteinza.github.io/Unity-WebGL-Automatic-build-and-deployment/
repoUrl: https://github.com/aditya-2129/Unity-WebGL-Automatic-build-and-deployment
---

# ⚙️ Unity WebGL CI/CD — Automated Game Deployment

![Unity CI/CD Banner](https://raw.githubusercontent.com/aditya-2129/Unity-WebGL-Automatic-build-and-deployment/main/public/banner.png)

**Unity WebGL CI/CD** is a professional-grade DevOps pipeline designed to eliminate the manual overhead of game distribution. It automates the entire lifecycle of a Unity project—from code commit and headless building to cloud deployment—ensuring that your latest changes are playable within minutes.

This project showcases a robust integration between the **Unity Game Engine** and **GitHub Actions**, leveraging industrial-strength CI/CD principles for game development.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) ![Unity](https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white) ![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![YAML](https://img.shields.io/badge/YAML-CB171E?style=for-the-badge&logo=yaml&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>


---

## ✨ Features at a Glance

### 🚀 Zero-Touch Deployment
- **Push-to-Play**: Any change pushed to the `main` branch triggers a headless Unity build runner.
- **Automated Artifact Handling**: Builds are automatically compressed, optimized for web delivery, and pushed to **GitHub Pages**.

### 🏗️ Industrial Build Pipeline
- **Headless Unity Execution**: Uses high-performance Docker containers to execute Unity builds without needing a local installation.
- **Smart Caching**: Implements `actions/cache` for the Unity `Library` folder, reducing subsequent build times by up to 60%.
- **Version Control Aware**: Automatically tags builds with the specific git commit hash for tracking and debugging.

### 🛡️ DevOps Excellence
- **License Management**: Securely handles Unity's Serial/Personal license activation via GitHub Secrets.
- **Error Validation**: Automated logs capture build-time warnings and errors, stopping faulty deployments before they reach the web.

### 🎮 WebGL Optimization
- **Gzip/Brotli Ready**: Configured to handle Unity's WebGL compression for faster initial load times in the browser.
- **Responsive Web Template**: Includes a custom WebGL template that scales the game window to fit modern browser viewports.

---

## 📁 Project Structure

```bash
unity-cicd/
├── .github/
│   └── workflows/
│       └── main.yml      # The Core CI/CD Logic (Unity Build + Deploy)
├── Assets/               # Unity Source Assets
├── ProjectSettings/      # Unity Build & Platform Settings
├── WebGLTemplates/       # Custom responsive web wrappers
└── .gitignore            # Optimized for Unity workflows
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **A Unity Project** (v2022.3 LTS recommended)
- **GitHub Repository**
- **Unity Personal/Professional License**

### 2. Secret Configuration
Add the following to your GitHub Repository Secrets:
- `UNITY_LICENSE`: Your XML Unity License (obtained via manual activation).
- `UNITY_EMAIL`: Your Unity account email.
- `UNITY_PASSWORD`: Your Unity account password.

### 3. Workflow Integration
1. Copy the `.github/workflows/main.yml` from this repo to your own.
2. Ensure your Unity project is in the root or update the `projectPath` variable.
3. Enable **GitHub Pages** in your repo settings (set to `gh-pages` branch).

### 4. Direct Usage
Simply push a change to your repository:
```bash
git add .
git commit -m "feat: updated game mechanics"
git push origin main
```
Track the progress in the **"Actions"** tab of your repository.

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

