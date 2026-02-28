<div align="center">
  
# Vibeathon 2026 Solution 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**An elite, AI-powered application built in 48 hours for the Codefi St. Joseph Vibeathon.**

[Live Demo] • [Report Bug] • [Request Feature]

</div>

---

## 📖 Overview

This repository contains the source code for our submission to the **2026 Codefi St. Joseph Vibeathon**. 

Built entirely over a 48-hour weekend, this project leverages cutting-edge web technologies, advanced UX patterns, and AI-driven workflows to solve real-world industry problems with production-ready reliability.

### 🌟 Key Features
- **Instant Data Visualization:** Powered by `recharts`.
- **Bulletproof Forms:** Managed efficiently with `react-hook-form` and `Zod` validation.
- **Accessible UI:** A fully compliant Radix UI component library (`Tooltip`, `Accordion`, `Dialog`, etc.) designed for screen-readers.
- **Offline Resilience:** Custom network tracking hooks alert users immediately upon connection drops.
- **Premium DX:** Full generic `Skeleton` loading states, generic `Empty States`, and glassmorphic toast notifications.

---

## 🏗️ Architecture & Tech Stack

This project was built on a highly fortified Next.js boilerplate, designed to accommodate any complex problem statement issued by the Vibeathon judges.

**Frontend Layer**
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS + Custom Container Queries
* **State Management:** SWR (Stale-While-Revalidate)
* **Components:** Custom Radix Primitives

**Integration Layer**
* **Data Flow:** Next.js Server Actions
* **AI Orchestration:** OpenRouter API (`lib/ai.ts` generic wrapper)

---

## 🚀 Quick Start

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/theweese/vibeathon-2026.git
cd vibeathon-2026/app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Duplicate `.env.example` to `.env.local` and add your specific API keys (OpenRouter, Supabase, etc).
```bash
cp .env.example .env.local
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 🤝 Contributing & Maintenance

This project was developed strictly for a 48-hour hackathon. While the architecture is production-ready, active feature development has concluded. If you discover a bug while testing the demo, please open an issue using the provided templates in the `.github` folder.

<div align="center">
  <i>Built with ❤️ in St. Joseph, Missouri</i>
</div>
