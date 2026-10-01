# ByteSpace — Frontend UI

<div align="center">

![ByteSpace](https://img.shields.io/badge/ByteSpace-Online%20Learning%20Platform-003BE2?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)

**A pixel-perfect, fully responsive frontend implementation of the ByteSpace online learning platform.**

</div>

---

## 📌 Overview

ByteSpace is a modern online course platform UI built as a frontend technical assignment. The project delivers a faithful, high-fidelity translation of a Figma design into a production-ready Next.js application — with full responsiveness across desktop, tablet, and mobile devices.

---

## ✨ Features

### Pages
| Page | Route | Description |
|---|---|---|
| Home | `/` | Full landing page with all sections |
| Sign In | `/login` | Authentication page with visual card layout |
| Sign Up | `/signup` | Registration page with visual card layout |
| 404 | `/*` | Custom not-found page |

### Sections (Landing Page)
- **Navbar** — Responsive navigation with mobile hamburger drawer & close button
- **Hero** — Full-width hero with animated search bar and floating 3D geometric accents
- **Logo Partner** — Trusted partner logos strip
- **Discover** — Course category filter tabs + course card grid
- **Explore** — 6-category explore section with icon cards
- **Professional Growth** — Stats & features section with image cards
- **CTA** — Call-to-action banner with floating decorative icons
- **Testimonials** — Community reviews section
- **Footer** — Newsletter signup + navigation links

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 (App Router) | React framework & routing |
| [React](https://reactjs.org/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [next/image](https://nextjs.org/docs/app/api-reference/components/image) | Built-in | Optimized image delivery |
| [next/font](https://nextjs.org/docs/app/api-reference/components/font) | Built-in | Custom font loading |

### Custom Fonts
- **Poppins** — Headings & display text
- **Satoshi** — Body copy & UI elements
- **Clash Display** — Brand/logo wordmark

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm `v9+`

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/ShahedCE/ByteSpace.git
cd ByteSpace/frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
frontend/
├── public/
│   ├── icons/          # SVG icons, geometric accents, CTA assets
│   ├── images/         # Course card images, avatars, auth page images
│   └── ...
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   ├── globals.css         # Global styles
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── login/
│   │   │   └── page.tsx        # Sign In page
│   │   └── signup/
│   │       └── page.tsx        # Sign Up page
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx      # Navigation bar
│       │   └── Footer.tsx      # Site footer
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── LogoPartner.tsx
│       │   ├── Discover.tsx
│       │   ├── Explore.tsx
│       │   ├── ProfessionalGrowth.tsx
│       │   ├── CTA.tsx
│       │   └── Testimonial.tsx
│       └── ui/
│           ├── CourseCard.tsx      # Reusable course card
│           ├── TestimonialCard.tsx # Review card
│           ├── InputField.tsx      # Form input component
│           ├── PrimaryButton.tsx   # CTA button
│           └── SocialButton.tsx    # OAuth icon button
└── ...
```

---

## 📱 Responsive Design

The UI is fully responsive across all device categories:

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 640px` | Single-column, stacked layout |
| Tablet | `640px – 1023px` | Adaptive multi-column grid |
| Desktop | `≥ 1024px` | Full Figma design, pixel-perfect |

**Key responsive decisions:**
- Login/Signup pages preserve the exact desktop Figma layout (`1440×1024` canvas) while gracefully collapsing to a stacked card+form layout on mobile
- The hamburger menu on mobile opens a full-screen overlay drawer with a close (×) button
- Course cards, explore categories, and testimonials all adapt via CSS Grid
- Browser zoom levels from **50% to 150%** are handled without horizontal overflow

---

## 🎨 Design Highlights

- **Blueprint grid** background on hero and auth pages (CSS `linear-gradient` pattern)
- **Floating 3D geometric accents** (cones, tori, pyramids, cylinders) in the hero and CTA
- **Overlapping card layout** on auth pages with floating icon decorators (Green Ring, White Scribble, Happy Students widget)
- **Glassmorphism-style** search bar and input focus states
- **Custom tab filter** system in the Discover section

---

## 📊 Build Output

```
Route (app)                        Size     First Load JS
┌ ○ /                           1.88 kB       113 kB
├ ○ /_not-found                   123 B       103 kB
├ ○ /login                        176 B       111 kB
└ ○ /signup                       176 B       111 kB

○  (Static) prerendered as static content
```

All routes are statically generated for optimal performance.

---

## 🔗 Repository

**GitHub:** [https://github.com/ShahedCE/ByteSpace](https://github.com/ShahedCE/ByteSpace)  
**Branch:** `fix/final-ui-fixes`

---

## 📄 License

This project was built as a technical assignment. All design assets are based on the provided Figma file.
