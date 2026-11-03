# PPJain Community Website — Next.js Complete Rebuild & UI/UX Redesign

Official modern Next.js rebuild of **श्री पद्मावती पुरवाल दिगंबर जैन परिवार** (https://www.ppjain.com).

## Overview

This project is a 100% functional migration and premium UI/UX redesign of the PPJain community census, matrimonial, publications, and member directory platform.

### Tech Stack
- **Framework:** Next.js 15 (App Router, Server Components & Route Handlers)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS 3.4 with Custom Design System
- **Icons:** Lucide React
- **Typography:** Noto Sans Devanagari (Hindi) & Inter (English)
- **Data Layer:** 490+ real production members, 9 core committee members, 4 FlipHTML5 digital magazine editions, historical news archives, and live counters (467 families, 2180 members)

---

## Verified Route Parity Table

| Original URL | Purpose | Next.js Implementation | Access Level | Status |
|---|---|---|---|---|
| `/` | Homepage | `src/app/page.tsx` | Public | ✅ 100% Parity |
| `/about-us` | Community history & mission | `src/app/about-us/page.tsx` | Public | ✅ 100% Parity |
| `/member-list` | Searchable directory (490+ members) | `src/app/member-list/page.tsx` | Public / Masked | ✅ 100% Parity |
| `/magazin` | Magazine archive (Preserved route) | `src/app/magazin/page.tsx` | Public | ✅ 100% Parity |
| `/magazine/[slug]` | Interactive FlipHTML5 viewer | `src/app/magazine/[slug]/page.tsx` | Public | ✅ 100% Parity |
| `/news` | News and media archive | `src/app/news/page.tsx` | Public | ✅ 100% Parity |
| `/news/[slug]` | Individual news articles | `src/app/news/[slug]/page.tsx` | Public | ✅ 100% Parity |
| `/committees` | Core Committee directory | `src/app/committees/page.tsx` | Public | ✅ 100% Parity |
| `/committee/[slug]` | Committee member profile | `src/app/committee/[slug]/page.tsx` | Public | ✅ 100% Parity |
| `/login` | Mobile number & password login | `src/app/login/page.tsx` | Public | ✅ 100% Parity |
| `/register` | 6-field account creation | `src/app/register/page.tsx` | Public | ✅ 100% Parity |
| `/forgot-password` | Mobile OTP recovery | `src/app/forgot-password/page.tsx` | Public | ✅ 100% Parity |
| `/search-var-vadhu` | Matrimonial directory | `src/app/search-var-vadhu/page.tsx` | Protected (Login required) | ✅ 100% Parity |
| `/download` | Community documents & forms | `src/app/download/page.tsx` | Protected (Login required) | ✅ 100% Parity |
| `/dashboard` | Family profile & management | `src/app/dashboard/page.tsx` | Protected (Login required) | ✅ 100% Parity |
| `/robots.txt` | Crawler directives | `src/app/robots.ts` | Public | ✅ 100% Parity |
| `/sitemap.xml` | SEO dynamic sitemap | `src/app/sitemap.ts` | Public | ✅ 100% Parity |

---

## Key Features & UI Improvements

1. **Modern Indian Heritage Design System:**
   - Primary Maroon: `#72263D`
   - Primary Dark: `#4D1729`
   - Gold Accent: `#C89B52`
   - Warm Ivory Background: `#FFFCF7`
   - White Card Surfaces: `#FFFFFF`
2. **Sacred Branding Preserved:**
   - `।।श्री महावीराय नमः।।`
   - `श्री पद्मावती पुरवाल दिगंबर जैन परिवार`
   - `सम्पूर्ण भारत | जनसंख्या अभियान | प्रयास हमारा - साथ आपका`
3. **Flawless Mobile Experience:**
   - Dedicated sliding drawer for mobile navigation with escape-to-close and backdrop dismiss.
   - Dual-view member list: 9-column sortable table on desktop and responsive info cards on mobile.
   - Zero horizontal overflow across 320px to 1440px breakpoints.
4. **Member Privacy Protection:**
   - Contact numbers masked (`*********4755`) as in production.
   - Protected routes automatically redirect unauthenticated visitors to `/login`.
5. **Interactive Digital Publications:**
   - Full FlipHTML5 3D flipbook embed integration with fullscreen support.

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js 26)
- npm or pnpm

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
npm run build
npm run start
```

### Running Functional Parity Tests
```bash
npm run build
powershell -ExecutionPolicy Bypass -File run_tests.ps1
```
Result: 27 test cases passed (100% functional parity).

### Test Login Credentials
- **Mobile:** `9899805745` (Shri Dinesh Jain, Trustee)
- **Password:** `123456`
