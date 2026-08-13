# 🧠 Abhinav Technical Institute - Project Memory

## 📋 Overview
- **Project Name:** Abhinav Technical Institute Website Redesign
- **Location:** `C:\Users\sanke\abhinav institute`
- **Project Type:** Modern React + Vite Single-Page Application (SPA)
- **Business Description:** Abhinav Technical Institute of Industrial Training and Skill Development, Navi Peth, Jalgaon, Maharashtra.
- **Client Contact:** Punjo Patil
- **Key Offerings:** Government-approved vocational training, electrician trade certification, online computer courses.

---

## 🛠️ Tech Stack & Structure
- **Frontend:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v3 + Google Fonts (`Domine`, `Hind Madurai`)
- **Icons:** Lucide React
- **Architecture:** Clean, modular structure using React components:
  - [`Navbar.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/Navbar.tsx): Sticky responsive header with hamburger menu, CTA, and phone triggers.
  - [`Hero.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/Hero.tsx): Clean intro with visual badges, subheaders, and conversion triggers.
  - [`About.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/About.tsx): Key details of the institute, trust statistics, and leadership message.
  - [`Services.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/Services.tsx): Grid display of the 10 services using legacy images and hover effects.
  - [`WhyUs.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/WhyUs.tsx): Highlights of teaching staff, affordability, and industry alignment.
  - [`Gallery.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/Gallery.tsx): Interactive portfolio of 27 actual workshop images with a responsive lightbox.
  - [`Contact.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/Contact.tsx): Form + Map + Coordinates. Saves lead submissions to `localStorage`.
  - [`AdminDashboard.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/AdminDashboard.tsx): Client admin portal with Leads CRM, Syllabus Upload, Certificate Authority, and Notice Board. Password: `9423488174` or `admin`.
  - [`SuperAdminDashboard.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/SuperAdminDashboard.tsx): **Secret Super Admin Console** (No visible UI button). Accessible via direct URL: `/#super-admin` or `/#superadmin`. Master Key: `superadmin` / `9423488174` / `9822725265`. Includes full analytics, certificate authority, curriculum manager, student leads CRM, full system JSON backup & restore, and emergency broadcasts.
  - [`SyllabusAdmin.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/SyllabusAdmin.tsx): Admin interface to upload syllabus PDFs, manage course modules, and edit duration/eligibility.
  - [`SyllabusModal.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/SyllabusModal.tsx): Interactive student-facing modal to view modules and download official course syllabus files.
  - [`VerifyCertificate.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/VerifyCertificate.tsx): Public certificate verification portal accessible via `#verify` or `#verify?id=...` with instant QR code rendering and validation badge.
  - [`CertificateManager.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/CertificateManager.tsx): Full Certificate issuance, QR code generator, print layout, and validation toggles.
  - [`Footer.tsx`](file:///C:/Users/sanke/abhinav%20institute/src/components/Footer.tsx): Quick navigation links, contact summary, and copyright.

---

## ⚙️ Automation & Commands
- **Runner Script:** [`start_dev_servers.bat`](file:///C:/Users/sanke/abhinav%20institute/start_dev_servers.bat) (automates dependency installation, launches the local dev server, and opens the browser).
- **Run Locally:** `npm run dev`
- **Production Build:** `npm run build` (outputs compilation bundle to `/dist`)
- **Deploy Command:** `npx wrangler pages deploy dist --project-name=abhinav-institute --commit-dirty=true`
- **Live URLs:**
  - Production Website: https://abhinav-institute.pages.dev
  - Secret Super Admin: https://abhinav-institute.pages.dev/#super-admin
  - Certificate Verification: https://abhinav-institute.pages.dev/#verify

---

## 🚀 Recent Changes & Next Steps
- [x] Initialized Git repository.
- [x] Created backup of legacy Jdomni file as `index_legacy.html`.
- [x] Scaffolded Vite React TypeScript project.
- [x] Installed and configured Tailwind CSS v3, PostCSS, Autoprefixer, and Lucide React.
- [x] Implemented modular website sections (Hero, About, Services, Why Us, Gallery, Contact, Admin Panel).
- [x] Built Syllabus Upload & Management module for Admin (`SyllabusAdmin.tsx` & `SyllabusModal.tsx`).
- [x] Built Certificate Verification Portal (`VerifyCertificate.tsx`) and Certificate Authority (`CertificateManager.tsx`).
- [x] Built Secret Super Admin Portal (`SuperAdminDashboard.tsx`) with zero visible UI buttons, accessible directly via `/#super-admin`.
- [x] Created `start_dev_servers.bat` script.
- [x] Verified successful build compilation & deployed live to Cloudflare Pages.
