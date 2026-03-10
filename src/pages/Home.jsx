import { Link } from 'react-router-dom'
import TopicCard from '../components/content/TopicCard'
import PromptPlayground from '../features/playground/PromptPlayground'
import { TOPICS } from '../data/topics'

export default function Home() {
  const topicCards = TOPICS.filter((t) => t.id !== 'home')

  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:to-black">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            PromptPath • Learn prompt engineering
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Build better prompts with a clear, structured learning path.
          </h1>
          <p className="mt-3 max-w-[80ch] text-zinc-700 dark:text-zinc-200">
            Read short theory pages, understand prompt types and techniques, and practice with examples.
            Use the header search to jump to any topic instantly.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              to="/basics"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400"
            >
              Start learning
            </Link>
            <Link
              to="/prompt-types"
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Explore prompt types
            </Link>
            <Link
              to="/examples"
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Jump to examples
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Structured pages</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Definitions, key ideas, examples, checklist.</div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Fast navigation</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Sidebar topics + header search.</div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Practice</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Try prompts in the playground.</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Start here</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Recommended order</div>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
              <li>Basics</li>
              <li>Prompt Types</li>
              <li>Techniques</li>
              <li>Examples</li>
              <li>Best Practices</li>
            </ol>
            <div className="mt-4">
              <Link
                to="/basics"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400"
              >
                Start with Basics
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">How to navigate</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
              <li>Use the menu button to open/close the sidebar.</li>
              <li>Use the header search, then press Enter to open the best match.</li>
              <li>Toggle dark/light mode from the header.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Topics</h2>
        <p className="mt-1 max-w-[78ch] text-sm text-zinc-600 dark:text-zinc-300">
          Follow the suggested order: Basics → Prompt Types → Techniques → Examples → Best Practices.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicCards.map((t) => (
            <TopicCard key={t.id} title={t.title} description={t.description} to={t.path} />
          ))}
        </div>
      </section>

      <section>
        <PromptPlayground />
      </section>
    </div>
  )
}
