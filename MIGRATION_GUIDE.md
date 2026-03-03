# Vite to Next.js Migration Guide

This document outlines the changes made to convert this project from Vite + React Router to Next.js 15.

## What Changed

### 1. Build System & Framework
- **From**: Vite + React
- **To**: Next.js 15 (with App Router)
- **Benefits**: Better performance, built-in optimization, simpler configuration

### 2. Routing
- **From**: React Router DOM (`BrowserRouter`, `Routes`, `Route`, `Link`)
- **To**: Next.js File-based Routing
  - Pages are defined by their file paths in the `app/` directory
  - Example: `app/services/page.tsx` → `/services` route
  - `Link` component replaces `react-router-dom` Link

### 3. Server
- **From**: Express.js server managing middleware and API routes
- **To**: Next.js API Routes
  - API endpoints in `app/api/contact/route.ts`
  - No need for separate server process

### 4. File Structure

#### Old Structure
```
src/
  ├── main.tsx          (entry point)
  ├── App.tsx           (main component with routing)
  ├── index.css         (styles)
  ├── components/
  │   └── ContactForm.tsx
  └── pages/
      ├── Services.tsx
      ├── PrivacyPolicy.tsx
      ├── TermsOfService.tsx
      └── CookiesPolicy.tsx

server.ts             (Express server)
vite.config.ts        (Vite configuration)
index.html            (HTML template)
```

#### New Structure
```
app/
  ├── api/
  │   └── contact/
  │       └── route.ts        (API endpoint)
  ├── services/
  │   └── page.tsx
  ├── privacy/
  │   └── page.tsx
  ├── terms/
  │   └── page.tsx
  ├── cookies/
  │   └── page.tsx
  ├── layout.tsx             (Root layout)
  ├── page.tsx               (Home page)
  └── globals.css            (Global styles)

components/
  ├── Navbar.tsx
  ├── Footer.tsx
  ├── ContactForm.tsx
  └── HomePageSections.tsx   (Hero, Services, etc.)

next.config.js               (Next.js configuration)
tailwind.config.ts          (Tailwind configuration)
postcss.config.js           (PostCSS configuration)
```

### 5. Dependencies

#### Removed
- `vite` - No longer needed with Next.js
- `@vitejs/plugin-react` - Built into Next.js
- `@tailwindcss/vite` - Replaced with standard Tailwind
- `react-router-dom` - Replaced with Next.js routing
- `express` - Uses Next.js API routes
- `tsx` - Not needed for Next.js scripts

#### Added
- `next` - The framework
- `postcss`, `autoprefixer` - For CSS processing

#### Unchanged
- `react`, `react-dom`
- `tailwindcss`
- `motion` (formerly Framer Motion)
- `lucide-react`
- `@google/genai`

### 6. Key Code Changes

#### Navigation Links
```tsx
// Before (React Router)
import { Link } from "react-router-dom";
<Link to="/services">Services</Link>

// After (Next.js)
import Link from "next/link";
<Link href="/services">Services</Link>
```

#### Page Components
```tsx
// Before: Component with Router context
export const ServicesPage = () => { ... }

// After: Default export page component
export default function ServicesPage() { ... }
```

#### API Routes
```tsx
// Before: Express route in server.ts
app.post("/api/contact", (req, res) => { ... })

// After: Next.js API route (app/api/contact/route.ts)
export async function POST(request: NextRequest) { ... }
```

#### Client Components
```tsx
// Next.js requires "use client" directive for client-side interactivity
"use client";

import { useState } from "react";

export const ContactForm = () => { ... }
```

### 7. Environment Variables

#### File Changes
- `.env.local` → Still used (Next.js standard)
- Added `.env.example` with template variables
- Updated `.gitignore` to exclude `.env` files

#### Accessing Variables
```tsx
// In client components: Use environment variables prefixed with NEXT_PUBLIC_
// In server components: Can use all variables

// Example:
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
```

### 8. TypeScript Configuration

#### Updated `tsconfig.json`
- Added Next.js specific compiler options
- Changed `jsx` to `"preserve"` (Next.js handles JSX transformation)
- Added `incremental` for faster builds
- Added Next.js plugin for enhanced IDE support

### 9. Build & Deployment

#### npm Scripts
```json
{
  "dev": "next dev",              // Start dev server (port 3000)
  "build": "next build",          // Production build
  "start": "next start",          // Start production server
  "lint": "next lint"             // Run ESLint
}
```

#### Previous Scripts
```json
{
  "dev": "tsx server.ts",         // Custom Express server
  "build": "vite build",
  "preview": "vite preview",
  "clean": "rm -rf dist"
}
```

## Migration Checklist

- ✅ Updated `package.json` with Next.js dependencies
- ✅ Created `app/` directory structure
- ✅ Converted React Router routes to file-based routing
- ✅ Converted Express API routes to Next.js API routes
- ✅ Moved components to shared `components/` directory
- ✅ Created layout and page components
- ✅ Updated `tsconfig.json` for Next.js
- ✅ Created `tailwind.config.ts`
- ✅ Created `postcss.config.js`
- ✅ Updated `next.config.js`
- ✅ Updated `.gitignore` for Next.js
- ✅ Updated `README.md`

## Breaking Changes & Considerations

### 1. Layout Component
- Root layout in `app/layout.tsx` wraps all pages
- No longer need to manage layout in App.tsx

### 2. Styling
- CSS is imported in the root layout with `@import "tailwindcss"`
- No custom Vite configuration needed

### 3. Dynamic Routes
- To create dynamic routes, use bracket syntax: `app/[id]/page.tsx`
- Example for blog posts: `app/blog/[slug]/page.tsx`

### 4. API Routes
- All API routes are in `app/api/`
- Use `NextRequest` and `NextResponse` from `next/server`

### 5. Server vs Client Components
- Components are server components by default
- Add `"use client"` at the top for interactive features (state, events, etc.)

### 6. Image Optimization
- Use `next/image` component instead of `<img>` for automatic optimization
- Currently using standard `<img>` tags which work but aren't optimized

## Performance Improvements

With Next.js, you automatically get:
- Image optimization
- Code splitting
- Automatic static generation where possible
- Built-in compression
- Faster builds with incremental compilation
- Better SEO with metadata API

## Next Steps

1. Install dependencies: `npm install`
2. Set environment variables in `.env.local`
3. Run development server: `npm run dev`
4. Verify all pages work correctly
5. Test API endpoints
6. Deploy to your hosting platform (Vercel recommended for Next.js)

## Deployment

### Recommended: Vercel
```bash
npm i -g vercel
vercel
```

### Docker
Create a `Dockerfile` for containerized deployment:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms
Next.js can be deployed to any Node.js hosting platform
(AWS, Google Cloud, Heroku, Railway, etc.)

## Old Files to Delete

The following files/directories are no longer needed and can be deleted:

```
- src/                 (old source directory)
- server.ts           (Express server)
- vite.config.ts      (Vite configuration)
- index.html          (handled by Next.js)
```

## Questions & Troubleshooting

### Issue: Styles not loading
- Check that `globals.css` is imported in `app/layout.tsx`
- Verify Tailwind config is correct in `tailwind.config.ts`

### Issue: Images not showing
- Check image paths are relative to `public/` directory
- Use `next/image` for optimized images

### Issue: Environment variables not working
- Prefix client-side variables with `NEXT_PUBLIC_`
- Restart dev server after changing `.env.local`

### Issue: API route not found
- Check file is at correct path: `app/api/[route]/route.ts`
- Use correct HTTP method function name (GET, POST, etc.)
