import { NavLink } from 'react-router-dom'

function linkClassName({ isActive }) {
  return [
    'block rounded-md px-3 py-2 text-sm',
    isActive
      ? 'bg-indigo-50 font-medium text-indigo-900 dark:bg-indigo-950/35 dark:text-indigo-200'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60',
  ].join(' ')
}

export default function Sidebar({ topics, searchValue, onSearchChange, onNavigate }) {
  return (
    <aside className="h-full border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Prompt Engineering</div>
        <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Learning topics</div>
      </div>

      <div className="p-4">
        <label className="sr-only" htmlFor="topic-search">
          Search topics
        </label>
        <input
          id="topic-search"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search topics..."
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-indigo-900/60"
        />
      </div>

      <div className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Topics
      </div>

      <nav className="space-y-1 px-2 pb-4">
        {topics.map((t) => (
          <NavLink
            key={t.id}
            to={t.path}
            className={linkClassName}
            end={t.path === '/'}
            onClick={() => onNavigate?.()}
          >
            {t.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
