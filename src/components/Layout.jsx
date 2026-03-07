import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { TOPICS } from '../data/topics'

export default function Layout() {
  const [search, setSearch] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia?.('(min-width: 768px)')?.matches ?? true
  })
  const location = useLocation()
  const navigate = useNavigate()

  const visibleTopics = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return TOPICS
    return TOPICS.filter((t) => t.title.toLowerCase().includes(q))
  }, [search])

  return (
    <div className="min-h-screen">
      <Navbar onToggleSidebar={() => setIsSidebarOpen((v) => !v)} />

      <div className="flex">
        {/* Desktop sidebar */}
        {isSidebarOpen ? (
          <div className="hidden h-[calc(100vh-56px)] w-[300px] shrink-0 md:block">
            <div className="h-full overflow-y-auto">
              <Sidebar topics={visibleTopics} searchValue={search} onSearchChange={setSearch} />
            </div>
          </div>
        ) : null}

        {/* Mobile drawer */}
        {isSidebarOpen ? (
          <div className="md:hidden">
            <div
              className="fixed inset-0 z-20 bg-slate-900/40"
              role="button"
              tabIndex={0}
              aria-label="Close sidebar"
              onClick={() => setIsSidebarOpen(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsSidebarOpen(false)
              }}
            />
            <div className="fixed left-0 top-14 z-30 h-[calc(100vh-56px)] w-[85vw] max-w-[320px]">
              <Sidebar
                topics={visibleTopics}
                searchValue={search}
                onSearchChange={setSearch}
                onNavigate={() => setIsSidebarOpen(false)}
              />
            </div>
          </div>
        ) : null}

        <main className="min-h-[calc(100vh-56px)] flex-1 px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-5xl">
            <div className="md:hidden">
              <label className="sr-only" htmlFor="topic-select">
                Select topic
              </label>
              <select
                id="topic-select"
                value={location.pathname}
                onChange={(e) => navigate(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              >
                {TOPICS.map((t) => (
                  <option key={t.id} value={t.path}>
                    {t.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
