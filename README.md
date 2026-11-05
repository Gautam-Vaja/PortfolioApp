<div align="center">

# 🚀 Gautam Vaja | Developer Portfolio

**Production-grade, highly interactive 3D portfolio showcasing cross-platform Flutter applications, mobile architecture, and modern WebGL creative development.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-app-pearl-rho.vercel.app)
[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📌 Overview

This repository houses the personal developer portfolio of **Gautam Vaja**, a Flutter Developer and Mobile Software Engineer based in Ahmedabad, Gujarat. 

Engineered with **React 19**, **TypeScript**, **Three.js WebGL**, and **Tailwind CSS v4**, the portfolio blends high-performance mobile engineering showcases with cutting-edge creative web interactions—featuring an interactive 3D character avatar, dual-row kinetic tech marquee, pinned editorial reading progress, sticky stacking project decks, and scroll-drifting experience timelines.

- 🌐 **Live Website:** [portfolio-app-pearl-rho.vercel.app](https://portfolio-app-pearl-rho.vercel.app)
- 📂 **GitHub Repository:** [github.com/Gautam-Vaja/PortfolioApp](https://github.com/Gautam-Vaja/PortfolioApp)

---

## ✨ Key Features & Creative Architecture

### 1. 🎭 Interactive 3D Cartoon Avatar (Three.js WebGL)
- **Volumetric Depth Curvature:** The avatar head is sculpted across an anatomical 48×48 subdivided dome mesh. Tilting left, right, up, or down creates authentic 3D perspective depth rather than a flat card plane.
- **Natural Studio Lighting:** Multi-point studio lighting with ACES Filmic Tone Mapping (`THREE.ACESFilmicToneMapping`) and calibrated PBR material roughness (`0.82`) to eliminate harsh white glare and deliver rich, realistic skin and hair tones.
- **Cross-Platform Responsive Tracking:**
  - **Desktop:** Tracks mouse cursor coordinates with smooth dampening.
  - **Mobile:** Dynamically tracks touch and drag gestures.
  - **Gyroscope Tilt:** Uses device orientation (`deviceorientation`) to tilt the 3D head when physically tilting a smartphone.
  - **Autonomic Life:** Gentle harmonic idle breathing and gaze oscillation keep the avatar alive when resting.

### 2. ⚡ Kinetic Dual-Row Marquee Tech Gallery
- Showcases **14 core technologies** (Flutter, Dart, Firebase, SQLite, GetX, REST APIs, Dio, Git, GitHub, GitLab, Postman, Java, Python, Swift).
- Seamless, gapless infinite loop with opposing scroll directions.
- Staggered brick layout with dynamic speed boost responding to user scroll velocity.

### 3. 📖 Pinned 250vh "About Me" Section
- Sticky full-viewport container (`100svh`/`100dvh`) with real-time reading progress.
- Dual-layer stroked Anton typography that reveals filled text dynamically via SVG/CSS `clipPath`.
- Progressive word-by-word reading illumination as the user scrolls.
- Reactive metric pill popups (`3 months internship`, `4 independent apps`, `8.33 BCA CGPA`, `EN + FR localization`).
- Floating 3D geometric parallax objects (`knot`, `cube`, `flower`, `ring`).

### 4. 📱 Sticky Stacking Project Deck
- Stacking card deck design where project cards stick to the top viewport (`top: calc(56px + var(--i) * 26px)`) and stack smoothly as the user scrolls down.
- Each project card contains **3 interactive mobile screen mockups**, tech tags, live repository links, and opens an in-depth modal inspection dialog.

### 5. 💼 Scroll-Drifting Experience & Education Timeline
- Features Gautam's **3-month internship at Derived Web Technologies Pvt. Ltd.** and live production contributions.
- Scroll-driven horizontal drifting cards (`translate3d`) calibrated for both laptop and mobile screens.
- Clean structured educational background (MCA at GTU, BCA with 8.33 CGPA, 12th GSEB, 10th GSEB).

### 6. 📬 Direct Contact & Resume System
- Direct email (`mailto:`) integration and instant local storage message caching.
- Interactive modal viewer for Gautam's **Full Resume / CV** detailing skills, projects, and education.

### 7. 🧈 60 FPS Lenis Smooth Momentum Scroll
- Hardware-accelerated 60fps momentum scrolling using **Lenis v1.3** coupled directly to **GSAP ScrollTrigger**.
- Configured with `syncTouch: true` to guarantee identical scroll physics across desktop mice and mobile touchscreens.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite 8](https://vite.dev/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), Google Fonts (*Anton*, *Manrope*, *JetBrains Mono*) |
| **3D Graphics** | [Three.js](https://threejs.org/) (WebGL, Orthographic Camera, PBR Standard Materials, PMREM Generator) |
| **Animation & Physics** | [Lenis](https://github.com/darkroomengineering/lenis), [GSAP](https://greensock.com/gsap/), [ScrollTrigger](https://greensock.com/scrolltrigger/), [Motion](https://motion.dev/) |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Custom SVGs, High-Resolution 3D Render Assets |
| **Deployment** | [Vercel](https://vercel.com/) with automated GitHub CI/CD integration |

---

## 🚀 Showcased Projects

| Project | Key Technologies | Description & Highlights | Repository |
| :--- | :--- | :--- | :--- |
| **PilonMagic** | Flutter, Dart, GetX, REST APIs, Dio, i18n, GitLab | Real-time GPS asset tracking application built during internship with QR/VIN lookup, ownership PDF reports, and English/French localization. | [View Code ↗](https://github.com/Gautam-Vaja/PilonMagic) |
| **Smart Attendance System** | Flutter, Dart, SQLite (`sqflite`), Offline-First | Offline-first mobile attendance management with local SQLite persistence, biometric validation, and automated CSV reporting. | [View Code ↗](https://github.com/Gautam-Vaja/Smart_Attendance_System) |
| **AI Assistant App** | Flutter, Dart, Google Gemini API, SQLite, GoRouter | Cross-platform AI mobile assistant integrating Google's Gemini generative models with conversation history persistence. | [View Code ↗](https://github.com/Gautam-Vaja) |
| **Smart Expense Tracker** | Flutter, Dart, Local Storage, Custom Charts | Personal financial budget visualizer featuring categorized expenses, interactive breakdown charts, and offline storage. | [View Code ↗](https://github.com/Gautam-Vaja) |

---

## 📂 Project Structure

```text
gautam-vaja-_-developer-portfolio/
├── public/
│   └── assets/
│       ├── avatar_3d_cutout.png     # Transparent, anti-aliased 1024px 3D avatar head
│       ├── avatar_clean.jpg         # High-res unwatermarked 3D character render
│       └── theme/                   # Project visual mockups & icon graphics
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── AvatarFaceModel.ts   # 3D curved facial dome & PBR material rigging
│   │   │   └── ThreeCanvasOverlay.tsx # Fullscreen WebGL canvas, lighting & tracking
│   │   ├── ui/
│   │   │   └── CustomCursor.tsx     # Interactive desktop ring cursor
│   │   ├── AboutPinned.tsx          # 250vh sticky about section with reading progress
│   │   ├── ContactSheet.tsx         # Contact links, address & message form
│   │   ├── ExperienceSheet.tsx      # Drifting experience & education timeline
│   │   ├── FooterSheet.tsx          # Bauhaus SVG art banner, colossal title & links
│   │   ├── ProjectDetailModal.tsx   # Detailed modal with full architecture notes
│   │   ├── ProjectsStacked.tsx      # Stacking project cards with 3-phone mockups
│   │   ├── RefHero.tsx              # Colossal typography headline & 3D anchor
│   │   ├── RefNavbar.tsx            # Fluid navigation bar with CV modal trigger
│   │   ├── ResumeModal.tsx          # Interactive CV / Resume viewer modal
│   │   ├── SkillsSheet.tsx          # Editorial categorized skills matrix
│   │   └── TechMarquee.tsx          # Dual-row kinetic infinite tech marquee
│   ├── data/
│   │   └── portfolio-data.ts        # Structured resume, project & career data
│   ├── hooks/
│   │   └── useSmoothScroll.ts       # Lenis + GSAP ScrollTrigger unified hook
│   ├── types/
│   │   └── portfolio.ts             # TypeScript interfaces for data models
│   ├── App.tsx                      # Root application assembly & layout
│   ├── index.css                    # Tailwind CSS v4 directives & custom styling
│   └── main.tsx                     # React 19 client entrypoint
├── index.html                       # HTML template with Anton/Manrope fonts & viewport
├── package.json                     # Dependencies, scripts & build configuration
└── vite.config.ts                   # Vite bundler configuration
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- `npm` or `pnpm`

### 1. Clone the Repository
```bash
git clone https://github.com/Gautam-Vaja/PortfolioApp.git
cd PortfolioApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot-module replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory.

### 5. Type-Check & Lint
```bash
npm run lint
```
Runs `tsc --noEmit` to ensure type safety across all components.

---

## 👨‍💻 About Gautam Vaja

- 🎓 **Education:** Master of Computer Applications (MCA) – GTU *(Pursuing)*
- 🎓 **Undergraduate:** Bachelor of Computer Applications (BCA) – BKNMU *(8.33 / 10 CGPA)*
- 💼 **Professional Experience:** Flutter Developer Intern at **Derived Web Technologies Pvt. Ltd.**
- 📍 **Location:** Ahmedabad, Gujarat, India
- ✉️ **Email:** [gautamvaja403@gmail.com](mailto:gautamvaja403@gmail.com)
- 📞 **Phone:** [+91 8320000411](tel:+918320000411)
- 💼 **LinkedIn:** [linkedin.com/in/gautam-vaja](https://linkedin.com/in/gautam-vaja)
- 🐙 **GitHub:** [github.com/Gautam-Vaja](https://github.com/Gautam-Vaja)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
