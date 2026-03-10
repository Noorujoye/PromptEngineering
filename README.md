# PromptPath — Prompt Engineering Learning Portal

A documentation-style learning portal for prompt engineering concepts.

- Built with React + Vite, Tailwind CSS, and React Router.
- Designed like a small docs site: navbar + sidebar + content pages.
- Includes a small prompt playground (simulated responses; no external AI calls).

## Demo

- GitHub Pages (after deployment): `https://<your-username>.github.io/<your-repo-name>/`

## Features

- Docs-style layout: navbar + sidebar + content area
- Multiple topic pages with structured content and examples
- Responsive UI (sidebar becomes a mobile drawer)
- Topic search (type in header search and press Enter to open best match)
- Dark mode toggle (persisted)
- Prompt Playground (simulated; no AI integration)

## Tech Stack

- React (Vite)
- Tailwind CSS (+ Typography plugin)
- React Router (HashRouter for GitHub Pages compatibility)
- Markdown rendering with `react-markdown` + `remark-gfm`
- GitHub Pages deployment via `gh-pages`

## Quick Start

```bash
npm install
npm run dev
```

Build and preview locally:

```bash
npm run build
npm run preview
```

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — lint the project
- `npm run deploy` — deploy `dist/` to GitHub Pages via `gh-pages`

## Architecture (high level)

- Routing: `HashRouter` is used so refresh/deep links work on GitHub Pages.
- Layout: a single app shell (navbar + sidebar + content) wraps all pages.
- Content: theory pages are stored as Markdown strings in `CONTENT_BY_ID`.
- Navigation: the sidebar is built from `TOPICS` metadata; search filters topics.
- Theme: dark/light mode is managed in a provider and saved to localStorage.

## Editing / Adding Content

1. Update topic metadata in `src/data/topics.js`.
   - `id` should be unique and stable.
   - `path` should match the route path (e.g., `/basics`).
2. Add or update the Markdown in `src/data/content.js` under `CONTENT_BY_ID`.
   - Use the same key as the topic id (e.g., `basics`, `prompt-types`).
3. If you add a brand new page route, add a page component in `src/pages/` and register it in `src/App.jsx`.

Tip: the Markdown renderer supports GFM features (tables, code fences) via `remark-gfm`.

## Deploy to GitHub Pages

This project is already configured for GitHub Pages:

- `vite.config.js` uses `base: './'` so assets resolve from a subpath.
- The app uses `HashRouter` so it works on Pages without server-side routing.

Steps:

1. Push your code to GitHub (main branch).
2. Deploy:

```bash
npm run deploy
```

3. In GitHub repository settings:
   - Settings → Pages
   - Build and deployment → Source: “Deploy from a branch”
   - Branch: `gh-pages` / folder: `/(root)`

Notes:

- First deploy can take a minute; GitHub Pages needs time to publish.
- If you renamed your default branch, deployment still works (it publishes to `gh-pages`).

## Troubleshooting

- Blank page after deploy:
  - Confirm GitHub Pages is set to `gh-pages` branch.
  - Confirm you’re using the correct URL: `https://<user>.github.io/<repo>/`.
- Styling missing:
  - Make sure you deployed after a successful `npm run build`.
  - Confirm `vite.config.js` still has `base: './'`.
- 404 on refresh:
  - This project uses `HashRouter`, so refresh should work on Pages.

## Project Structure

```text
src/
	layout/               # App shell (Layout, Navbar, Sidebar)
	theme/                # Theme context/provider + hook
	components/content/    # Reusable content UI (MarkdownArticle, TopicCard)
	features/playground/   # PromptPlayground feature
	pages/                 # Home + topic pages
	data/                  # Topic metadata + markdown content
	styles/                # Global styles / Tailwind entry
```

## Notes for Reviewers

- The project is intentionally kept small and readable.
- Folder organization is separated by responsibility (layout/theme/features/content).
- “Prompt Playground” is a UI exercise only; it does not call any real model.
