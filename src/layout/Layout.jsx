import { NavLink, Outlet } from 'react-router-dom'
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

  const visibleTopics = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return TOPICS
    return TOPICS.filter((t) => {
      return t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    })
  }, [search])

  const firstMatchPath = visibleTopics[0]?.path
  const onSearchSubmit = () => {
    if (!search.trim()) return
    if (!firstMatchPath) return
    window.location.hash = `#${firstMatchPath}`
  }

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col">
        <Navbar
          onToggleSidebar={() => {
            setIsSidebarOpen((v) => !v)
          }}
          searchValue={search}
          onSearchChange={setSearch}
          onSearchSubmit={onSearchSubmit}
        />

        <div className="flex flex-1">
          {/* Desktop sidebar */}
          {isSidebarOpen ? (
            <div className="hidden h-[calc(100vh-56px)] w-[300px] shrink-0 md:block">
              <div className="h-full overflow-y-auto">
                <Sidebar topics={visibleTopics} />
              </div>
            </div>
          ) : null}

          {/* Mobile drawer */}
          {isSidebarOpen ? (
            <div className="md:hidden">
              <div
                className="fixed inset-0 z-20 bg-black/40"
                role="button"
                tabIndex={0}
                aria-label="Close sidebar"
                onClick={() => setIsSidebarOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsSidebarOpen(false)
                }}
              />
              <div className="fixed left-0 top-14 z-30 h-[calc(100vh-56px)] w-[85vw] max-w-[320px]">
                <Sidebar topics={visibleTopics} onNavigate={() => setIsSidebarOpen(false)} />
              </div>
            </div>
          ) : null}

          <main className="min-h-[calc(100vh-56px)] flex-1 px-4 py-6 sm:px-6 lg:px-10">
            <div className="mx-auto w-full max-w-6xl">
              <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <Outlet />
              </div>
            </div>
          </main>
        </div>

        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-zinc-600 dark:text-zinc-300 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} PromptPath</div>
              <div className="flex flex-wrap items-center gap-3">
                <NavLink to="/" className="font-medium text-zinc-700 hover:underline dark:text-zinc-200" end>
                  Home
                </NavLink>
                <NavLink to="/basics" className="font-medium text-zinc-700 hover:underline dark:text-zinc-200">
                  Basics
                </NavLink>
                <NavLink to="/techniques" className="font-medium text-zinc-700 hover:underline dark:text-zinc-200">
                  Techniques
                </NavLink>
                <NavLink to="/examples" className="font-medium text-zinc-700 hover:underline dark:text-zinc-200">
                  Examples
                </NavLink>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="rounded-md px-2 py-1 font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
