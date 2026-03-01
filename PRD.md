# Product Requirements Document (PRD)

## 📌 Project: VibeIntake (Vibeathon 2026 Submission)
**Theme:** "The Paper-to-Digital Action Engine"
**Target Audience:** Enterprise HR/Compliance, Non-Profit Event Coordinators, Personal Schedule Management.

---

## 1. Executive Summary
VibeIntake is an AI-powered SaaS prototype that solves the problem of legacy paper processes. By leveraging Vision AI, VibeIntake morphs physical forms—whether they are dense, PII-heavy enterprise PDFs or messy handwritten schedules—into secure, dynamic web components. 

## 2. Problem Statement
Every day, thousands of hours are lost deciphering handwritten notes or re-typing paper forms into databases. Existing form-builders (like Typeform or Google Forms) require manual assembly. Furthermore, standard OCR tools merely read text without understanding *context*, meaning Sensitive PII is often mishandled.

## 3. Goals & Objectives
1. **Automated Digestion:** Users can upload a photo of a document and get a fully interactive UI.
2. **Security by Default:** The system must proactively identify and mask Personally Identifiable Information (PII) like Social Security Numbers.
3. **Frictionless Onboarding:** A user must be able to deploy their new interactive form to a live, custom URL instantly.
4. **Human-in-the-Loop:** For low-confidence OCR reads, flag the document into a "Human Review Queue."

## 4. Features MVP (Minimally Viable Prototype)

### 4.1 AI Form Architect
- **Trigger:** Drag-and-drop file upload.
- **Action:** Mock processing simulates parsing document components (fields, checkboxes, signatures).
- **Result:** Renders a fully functioning React web-form. 

### 4.2 The Safety Shield (PII Logic)
- **Identification:** Mock AI identifies fields containing sensitive data.
- **UI Encorcement:** Fields containing SSNs/DOBs are masked on the dashboard (`***-**-1234`).
- **Audit Logging:** An interactive element tracks any "Reveal" actions taken by an administrator.

### 4.3 Subdomain Deployment Engine
- **Trigger:** On form creation finish, the user enters a slug (e.g., `company`).
- **Action:** System simulates provisioning a Next.js tenant environment.
- **Result:** Yields `https://company.vibeintake.com/` for immediate public sharing.

### 4.4 Data Exhaust & Action (The Grandma Scenario)
- **Feature:** Parses raw handwritten schedules and identifies logical temporal events.
- **Output:** Dynamically generates a valid `.ics` file so the user can download it directly to their mobile calendar application.

## 5. Technology Stack
- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS (Premium Dark Mode, Glassmorphism)
- **Icons:** Lucide-React
- **State/Animations:** React `useState`, Framer Motion for morphing UI transitions
- **Simulated Auth:** Localstorage-backed session logic with Resend API architectural hooks.

## 6. Strict Competition Constraints Followed
- **No Real PII:** Built entirely with static mock objects and randomized ID generation.
- **High-End UI/UX Design:** Imbedded complex Radix-like card structures instead of standard HTML forms to maximize "WOW" factor.
- **Deployable within 48-hours:** Kept the database structure logic simulated to ensure local demo flawless execution.
