<div align="center">

<br/>

<img src="https://img.shields.io/badge/State%20University-Excellence%20in%20Education-2563eb?style=for-the-badge&logo=graduation-cap&logoColor=white" alt="State University Badge"/>

<h1>🎓 University App Dashboard</h1>

<p>A comprehensive, modern university web application featuring an analytics dashboard, academic programs explorer, admissions portal, campus life guide, notifications centre, and full student account management — built with React, TypeScript, and Vite.</p>

<br/>

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-Latest-1C1C1C?style=flat-square&logo=radix-ui)](https://www.radix-ui.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2.15-FF6B6B?style=flat-square)](https://recharts.org/)
[![React Router](https://img.shields.io/badge/React%20Router-7.x-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com/)

<br/>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Pages & Features](#-pages--features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Routes](#-available-routes)
- [Key Components](#-key-components)
- [UI Component Library](#-ui-component-library)
- [Dark Mode](#-dark-mode)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **University App Dashboard** is a full-featured university web portal built using modern React tooling. It simulates a real institutional web experience, covering everything a student or prospective applicant would need — from real-time analytics and course tables to admissions deadlines, campus life, and personal account management.

### Highlights

| Metric | Value |
|---|---|
| 🎓 Degree Programs | 50+ across 6 colleges |
| 👩‍🏫 Faculty Members | 856 |
| 🧑‍🎓 Enrolled Students | 12,400+ |
| 💼 Graduate Employment Rate | 95% |
| 🔬 Annual Research Funding | $120M |
| 🏠 Residence Halls | 3 |
| 🏟️ Varsity Sports | 18 |
| 🤝 Student Clubs | 60+ |

---

## 📄 Pages & Features

### 🏠 Home — Analytics Dashboard

The landing page serves as the primary institutional dashboard with:

- **Hero Section** — Full-width banner with university branding, CTA buttons, floating application status card, and inline key statistics (50+ Programs · 856 Faculty · 95% Job Placement)
- **Quick Links** — Fast-access navigation tiles for the key portal sections
- **Stats Cards** — Live KPI overview cards:
  - Total Students: **12,458** (+12% YoY)
  - Active Courses: **342** (18 new this semester)
  - Faculty Members: **856** (+5% YoY)
  - Average Attendance: **87.3%** (+2.1% this month)
- **Enrollment Chart** — Recharts area/bar chart showing semester enrollment trends
- **Department Breakdown** — Pie/donut chart of student distribution across departments
- **Grade Distribution** — Visual bar chart of grade spread across all courses
- **Course Table** — Tabular view of active courses with sortable columns
- **Recent Activities** — Feed of the latest institutional events and student activity
- **Contact Section** — Full contact details: phone, email, address, social links, and an embedded inquiry form

---

### 🎓 Academics

An in-depth exploration of academic offerings, filterable and fully responsive:

- **Study Pathways** — Three programme type cards: Undergraduate (30+), Graduate (15+), Online (8+)
- **Filterable Programs Browser** — 9 featured degree programmes across Computer Science, Biology, MBA, Fine Arts, Data Science, Political Science, Information Systems, Public Health, and Online MBA; filter by All / Undergraduate / Graduate / Online
- **Research & Innovation** section with stats: $120M funding · 240+ active projects · 18 research institutes · 1,400+ publications in 2024
- **Academic Departments** — 6 college cards (Engineering & Tech, Natural Sciences, Business, Arts & Humanities, Social Sciences, Health Sciences) with programme counts and faculty numbers
- **Faculty Spotlight** — Profiles of 4 distinguished faculty with department, title, research specialisation, and rating
- **Academic Calendar** — Spring 2025 key dates (term start, deadlines, recess, exams, commencement) with colour-coded event type badges
- **University Library** — Library overview with stats: 2.4M physical volumes · 180K digital resources · 24/7 online access

---

### 📬 Admissions

A streamlined admissions journey experience:

- **4-Step Application Process** — Create account → Submit application → Send documents → Receive decision, with a visual connector line on desktop
- **Admission Requirements** — Checked list: GPA, SAT/ACT, recommendation letters, personal statement, and application fee ($50); test-optional notice for 2025–2026
- **Application Deadlines table** — Early Decision I/II, Regular Decision, Transfer, International, and Graduate with live status badges (Open / Closed / Rolling)
- **Financial Aid & Scholarships** — Four aid type cards: Merit Scholarships (up to $20K/yr), Need-Based Grants (up to $15K/yr), Work-Study ($3K–$6K/yr), Student Loans (up to $12.5K/yr); 70% of students receive aid
- **Net Price Calculator** CTA panel
- **Campus Visit Info** — Tour schedule (Mon–Fri 10 AM & 2 PM), starting location, contact number, and virtual tour option
- **Accordion FAQ** — 5 questions covering test scores, multiple programme applications, review timelines, campus visits, and acceptance rate (62%)

---

### 🌱 Campus Life

Comprehensive campus experience guide with tabbed content:

- **Stats bar** — 60+ clubs · 18 varsity sports · 3 residences · 15 dining locations
- **Tabbed Living Guide** with 4 tabs:
  - **Housing** — Founders Hall, Lakeside Suites, The Residence (with pricing, features, and badges); included amenities: Hi-Speed Wi-Fi, 24/7 Security, Climate Control, Eco-Friendly Buildings
  - **Dining** — Basic / Standard / Premium meal plan cards; 4 dining locations with hours and cuisine types
  - **Athletics** — 6 varsity sports with NCAA division and facility details; Intramural leagues CTA
  - **Health & Wellness** — Health Centre, Counselling Services, Recreation & Fitness, Mindfulness Centre cards with 24/7 crisis support CTA
- **Student Clubs & Organizations** — 8 featured clubs (Robotics, Fine Arts, International Students, Jazz Ensemble, Debate, Sustainability, Community Service, Esports) with member counts
- **Upcoming Events** — 6 upcoming campus events with category badges (Culture, Sports, Food, Wellness, Social, Environment) and venue details
- **Photo Gallery** — 4-image grid featuring campus outdoor, student activities, athletics, and housing imagery

---

### 🔔 Notifications

A fully interactive notification management centre:

- **Unread count badge** in navigation header with real-time tracking
- **Category Tabs** — All / Academic / Financial / Events / System — each showing per-category unread counts
- **Notification Cards** — Each card includes icon, title, description, timestamp, read/unread state, priority badge (Urgent), and individual actions
- **Per-notification Actions** — Mark as read, Dismiss (delete), and View details
- **Mark All as Read** — Bulk action button visible when unread notifications exist
- **Empty state** — Illustrated empty state when a filtered category has no notifications
- **Notification Settings hint** — Footer banner linking to Account > Notifications preferences

---

### 👤 Account

Full student account management with 4 tabs:

- **Profile Tab** — Editable personal information form (name, email, phone, date of birth, address) with inline save/cancel flow and success toast; read-only academic info block (Student ID, Programme, Year)
- **Security Tab**
  - Password change form with show/hide toggle for current and new password fields
  - Two-Factor Authentication card (enable 2FA)
  - Active Sessions list with device, location, timestamp, and per-session revoke buttons
- **Notifications Tab** — 7 granular toggle switches (Grade Updates, Enrollment Alerts, Payment Reminders, Campus Events, University News, Career Services, System Alerts) plus delivery method selector (In-App, Email, SMS)
- **Privacy Tab** — 4 privacy toggles (Public Profile, Display GPA, Usage Analytics, Marketing Communications) plus Data Export and Account Closure actions

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) with `@vitejs/plugin-react-swc` |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) (20+ primitives) |
| **Charts** | [Recharts 2](https://recharts.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Vanilla CSS (`index.css`) + utility classes |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Components** | `class-variance-authority`, `tailwind-merge`, `clsx` |
| **Carousel** | [Embla Carousel](https://www.embla-carousel.com/) |
| **Other** | `react-day-picker`, `vaul` (drawer), `cmdk` (command palette), `input-otp`, `react-resizable-panels` |

---

## 📁 Project Structure

```
.
├── index.html                       # App entry point
├── vite.config.ts                   # Vite + Tailwind + path aliases
├── tsconfig.json / tsconfig.node.json
├── package.json
├── docs/                            # Guidelines, attributions
└── src/
    ├── main.tsx                     # React DOM render
    ├── App.tsx                      # Root RouterProvider
    ├── index.css                    # Tailwind entry + design tokens
    ├── styles/                      # Additional style modules
    ├── app/
    │   ├── Root.tsx                 # Layout shell (Navigation + Outlet + Footer)
    │   └── routes.ts                # React Router route definitions
    ├── pages/                       # One file per route
    │   ├── HomePage.tsx             # Dashboard home
    │   ├── AcademicsPage.tsx        # Programs, faculty, calendar, library
    │   ├── AdmissionsPage.tsx       # Steps, requirements, aid, FAQ
    │   ├── CampusLifePage.tsx       # Housing, dining, sports, wellness, clubs
    │   ├── NotificationsPage.tsx    # Notifications centre
    │   └── AccountPage.tsx          # Student account management
    ├── features/
    │   └── dashboard/               # Analytics widgets used on HomePage
    │       ├── StatsCards.tsx       # KPI cards
    │       ├── EnrollmentChart.tsx  # Recharts enrollment chart
    │       ├── DepartmentBreakdown.tsx
    │       ├── GradeDistribution.tsx
    │       ├── CourseTable.tsx      # Course data table
    │       └── RecentActivities.tsx # Activity feed
    └── components/
        ├── layout/                  # Site chrome
        │   ├── Navigation.tsx       # Sticky top navbar
        │   ├── Footer.tsx           # Site-wide footer
        │   └── Hero.tsx             # Landing hero
        ├── common/                  # Cross-page building blocks
        │   ├── QuickLinks.tsx
        │   ├── ContactSection.tsx
        │   ├── SearchOverlay.tsx    # Full-screen search modal
        │   └── ImageWithFallback.tsx
        └── ui/                      # 48 shadcn/ui primitives (Radix-based)
            ├── button.tsx
            ├── card.tsx
            ├── dialog.tsx
            └── ...                  # 45 more — do not hand-edit
```

### Where to put new code

- **A new URL** → add a page in `src/pages/` and register it in `src/app/routes.ts`.
- **A widget on one page** → put it next to that page or in `src/features/<feature>/`.
- **A widget reused across pages** → `src/components/common/`.
- **Site chrome** (nav, footer, hero) → `src/components/layout/`.
- **A shadcn primitive** → generate it into `src/components/ui/`; do not hand-edit.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/University_App_Dashboard.git

# 2. Navigate to the project directory
cd University_App_Dashboard

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

### Development Server

```bash
npm run dev
```

The app will start at **[http://localhost:5173](http://localhost:5173)**. The dev server supports Hot Module Replacement (HMR) for instant feedback during development.

### Production Build

```bash
npm run build
```

The build output is placed in the `dist/` directory, ready for static hosting.

---

## 🗺 Available Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Dashboard with analytics, stats, and charts |
| `/academics` | `AcademicsPage` | Programs, departments, faculty, calendar |
| `/admissions` | `AdmissionsPage` | Application steps, requirements, deadlines, aid |
| `/campus` | `CampusLifePage` | Housing, dining, athletics, wellness, clubs |
| `/notifications` | `NotificationsPage` | Notification centre |
| `/account` | `AccountPage` | Profile, security, notification preferences, privacy |

> All routes are nested under the `Root` layout which renders the sticky `Navigation` and `Footer`.

---

## 🧩 Key Components

### `Navigation`
Sticky top navigation bar with:
- University logo and branding
- Desktop nav links with active-route highlighting
- Search icon → opens `SearchOverlay`
- Notifications bell with **unread count badge** (navigates to `/notifications`)
- Account icon (navigates to `/account`)
- "Student Portal" CTA button
- Responsive hamburger menu with full mobile drawer

### `SearchOverlay`
Full-screen modal search experience triggered from the navigation bar.

### `EnrollmentChart` / `DepartmentBreakdown` / `GradeDistribution`
Recharts-powered interactive visualisations rendered on the home dashboard.

### `ImageWithFallback`
Graceful image loading wrapper that falls back to a styled placeholder if the source fails to load — used across all hero sections and photo galleries.

---

## 🎨 UI Component Library

The `src/components/ui/` directory contains **48 fully accessible, Radix UI-based components** covering:

| Category | Components |
|---|---|
| **Layout** | `card`, `separator`, `resizable`, `scroll-area`, `aspect-ratio` |
| **Navigation** | `navigation-menu`, `menubar`, `breadcrumb`, `tabs`, `pagination` |
| **Forms** | `button`, `input`, `label`, `checkbox`, `radio-group`, `select`, `slider`, `switch`, `toggle`, `toggle-group`, `textarea`, `form`, `input-otp` |
| **Overlay** | `dialog`, `alert-dialog`, `sheet`, `drawer`, `popover`, `tooltip`, `hover-card`, `context-menu`, `dropdown-menu` |
| **Feedback** | `badge`, `progress`, `sonner`, `skeleton`, `alert` |
| **Data Display** | `table`, `accordion`, `collapsible`, `avatar`, `calendar`, `chart` |
| **Utility** | `command`, `carousel`, `sidebar` |

All components are built with `class-variance-authority` for consistent variant management.

---

## 🌙 Dark Mode

Dark mode is supported via **[next-themes](https://github.com/pacocoursey/next-themes)** integrated at the React context level. A theme toggle in the navigation allows seamless switching between light and dark themes, with all cards, backgrounds, charts, tables, navigation, and footers fully adapted.

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages and ensure the dev server runs without errors before submitting.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using **React** + **TypeScript** + **Vite**

⭐ **Star this repo** if you found it useful!

</div>
