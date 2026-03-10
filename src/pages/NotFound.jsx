import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Page not found</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">The page you requested does not exist.</p>
      <Link
        to="/"
        className="mt-4 inline-block rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
      >
        Go Home
      </Link>
    </div>
  )
}
