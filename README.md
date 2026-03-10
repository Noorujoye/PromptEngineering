# Prompt Engineering Learning Portal

A mini documentation-style learning platform for Prompt Engineering concepts, built with React + Vite, Tailwind CSS, and React Router.

## Features

- Docs-style layout: navbar + sidebar + content area
- Multiple topic pages with structured content and code-style examples
- Responsive design (sidebar becomes a dropdown on mobile)
- Search topics in the sidebar
- Dark mode toggle
- Prompt Playground (simulated responses; no AI integration)

## Tech Stack

- React (Vite)
- Tailwind CSS (+ Typography plugin)
- React Router
- Markdown rendering with react-markdown
- GitHub Pages deployment via gh-pages

## Getting Started

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project.
2. Run:

```bash
npm run deploy
```

3. In GitHub repo settings, enable Pages for the gh-pages branch.

Notes:

- The router uses HashRouter so deep links work on GitHub Pages.
- vite.config.js uses base: './' so assets work from a subpath.

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
