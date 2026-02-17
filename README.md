# Project Dashboard

A small frontend module for an internal project dashboard: list projects, filter by status and search, and view project details.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No env vars or backend required.

**Live demo:** [https://project-dashboard-jade-two.vercel.app/](https://project-dashboard-jade-two.vercel.app/)

## Assumptions

- **Status** is exactly one of: Active, On Hold, Completed.
- **Dates** are ISO-style strings (e.g. `"2025-01-15"`); the UI formats them for display.
- **Optional field:** Project has an optional `description`; the UI shows "—" when it’s missing or empty.
- **Data:** All data is client-side mock data in `data/projects.ts`; no API or persistence.

## Trade-offs

- **Client-side filtering only:** Filters don’t sync to the URL, so refreshing or sharing a link doesn’t keep filter state. Kept simple to meet “no backend” and stay within scope.
- **Status filter:** Single-select dropdown (not multi-select) to keep the UI minimal; filtering logic still supports multiple statuses if we switch the UI later.
- **Detail by route:** Clicking a project goes to `/projects/[id]` instead of a side panel, so the list is left behind and back navigation returns to the list (with filters reset).

## AI usage

See **[AI_USAGE.md](./AI_USAGE.md)** for what tools were used, for which parts, what was changed or rejected, and any disagreements with the AI output.

---

Built with Next.js (App Router), React, and Tailwind CSS.
