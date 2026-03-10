export const CONTENT_BY_ID = {
  basics: `# Prompt Engineering Basics

## Introduction
Prompt Engineering is the practice of writing **clear, structured prompts** so an AI model produces outputs that are accurate, useful, and consistent.

In simple words: a prompt is not just a question — it’s a *specification*.

## Core Concepts

### What is a prompt?
A **prompt** is the input you provide to guide the model. It can be a single sentence, a multi-step instruction, a template, or an entire conversation.

### Prompt anatomy (the parts that make prompts reliable)
Most strong prompts include these building blocks:
- **Task / instruction**: what to do
- **Context**: background information the model should use
- **Constraints**: what to include/exclude (tone, length, do/don’t)
- **Examples** (optional): show the pattern you want
- **Output format**: bullets, table, code, JSON, etc.

### Why structure matters
Structured prompts reduce ambiguity and increase repeatability:
- The model doesn’t "know what you mean" unless you specify
- Output formats reduce random formatting
- Constraints prevent irrelevant or overly long answers

## A Reusable Prompt Template
Use this template for most tasks:

~~~text
Role: [optional]
Task: [what you want]
Context: [relevant details]
Constraints: [tone/length/do-don’t]
Output format: [bullets/table/JSON/code]
~~~

## Examples

### Example 1 — Explanation + bullets
~~~text
Task: Explain recursion.
Audience: Beginner Java students.
Constraints: Use 5 bullet points and one small Java snippet.
~~~

### Example 2 — Summarization with sections
~~~text
Task: Summarize the topic below.
Constraints: Keep it under 120 words.
Output format:
- Definition:
- Why it matters:
- Example:

Topic:
[PASTE TEXT]
~~~

### Example 3 — Data extraction as JSON
~~~text
Task: Extract structured data.
Constraints: Output valid JSON only.
Schema:
{
  "name": string,
  "email": string | null,
  "skills": string[]
}

Text:
[PASTE RESUME PARAGRAPH]
~~~

## Common Mistakes
- **Too vague**: “Explain AI” → unclear scope and audience
- **Missing format**: output becomes inconsistent across runs
- **No constraints**: model may be too long, too short, or off-topic
- **No context**: model guesses details you actually know

## Quick Checklist
- Did I state the task in one sentence?
- Did I add the right context (not everything, only what matters)?
- Did I set constraints (tone/length/what to avoid)?
- Did I specify the output format?

## Summary
- Prompts work best when treated like specifications.
- The fastest wins come from structure: task + context + constraints + format.
`,

  'prompt-types': `# Prompt Types

## Introduction
Different prompt types provide different levels of guidance. Choosing the right type makes outputs more reliable and reduces back-and-forth.

## Core Concepts

### Zero-shot prompting
You provide **only the instruction** (no examples). Best for simple, common tasks.

### Few-shot prompting
You include **a few examples** that demonstrate the pattern you want. Best for formatting and consistency.

### Role (persona) prompting
You assign a role to shape voice and priorities (e.g., “Act as a tutor”). Best for tone and decision-making.

### Structured prompting
You require a specific output format (template, table, JSON). Best for automation and reuse.

### Step-by-step prompting (procedural)
You request a *process* (steps, checklist, algorithm) rather than a single answer. Best for multi-step tasks.

Note: Some AI systems may not provide detailed internal reasoning. A practical alternative is to ask for **steps, key assumptions, and a brief justification**.

## Examples

### Zero-shot
~~~text
Task: Explain what prompt engineering is.
Audience: First-year CS students.
Constraints: 120 words max.
~~~

### Few-shot (format learning)
~~~text
Output format:
- Term:
- Definition:
- Example:

Example:
- Term: Overfitting
- Definition: When a model memorizes training data and performs poorly on new data.
- Example: High training accuracy, low test accuracy.

Now write the same format for: "Prompt Engineering"
~~~

### Role prompting
~~~text
Role: You are an interview coach.
Task: Help me answer "Tell me about yourself" for an AI internship.
Constraints: 120–150 words, confident but not arrogant.
~~~

### Structured prompting (JSON)
~~~text
Task: Extract action items.
Constraints: Output valid JSON only.
Schema: { "actions": [{ "owner": string, "task": string, "due": string | null }] }

Text:
[PASTE MEETING NOTES]
~~~

### Step-by-step
~~~text
Task: Design a prompt to summarize a research paper.
Constraints:
1) Provide steps.
2) Provide the final prompt template.
3) Include what to do if the paper is too long.
~~~

## Summary
- Zero-shot is fastest.
- Few-shot is best for consistent formatting.
- Role prompts shape tone and priorities.
- Structured/step-by-step prompts are best for reliable workflows.
`,

  techniques: `# Prompt Engineering Techniques

## Introduction
Techniques are repeatable patterns you can apply to make prompts clearer and outputs more dependable.

## Core Techniques

### 1) Role + goal
Set a role and a concrete goal.

~~~text
Role: You are a senior frontend reviewer.
Task: Review my React component for accessibility issues.
~~~

### 2) Delimiters (separating input from instructions)
Wrap pasted text/code so the model doesn’t confuse it with instructions.

~~~text
Task: Summarize the text.
Text:
"""
[PASTE TEXT HERE]
"""
~~~

### 3) Constraints (do/don’t + scope)
Add limits to prevent rambling or irrelevant content.

~~~text
Constraints:
- Keep under 150 words
- Do not invent facts
- Use simple language
~~~

### 4) Structured outputs (templates / schemas)
Great for consistent results and automation.

~~~text
Output format:
- Definition:
- Key points (3 bullets):
- Example:
~~~

### 5) Decomposition (break into steps)
For complex tasks, ask for a plan and then the final answer.

~~~text
Task: Create a study plan to learn prompt engineering.
Output:
1) 7-day plan (daily tasks)
2) Recommended practice prompts
3) Common mistakes to avoid
~~~

### 6) Verification prompts
Ask the model to check its own output against a checklist.

~~~text
Task: Produce the answer, then verify:
- Did you follow the requested format?
- Did you include all constraints?
- Did you avoid unsupported claims?
~~~

## Examples

### Example — Networking explanation
~~~text
Task: Explain TCP vs UDP.
Audience: Beginners.
Constraints: 6 bullet points + one short analogy.
~~~

### Example — Code review
~~~text
Role: You are a code reviewer.
Task: Review the code below for edge cases and performance.
Constraints: Provide 5 findings, each with severity (Low/Med/High).

Code:
"""
[PASTE CODE]
"""
~~~

## Summary
- Use role + goal to set direction.
- Use delimiters and constraints to reduce confusion.
- Use structured output and verification for consistency.
`,

  examples: `# Prompt Examples

## Introduction
Below are ready-to-use prompts. The best way to use them is to keep the structure and replace the context.

## Quick Tip
If you want consistent outputs, always specify:
- Audience
- Constraints (length / do-don’t)
- Output format

## Examples

### 1) Study notes (structured)
~~~text
Task: Turn the topic below into study notes.
Audience: Beginner.
Output format:
- Definition:
- Key concepts (5 bullets):
- Example:
- Common mistakes:
- 3 quick questions to self-test:

Topic: Prompt Engineering
~~~

### 2) Coding explanation (beginner-friendly)
~~~text
Role: You are a patient tutor.
Task: Explain binary search.
Constraints: Use a simple example and provide time complexity.
Output format: 6 bullet points + one short code snippet.
~~~

### 3) Writing (tone control)
~~~text
Role: You are a professional copywriter.
Task: Write a product description for a smartwatch.
Audience: Busy professionals.
Constraints: 120–160 words, confident tone, avoid buzzwords.
~~~

### 4) Data extraction (JSON)
~~~text
Task: Extract entities from the text.
Constraints: Output valid JSON only, do not add extra keys.
Schema:
{
  "people": string[],
  "organizations": string[],
  "dates": string[],
  "locations": string[]
}

Text:
[PASTE TEXT]
~~~

### 5) Comparing options (decision support)
~~~text
Task: Compare the options below.
Constraints: Use a table and end with a recommendation + 2 reasons.

Options:
1) [Option A]
2) [Option B]
3) [Option C]
~~~

## Summary
- Good prompts are reusable templates.
- Structure (format + constraints) is what makes prompts production-friendly.
`,

  'best-practices': `# Best Practices

## Introduction
Best practices help you get consistent, high-quality answers and reduce the time spent re-prompting.

## Core Best Practices

### 1) Be specific about the task
Instead of “Explain prompt engineering”, specify scope:
- depth (overview vs detailed)
- audience (beginner vs advanced)
- success criteria (what a good answer contains)

### 2) Add only the context that matters
Context improves accuracy, but too much context creates noise. Include:
- what you already know
- what you need the output for
- constraints (tools, language, format)

### 3) Define the output format
If you want reliability, don’t leave formatting to chance.

~~~text
Output format:
1) Short summary (2 lines)
2) Key points (5 bullets)
3) Example
4) Checklist
~~~

### 4) Use examples (few-shot) when formatting matters
Examples teach the pattern faster than explanations.

### 5) Add “do / don’t” constraints
This prevents hallucinations and off-topic content.

~~~text
Constraints:
- If you are unsure, say what is missing.
- Do not invent statistics.
- Keep the tone neutral and professional.
~~~

### 6) Iterate with a feedback loop
Treat prompting like debugging:
1) Ask for a first draft
2) Point out what’s wrong (missing sections, too long, wrong tone)
3) Request a revision with exact constraints

## Examples

### Example — vague vs precise
**Bad**
~~~text
Explain AI.
~~~

**Better**
~~~text
Task: Explain Artificial Intelligence.
Audience: High school students.
Constraints: Under 150 words.
Output format: Definition + 3 real-world examples + 1 limitation.
~~~

### Example — preventing invented details
~~~text
Task: Summarize the article below.
Constraints:
- Use only the information provided.
- If a fact is not stated, write "Not specified".
Text:
[PASTE ARTICLE]
~~~

## Quick Checklist
- Clear task?
- Correct audience?
- Enough context (but not too much)?
- Output format specified?
- Do/don’t constraints included?
- One example included when pattern matters?

## Summary
- Specificity + context + format + constraints are the biggest quality levers.
- Use iteration and checklists to make prompts production-ready.
`,
}
