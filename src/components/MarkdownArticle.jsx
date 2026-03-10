import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function getTextFromPreChildren(children) {
  // `pre` usually wraps a `code` element. We try to extract the raw string.
  const only = Array.isArray(children) ? children[0] : children
  const codeChildren = only?.props?.children
  if (typeof codeChildren === 'string') return codeChildren
  if (Array.isArray(codeChildren)) return codeChildren.join('')
  return null
}

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
    <div className="mx-auto max-w-4xl">
      <div className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-h1:mb-4 prose-h1:text-3xl prose-h1:font-bold prose-p:my-4 prose-p:leading-7 prose-p:text-zinc-700 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-li:leading-7 prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-900 prose-hr:border-zinc-200 dark:prose-invert dark:prose-p:text-zinc-200 dark:prose-a:text-green-300 dark:prose-strong:text-zinc-100 dark:prose-hr:border-zinc-800">
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
                  className="scroll-mt-24 mt-10 border-b border-zinc-200 pb-2 text-2xl font-semibold tracking-tight first:mt-0 dark:border-zinc-800"
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
            pre: ({ children, ...props }) => {
              const rawText = getTextFromPreChildren(children)
              return (
                <div className="relative">
                  {rawText ? (
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(rawText)
                        } catch {
                          // ignore clipboard failures
                        }
                      }}
                      className="absolute right-3 top-3 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                      aria-label="Copy code"
                      title="Copy"
                    >
                      Copy
                    </button>
                  ) : null}
                  <pre
                    {...props}
                    className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-sm leading-6 text-zinc-100 dark:border-zinc-800"
                  >
                    {children}
                  </pre>
                </div>
              )
            },
            code: ({ children, className, ...props }) => (
              <code
                {...props}
                className={
                  className
                    ? className
                    : 'rounded bg-zinc-100 px-1 py-0.5 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
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
    </div>
  )
}
