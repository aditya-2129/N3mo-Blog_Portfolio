---
title: "AWARDS"
summary: "The **Awards Platform** is a modern web application designed to simplify the process of creating, managing, and showcasing awards. Tailored for organizations, teams, and events, it combines a sleek user interface with a powerful backend, making nominations, voting, and winner announcements effortless. Built with **TailwindCSS**, it ensures a visually stunning and fully responsive design for all devices."
date: "2024-11-25"
draft: false
tags:
- JavaScript
- React
- Tailwind CSS
- GSAP
- Video Processing
- React Icons
demoUrl: https://awards3dandanimation.netlify.app/
repoUrl: https://github.com/leonardoo210399/awards.git
---


# 🏆 AWARDS — 3D Animation & Awards Showcase Platform

![AWARDS Banner](https://raw.githubusercontent.com/leonardoo210399/awards/main/public/img/about.webp)

**AWARDS** is a visually captivating web experience designed to showcase high-end design awards with a focus on immersive storytelling and premium aesthetics. Inspired by industry leaders like Zentry and Awwwards, this platform serves as a benchmark for modern front-end performance and visual excellence.

Combining **React**'s efficiency with **GSAP**'s power, AWARDS transitions seamlessly between geometric layouts and high-definition video backgrounds, creating a journey rather than just a website.

---

## 🛠️ Technology Stack

<div class="tech-stack">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

</div>

---

## ✨ Features at a Glance

### 🎢 Immersive Visuals
- **Scroll-Based Animations**: Powered by **GSAP ScrollTrigger**, the content lives and breathes with the user's interaction.
- **Geometric Dynamic Masks**: Uses CSS `clip-path` transitions to transform whole sections of the site during navigation.
- **3D Interactive Hover**: Every card and element reacts to mouse movement with sophisticated 3D transformations.

### 🎥 Media-Rich Storytelling
- **Seamless Video Transitions**: Background videos morph and shift as users explore different "features" of the app.
- **Ambient Audio Integration**: A looped background soundtrack that responds to user interaction, enhancing the immersive experience.
- **High-Performance Video Playback**: Optimized assets using WebP and H264 for instant loading without lag.

### 🎨 Design System
- **Custom Typography**: Integration of unique fonts like *Circular Web* and *Zentry Regular* for a pro-grade look.
- **Responsive Mastery**: Built with **Tailwind CSS**, ensuring the complex 3D and clip-path animations scale perfectly from mobile to ultra-wide displays.
- **Motion Polish**: Fine-tuned easing functions for every transition, ensuring a "buttery smooth" UI/UX.

---

## 📁 Project Structure

```bash
awards/
├── public/               # Static assets
│   ├── fonts/           # Professional brand fonts
│   ├── img/             # WebP optimized imagery
│   └── videos/          # High-definition feature clips
├── src/
│   ├── components/      # Modular UI core
│   │   ├── Hero.jsx     # Landing experience with video mask
│   │   ├── Features.jsx # Interactive 3D grid
│   │   ├── Story.jsx    # Narrative section with clip-path
│   │   └── VideoPreview.jsx # Hover-to-play mechanics
│   ├── App.jsx          # Entry point and layout
│   └── index.css        # Tailwind directives & custom masks
└── vite.config.js       # Build optimization settings
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **Node.js 18+**
- **npm** or **yarn**

### 2. Clone & Install
```bash
git clone https://github.com/leonardoo210399/awards.git
cd awards
npm install
```

### 3. Usage
Start the development server:
```bash
npm run dev
```
Visit `http://localhost:5173` to experience the animations.

### 4. Build for Production
```bash
npm run build
```

---

## 🙌 Acknowledgments
This project draws heavy inspiration from the cutting-edge work seen on **Awwwards** and uses the incredible **GSAP** library to push the boundaries of what's possible in a browser.

---

## 📄 License
Distributed under the **MIT License**.

_Designed & Developed by **Aditya** (aka **aditya-2129**)_

### 🧪 Testing

Run the test suite:
```sh
npm test
```

---

## 🔰 Contributing

We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```  
3. Commit your changes:
   ```sh
   git commit -m 'Added feature name'
   ```  
4. Push to your fork:
   ```sh
   git push origin feature-name
   ```  
5. Submit a pull request.


---

## 🙌 Acknowledgments

Special thanks to open-source contributors and inspiration from Zentry, Awwwards, and TailwindCSS enthusiasts.
