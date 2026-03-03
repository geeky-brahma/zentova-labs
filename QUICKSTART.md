# Quick Start Guide

Your Zentova Labs project has been successfully converted to Next.js 15! 🎉

## Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Then add your Google Gemini API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Start Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

### 4. Explore Your New Project Structure

**Main Routes:**
- `/` - Home page
- `/services` - Services page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/cookies` - Cookies Policy

**API Endpoints:**
- `POST /api/contact` - Contact form submission

### 5. Make Your First Edit

Try editing [app/page.tsx](app/page.tsx) or any component in [components/](components/) to see changes hot-reload instantly.

## Project File Structure

```
app/
  ├── (routes with pages)
  ├── api/contact/route.ts      # API endpoint
  ├── layout.tsx                # Root layout  
  ├── page.tsx                  # Home page
  └── globals.css               # Tailwind styles

components/                     # Shared components
  ├── Navbar.tsx
  ├── Footer.tsx
  ├── ContactForm.tsx
  └── HomePageSections.tsx

next.config.js                  # Next.js config
tailwind.config.ts              # Tailwind config
postcss.config.js               # PostCSS config
```

## Key Features

- ✅ **Next.js 15** - Modern React framework
- ✅ **File-based Routing** - Pages defined by file structure
- ✅ **API Routes** - Backend in `/app/api`
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **TypeScript** - Full type safety
- ✅ **Motion Graphics** - Smooth animations
- ✅ **Dark Theme** - Beautiful dark UI

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t zentova-labs .
docker run -p 3000:3000 zentova-labs
```

### Other Platforms
Deploy directly to AWS, Google Cloud, Heroku, Railway, or any Node.js hosting.

## Important Notes

1. **Old Files**: The `src/`, `server.ts`, and `vite.config.ts` files are no longer needed and can be deleted
2. **Environment**: Make sure to set `GEMINI_API_KEY` before running
3. **Hot Reload**: Dev server auto-refreshes with file changes
4. **TypeScript**: Full type checking - run `npm lint` to check

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run linter
```

## Troubleshooting

**Styles not showing?**
- Make sure `.env.local` is set
- Restart dev server with `npm run dev`

**API not working?**
- Check `/app/api/contact/route.ts` exists
- Verify request is POST to `/api/contact`

**Import issues?**
- Update path aliases in `tsconfig.json` (currently `@/` maps to root)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) - Details about the conversion

## Need Help?

Check the [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) for detailed information about what changed during the conversion from Vite to Next.js.

---

Happy building! 🚀
