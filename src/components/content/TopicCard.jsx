import { Link } from 'react-router-dom'

export default function TopicCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="group block rounded-lg border border-zinc-200 bg-zinc-50 p-5 hover:border-green-200 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-green-900/40 dark:hover:bg-zinc-900"
    >
      <div className="text-base font-semibold text-zinc-900 group-hover:underline dark:text-zinc-100">{title}</div>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</div>
    </Link>
  )
}
