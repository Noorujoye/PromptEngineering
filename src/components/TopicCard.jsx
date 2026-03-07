import { Link } from 'react-router-dom'

export default function TopicCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="group block rounded-lg border border-slate-200 bg-slate-50 p-5 hover:border-indigo-200 hover:bg-white dark:border-slate-800 dark:bg-slate-950 dark:hover:border-indigo-900/40 dark:hover:bg-slate-900"
    >
      <div className="text-base font-semibold text-slate-900 group-hover:underline dark:text-slate-100">
        {title}
      </div>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</div>
    </Link>
  )
}
