# Garibook Homepage - Frontend Technical Assessment

A responsive, production-quality recreation of the **[Garibook](https://garibook.com/)** homepage built as part of the **ENDOW TECH Frontend Intern Technical Assessment**.

---

## 🌟 Key Features

- **Pixel-Accurate Visual Design**: Faithful recreation of Garibook's homepage with precise typography, colors (`#0052fe`), and spacing.
- **Fully Responsive**: Seamless user experience across mobile, tablet, and desktop viewports.
- **Modular Component-Based Architecture**: 12 dedicated, reusable React components.
- **Interactive Booking Widget**:
  - Tab switching between **Car Rental** and **Airport Rental**.
  - Sub-options: One-Way, Round-Way, and Hourly rental (with duration counter `[-] 2 hours [+]`).
  - Airport rental sub-options: From Airport and From Home.
  - Interactive car selection dropdown with vehicle classes and capacity.
- **Bilingual Support (English & Bangla)**: Complete dynamic language toggle affecting all headings, buttons, and content.
- **GSAP Animations**:
  - **Hero Entrance**: Staggered fade-up animation for the hero title and CTA elements.
  - **Animated Statistics Counter**: Smooth animated counter tween for live platform metrics (Trip Requests, Customers, Drivers, Districts).
  - **Skyline Car Entrance**: Smooth entrance drive-in animation for the vehicle on the city baseline.
- **Micro-Interactions & CSS Animations**:
  - Infinite seamless scrolling city skyline background (`frame.png`).
  - Interactive service cards with smooth hover transitions and tab badges.
  - Mobile drawer navigation menu with smooth transitions.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: JavaScript (ES6+)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**:
  - [GSAP (GreenSock Animation Platform)](https://gsap.com/)
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Component Structure

```text
src/
├── assets/                  # High-quality images, icons, and vector line art
├── components/
│   ├── Navbar/              # Sticky header, logo, navigation links, and language toggle
│   ├── Hero/                # Hero title, typewriter effect, CTA, and GSAP entrance
│   ├── HappyClient/         # Booking widget, animated stats counter, infinite skyline, car
│   ├── Services/            # Interactive service tabs and cards with hover effects
│   ├── Freedom/             # Promo banner highlighting flexible travel
│   ├── Features/            # Key value propositions and benefits grid
│   ├── BookingToArrival/    # Step-by-step ride flow explanation
│   ├── SmartDriver/         # Driver onboarding section
│   ├── Testimonials/        # Customer feedback and rating cards
│   ├── Blog/                # Latest travel articles and news
│   ├── DownloadApp/         # Mobile app download CTA with QR codes
│   └── Footer/              # Comprehensive multi-column footer and copyright
├── App.jsx                  # Main application orchestrator & global AOS configuration
├── main.jsx                 # React root mount point
└── index.css                # Base typography, Tailwind imports, and custom keyframes
```

---

## 🎬 GSAP Animation Details

As specified in the assessment requirements, GSAP was incorporated for meaningful UI animations:

1. **Hero Section (`Hero.jsx`)**:
   - `gsap.from(".hero-title")` and `gsap.from(".hero-right")`: Smoothly animates the main title and CTA elements from translateY into view on initial mount using `power3.out`.
2. **Platform Statistics Counter (`HappyClient.jsx`)**:
   - `gsap.to(animObj)`: Animates platform metrics (300,000+ Trip Requests, 850,000+ Customers, 35,000+ Drivers, 64 Districts) from 0 to target values using `power2.out` for a polished counter effect.
3. **Skyline Vehicle Entrance (`HappyClient.jsx`)**:
   - `gsap.fromTo(carRef.current)`: Drives the white sedan into position onto the skyline baseline with smooth opacity and positioning.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd garibook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 📱 Responsiveness

Tested and verified on multiple viewport breakpoints:
- **Mobile** (375px, 390px, 414px)
- **Tablet** (768px, 1024px)
- **Desktop** (1280px, 1440px, 1920px)
