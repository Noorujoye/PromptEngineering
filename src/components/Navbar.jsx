import { useTheme } from './useTheme'

export default function Navbar({ onToggleSidebar }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-md border border-slate-200 px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle sidebar"
          >
            ≡
          </button>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
