<div align="center">
<img width="1200" height="475" alt="Zentova Labs Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Zentova Labs - Next.js Web Application

A modern Next.js application for Zentova Labs, a digital systems engineering company specializing in secure, scalable solutions.

## Project Structure

This project has been converted from Vite + React Router to **Next.js 15** with TypeScript and Tailwind CSS.

```
app/
  ├── api/
  │   └── contact/
  │       └── route.ts          # Contact form API endpoint
  ├── services/
  │   └── page.tsx              # Services page
  ├── privacy/
  │   └── page.tsx              # Privacy Policy page
  ├── terms/
  │   └── page.tsx              # Terms of Service page
  ├── cookies/
  │   └── page.tsx              # Cookies Policy page
  ├── layout.tsx                # Root layout
  ├── page.tsx                  # Home page
  └── globals.css               # Global styles

components/
  ├── Navbar.tsx                # Navigation component
  ├── Footer.tsx                # Footer component
  ├── ContactForm.tsx           # Contact form component
  └── HomePageSections.tsx      # Home page sections (Hero, Services, etc.)
```

## Prerequisites

- Node.js 18+
- npm or yarn

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables by creating a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```
   
   Then add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

## Build and Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Features

- ✨ Modern React 19 with Next.js 15
- 🎨 Beautiful UI with Tailwind CSS v4
- ✅ TypeScript support
- 🎬 Smooth animations with Motion/React
- 📱 Fully responsive design
- 🔐 Secure backend with API routes
- 📧 Contact form with server-side validation

## Key Changes from Original

This project was converted from a Vite + React Router setup:

- ✅ Replaced Vite with **Next.js** for better performance and built-in features
- ✅ Removed React Router, using **Next.js file-based routing** instead
- ✅ Replaced Express server with **Next.js API routes** (`/app/api/`)
- ✅ Updated to **TypeScript configuration** for Next.js
- ✅ Migrated styling to work with **Tailwind CSS 4** (no more custom vite config)
- ✅ Removed manual dependency management for Vite plugins

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## License

Proprietary - © 2026 Zentova Labs. All rights reserved.
