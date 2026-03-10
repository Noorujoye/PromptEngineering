import { useMemo, useState } from 'react'

function simulateResponse(prompt) {
  const trimmed = prompt.trim()
  if (!trimmed) return 'Enter a prompt above, then click Generate Response.'

  const lower = trimmed.toLowerCase()

  if (lower.includes('recursion') && lower.includes('java')) {
    return [
      'Recursion is when a method calls itself to solve a problem by breaking it into smaller parts.',
      '',
      'Simple Java example (factorial):',
      'int fact(int n) {',
      '  if (n <= 1) return 1;',
      '  return n * fact(n - 1);',
      '}',
    ].join('\n')
  }

  if (lower.includes('translate') && lower.includes('french')) {
    return 'French: "Je suis en train d\'apprendre l\'ingénierie des prompts."'
  }

  if (lower.includes('binary search')) {
    return [
      'Binary search finds an item in a sorted list by repeatedly cutting the search range in half.',
      'Each step compares the middle element and chooses the left or right half.',
    ].join('\n')
  }

  return [
    'Simulated response:',
    'I understood your request and would respond with a clear, structured answer.',
    'Try adding more context (audience, format, constraints) to improve results.',
  ].join('\n')
}

export default function PromptPlayground() {
  const [prompt, setPrompt] = useState('')
  const [generated, setGenerated] = useState('')

  const response = useMemo(() => (generated ? simulateResponse(generated) : ''), [generated])

  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Prompt Playground</h2>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
        Type a prompt and generate a simulated response (no real AI call).
      </p>

      <label className="mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="playground">
        Enter Prompt
      </label>
      <textarea
        id="playground"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        placeholder="e.g., You are a professional teacher. Explain binary search in simple terms."
        className="mt-2 w-full rounded-md border border-zinc-200 bg-white p-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-green-400/20"
      />

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setGenerated(prompt)}
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400"
        >
          Generate Response
        </button>
        <button
          type="button"
          onClick={() => {
            setPrompt('')
            setGenerated('')
          }}
          className="rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Clear
        </button>
      </div>

      {generated ? (
        <div className="mt-4">
          <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Response</div>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">{response}</pre>
        </div>
      ) : null}
    </section>
  )
}
