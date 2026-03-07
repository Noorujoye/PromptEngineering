import TopicCard from '../components/TopicCard'
import PromptPlayground from '../components/PromptPlayground'
import { TOPICS } from '../data/topics'

export default function Home() {
  const topicCards = TOPICS.filter((t) => t.id !== 'home')

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Introduction to Prompt Engineering
        </h1>
        <p className="mt-4 max-w-[78ch] text-slate-700 dark:text-slate-200">
          Prompt Engineering is the practice of designing inputs (prompts) that guide AI models to produce useful,
          accurate, and reliable outputs. It’s a core skill for working with modern AI systems.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why prompt design matters</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Clear prompts reduce ambiguity, improve consistency, and help the model stay within constraints.
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Applications</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Coding help, content writing, summarization, tutoring, data extraction, and workflow automation.
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">How to use this portal</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Navigate topics from the sidebar (or dropdown on mobile) and learn with examples.
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Topics</h2>
        <p className="mt-2 max-w-[78ch] text-sm text-slate-600 dark:text-slate-300">
          Start with the basics, then explore types, techniques, examples, and best practices.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicCards.map((t) => (
            <TopicCard key={t.id} title={t.title} description={t.description} to={t.path} />
          ))}
        </div>
      </section>

      <PromptPlayground />
    </div>
  )
}
