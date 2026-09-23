# V-Lair

Independent product studio building focused software for the way work moves.

**Stack**: Vite · React 18 · React Router · CSS Variables

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & Deploy

```bash
npm run build      # outputs to /dist
npm run preview    # preview the build locally
```

### API configuration

Copy `apps/api/.env.example` to `apps/api/.env` for local development. Set `RESEND_API_KEY` to enable email sending. In production, also set `API_ACCESS_TOKEN` and `WEB_ORIGINS`; contact and email routes fail closed when the production access token is missing.

The frontend API base URL can be configured with `VITE_API_URL`.

### Deploy to Vercel

1. Push to GitHub
2. Import repo on vercel.com
3. Framework: **Vite** (auto-detected)
4. Done ✅ — `vercel.json` handles SPA routing

### Deploy to Netlify

1. Push to GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `_redirects` file in `/public`:
   ```
   /*  /index.html  200
   ```

---

## Adding a New Product

1. **Create the component** in `src/apps/MyApp/index.jsx`
2. **Add a route** in `src/App.jsx`:
   ```jsx
   <Route path="/apps/my-app" element={<MyApp />} />
   ```
3. **Register the card** in `src/pages/Apps.jsx` — just add an entry to the `APPS` array:
   ```js
   {
     id: 'my-app',
     title: 'My App',
     description: 'What it does.',
     icon: '🔧',
     tags: ['React'],
     color: '#ff6b6b',
     ready: true,
     path: '/apps/my-app',
   }
   ```

That's it. The card appears automatically.

---

## Customise

| What             | Where                             |
| ---------------- | --------------------------------- |
| Company story    | `src/pages/About.jsx`             |
| Social links     | `src/pages/About.jsx` → `SOCIALS` |
| Skills           | `src/pages/About.jsx` → `SKILLS`  |
| Colors / tokens  | `src/styles/global.css` → `:root` |
| Nav logo / links | `src/components/Navbar.jsx`       |
| Homepage copy    | `src/pages/Home.jsx`              |
