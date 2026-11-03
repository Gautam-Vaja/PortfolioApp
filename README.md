# 🚀 Gautam Vaja — Developer Portfolio

<div align="center">



[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Flutter](https://img.shields.io/badge/Flutter-Dev-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev/)

**Building responsive, high-performance mobile and cross-platform experiences from concept to deployment.**

[Live Repository](https://github.com/Gautam-Vaja/PortfolioApp) • [LinkedIn](https://linkedin.com/in/gautam-vaja) • [GitHub](https://github.com/Gautam-Vaja) • [Contact Gautam](mailto:gautamvaja403@gmail.com)

</div>

---

## 📌 Overview

This repository hosts the official personal developer portfolio for **Gautam Vaja**, a **Flutter Developer & Software Engineer** based in Ahmedabad, Gujarat. 

Built with modern web technologies (**React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**), this interactive portfolio showcases Gautam's cross-platform engineering capabilities, production internship achievements, independent projects, skill proficiencies, and educational milestones.

---

## ✨ Key Highlights & Features

- **⚡ Modern Dark Glassmorphic UI:** Immersive, high-contrast dark aesthetic with smooth gradients, floating 3D graphics, and responsive mobile-first layouts.
- **📱 Interactive Project Showcases:** Rich previews with technical deep-dives, architecture breakdowns, feature lists, and direct links to GitHub repositories for 6 featured apps.
- **📄 Resume Modal & Preview:** In-browser resume viewer with quick download options and detailed breakdown of professional qualifications.
- **💼 Work Experience Timeline:** Comprehensive log of internship experience at **Derived Web Technologies Pvt. Ltd.**, including live client deliverables on the **PilonMagic** GPS tracking application.
- **🎓 Academic Journey:** Detailed records of MCA studies at Gujarat Technological University (GTU) and BCA graduation with an **8.33 CGPA** from Bhakta Kavi Narsinh Mehta University (BKNMU).
- **📬 Interactive Contact Module:** Built-in messaging drawer and modal with local form caching, direct mail links, and quick-copy contact details.

---

## 🛠️ Featured Projects

| Project | Stack | Description | Source |
| :--- | :--- | :--- | :--- |
| **PilonMagic (GPS Tracking App)** | `Flutter`, `Dart`, `GetX`, `REST APIs`, `i18n` | Live GPS asset tracking application featuring QR/VIN lookup, GetX state management, REST API integration, ownership PDF exports, and bilingual localization (EN/FR). | [GitHub](https://github.com/Gautam-Vaja/PilonMagic) |
| **Chat App (AI Assistant)** | `Flutter`, `Dart`, `Gemini API`, `SQLite`, `GoRouter` | Intelligent cross-platform AI chat assistant powered by Google Gemini API with low-latency streaming and local SQLite offline persistence. | [GitHub](https://github.com/Gautam-Vaja/Chat_App) |
| **Weather App** | `Flutter`, `Dart`, `OpenWeather API`, `Geolocation` | Real-time meteorological monitor with GPS positioning, interactive coordinates, air quality metrics, and 7-day extended forecasts. | [GitHub](https://github.com/Gautam-Vaja/Weather_App) |
| **Mini Social Media App** | `Flutter`, `Firebase Auth`, `Firestore`, `Cloud Storage` | Social platform featuring authentication, real-time feed updates, high-res image uploads, follower graph, likes, and comment threads. | [GitHub](https://github.com/Gautam-Vaja/Mini_Social_Media_Application) |
| **Expense Tracker App** | `Flutter`, `Dart`, `Local Storage`, `Analytics Charts` | Personal finance tracker with visual category tags, interactive monthly breakdown charts, and multi-parameter filtering. | [GitHub](https://github.com/Gautam-Vaja/Expenses_Tracker_App) |
| **Smart Attendance System** | `Flutter`, `Dart`, `SQLite`, `sqflite` | Offline-first attendance verification tool with local database storage, rapid marking, and exportable attendance audit logs. | [GitHub](https://github.com/Gautam-Vaja/Smart_Attendance_System) |

---

## 🧠 Technical Skillset

- **Mobile Development:** Flutter, Dart, GetX, Material Design, Responsive UI, iOS Simulator & Xcode testing
- **iOS Fundamentals:** Swift syntax, SwiftUI basics, UIKit & Cupertino widgets
- **Programming Languages:** Dart, Java (OOP, Data Structures), Python, C/C++, JavaScript, Swift
- **APIs & Networking:** RESTful APIs, Dio, HTTP, JSON Serialization, Postman
- **Databases & Cloud:** SQLite (`sqflite`), Firebase Firestore, Firebase Authentication, Cloud Storage, MySQL
- **Developer Tools:** Git, GitHub, GitLab, Android Studio, Xcode, VS Code, Flutter DevTools
- **Core CS:** Object-Oriented Programming (OOP), Data Structures & Algorithms, DBMS, Operating Systems

---

## 💻 Tech Stack of this Portfolio

- **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
gautam-vaja-_-developer-portfolio/
├── public/
│   └── assets/                  # 3D assets, project previews, and mockup media
├── src/
│   ├── components/              # Modular UI components
│   │   ├── About.tsx            # About Me section & stats
│   │   ├── Contact.tsx          # Direct contact form & information
│   │   ├── ContactModal.tsx     # Pop-up contact modal
│   │   ├── ExperienceEducation.tsx # Work experience & education timelines
│   │   ├── Footer.tsx           # Footer with social links & copyright
│   │   ├── Hero.tsx             # Interactive landing hero & CTA
│   │   ├── Navbar.tsx           # Navigation bar with responsive mobile menu
│   │   ├── ProjectDetailModal.tsx # Full-screen project details & specs
│   │   ├── ProjectMockupVisual.tsx # Custom device mockups & illustrations
│   │   ├── Projects.tsx         # Projects showcase grid & filters
│   │   ├── ResumeModal.tsx      # In-browser CV/Resume viewer modal
│   │   └── Skills.tsx           # Categorized skill badges & proficiencies
│   ├── data/
│   │   └── portfolio-data.ts    # Centralized single source of truth for portfolio content
│   ├── types/
│   │   └── portfolio.ts         # TypeScript definitions and interfaces
│   ├── utils/                   # Helper functions and unit tests
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Global styles and Tailwind imports
│   └── main.tsx                 # React DOM entry point
├── package.json                 # Dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration
```

---

## 🏃 Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gautam-Vaja/PortfolioApp.git
   cd PortfolioApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to view the portfolio.

### Build for Production

```bash
npm run build
```
This generates the optimized static assets inside the `dist/` directory.

---

## 📬 Contact & Connect

- **Name:** Gautam Vaja
- **Role:** Flutter Developer & Mobile Application Engineer
- **Location:** Ahmedabad, Gujarat, India
- **Email:** [gautamvaja403@gmail.com](mailto:gautamvaja403@gmail.com)
- **Phone:** [+91 8320000411](tel:+918320000411)
- **LinkedIn:** [linkedin.com/in/gautam-vaja](https://linkedin.com/in/gautam-vaja)
- **GitHub:** [github.com/Gautam-Vaja](https://github.com/Gautam-Vaja)

---

<div align="center">
  <sub>Designed & Developed by Gautam Vaja • © 2026 All Rights Reserved</sub>
</div>
