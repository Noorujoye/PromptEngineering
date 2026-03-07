import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
}

function createIdFactory() {
  const used = new Map()
  return (rawText) => {
    const base = slugify(rawText)
    const count = used.get(base) ?? 0
    used.set(base, count + 1)
    return count === 0 ? base : `${base}-${count + 1}`
  }
}

export default function MarkdownArticle({ markdown }) {
  const getHeadingId = createIdFactory()
  return (
    <div className="prose prose-slate mx-auto max-w-[78ch] prose-headings:tracking-tight prose-h1:mb-4 prose-h1:text-3xl prose-h1:font-bold prose-p:my-4 prose-p:leading-7 prose-p:text-slate-700 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-li:leading-7 prose-a:text-indigo-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-hr:border-slate-200 dark:prose-invert dark:prose-p:text-slate-200 dark:prose-a:text-indigo-300 dark:prose-strong:text-slate-100 dark:prose-hr:border-slate-800">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children, ...props }) => {
            const text = String(children).replace(/\s+/g, ' ').trim()
            const id = getHeadingId(text)
            return (
              <h2
                {...props}
                id={id}
                className="scroll-mt-24 mt-10 border-b border-slate-200 pb-2 text-2xl font-semibold tracking-tight first:mt-0 dark:border-slate-800"
              >
                {children}
              </h2>
            )
          },
          h3: ({ children, ...props }) => {
            const text = String(children).replace(/\s+/g, ' ').trim()
            const id = getHeadingId(text)
            return (
              <h3 {...props} id={id} className="scroll-mt-24 mt-8 text-lg font-semibold tracking-tight">
                {children}
              </h3>
            )
          },
          pre: ({ children, ...props }) => (
            <pre
              {...props}
              className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-950 p-4 text-sm leading-6 text-slate-100 dark:border-slate-800"
            >
              {children}
            </pre>
          ),
          code: ({ children, className, ...props }) => (
            <code
              {...props}
              className={
                className
                  ? className
                  : 'rounded bg-slate-100 px-1 py-0.5 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
              }
            >
              {children}
            </code>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
