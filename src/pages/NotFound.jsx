import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Page not found</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">The page you requested does not exist.</p>
      <Link
        to="/"
        className="mt-4 inline-block rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900"
      >
        Go Home
      </Link>
    </div>
  )
}
