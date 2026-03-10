import { NavLink } from 'react-router-dom'

function linkClassName({ isActive }) {
  return [
    'block rounded-md px-3 py-2 text-sm',
    isActive
      ? 'bg-green-50 font-medium text-green-900 dark:bg-green-950/35 dark:text-green-200'
      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800/60',
  ].join(' ')
}

export default function Sidebar({ topics, onNavigate }) {
  return (
    <aside className="h-full border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-100 px-4 py-4 dark:border-zinc-800">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-sm font-bold text-green-700 dark:bg-green-950/35 dark:text-green-200">
            PP
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">PromptPath</div>
            <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">Prompt engineering learning portal</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Topics</div>
        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{topics.length}</div>
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
