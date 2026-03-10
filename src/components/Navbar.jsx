import { NavLink } from 'react-router-dom'
import { useMemo } from 'react'
import { useTheme } from './useTheme'

function navLinkClassName({ isActive }) {
  return [
    'inline-flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium transition',
    isActive
      ? 'text-green-700 dark:text-green-300'
      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800/60',
  ].join(' ')
}

function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}

function IconSun(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </svg>
  )
}

function IconMoon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M21 12.6A8.5 8.5 0 0 1 11.4 3a7 7 0 1 0 9.6 9.6Z" />
    </svg>
  )
}

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

export default function Navbar({ onToggleSidebar, searchValue, onSearchChange, onSearchSubmit }) {
  const { theme, toggleTheme } = useTheme()

  const navItems = useMemo(
    () => [
      { to: '/basics', label: 'Basics', mobileLabel: 'Basics' },
      { to: '/prompt-types', label: 'Prompt Types', mobileLabel: 'Types' },
      { to: '/techniques', label: 'Techniques', mobileLabel: 'Techniques' },
      { to: '/examples', label: 'Examples', mobileLabel: 'Examples' },
      { to: '/best-practices', label: 'Best Practices', mobileLabel: 'Best' },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="flex h-14 items-center gap-3 px-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-800"
          aria-label="Toggle sidebar"
        >
          <IconMenu className="h-5 w-5" />
        </button>

        <NavLink
          to="/"
          className="flex items-center gap-2 rounded-md px-2 py-1 text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-800/60"
          aria-label="Go to home"
          end
        >
          <span className="text-sm font-bold tracking-tight">PromptPath</span>
          <span className="hidden text-xs text-zinc-500 dark:text-zinc-400 sm:inline">Docs</span>
        </NavLink>

        <nav className="hidden flex-1 items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden w-[320px] lg:block">
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearchSubmit?.()
              }}
              placeholder="Search topics..."
              className="w-full rounded-md border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-green-900/60"
              aria-label="Search topics"
            />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-800"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-white/80 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950/60 lg:hidden">
        <div className="relative">
          <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearchSubmit?.()
            }}
            placeholder="Search topics..."
            className="w-full rounded-md border border-zinc-200 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-green-900/60"
            aria-label="Search topics"
          />
        </div>

        <nav className="mt-2 flex flex-wrap gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClassName}>
              {item.mobileLabel}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
