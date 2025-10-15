# YOUWARE.md - ZON Video Landing

## Key Commands
- **Install dependencies:** `npm install`
- **Production build:** `npm run build`
- **Preview build output (optional):** `npm run preview`

## Architecture Snapshot
- **Stack:** React 18 + TypeScript + Vite 7 + Tailwind CSS 3.
- **Routing:** `src/App.tsx` wires React Router routes for landing (`VideoLanding`) and inner pages (`Products`, `Solutions`, `About`, `Contact`, `Admin`, `Dashboard`, `Login`).
- **Landing experience:** `src/components/VideoLanding.tsx` orchestrates single-play hero video with timed state-driven reveals (hook-based, relying on `sessionStorage` flag to restart when navigating back).
- **Sections:** Located under `src/components/sections/`; major pages consume these sections (e.g., `Products.tsx`, `Solutions.tsx`, `Contact.tsx`). Styling leans on Tailwind utility classes with custom theme colors.
- **Global styles & animations:** `src/index.css` contains Tailwind base along with keyframes (`pulse-glow`, `gentle-bounce`, etc.) used for replay button and other transitions.
- **Assets:** Stored in `src/assets/`; ensure references use `/assets/...` paths after build.

## Color Palette
- Current brand palette (from mood board):
  - Midnight navy: `#010214`
  - Vibrant orange: `#FF6826`
  - Deep red: `#CB2F19`
  - Golden amber: `#FFC06B`
  - Warm neutral: `#EFE6D4`
  - White: `#FFFFFF`

## Backend
- No backend worker or database configured in this project yet.
