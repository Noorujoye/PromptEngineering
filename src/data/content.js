export const CONTENT_BY_ID = {
  basics: `# Prompt Engineering Basics

## Introduction
Prompt Engineering is the practice of designing inputs (prompts) that guide an AI model to produce useful outputs.

## Core Concepts

### What is a prompt?
A ..... is the input you give an AI model to guide what it should do. Prompts can be a single sentence, a set of instructions, a structured template, or a full conversation.

### How AI interprets prompts
Modern language models respond by predicting the most likely next tokens based on:
- The text you provide (instructions + context)
- The conversation history (if any)
- Patterns learned during training

In practice, the model **does not “understand” like a human**—it follows patterns in the input and generates a response that best matches those patterns.

### Why prompt structure matters
Good prompts reduce ambiguity by:
- Stating the task clearly
- Providing the right context
- Specifying constraints (tone, length, audience)
- Defining the output format (bullets, table, code, JSON)

## Examples

**Prompt**
~~~text
Explain recursion in Java with a simple example.
~~~

**Output (example)**
~~~text
Recursion is a programming technique where a method calls itself.

Example:
A factorial function computes n! by calling factorial(n-1) until it reaches 1.
~~~

## Summary
- Prompts are instructions + context.
- Structure improves clarity and consistency.
- Output formats help you get predictable results.
`,

  'prompt-types': `# Prompt Types

## Introduction
Prompting is not one thing—different styles work better depending on the task and how much guidance the model needs.

## Core Concepts

### Zero-shot prompting
You ask the model to do a task with **no examples**.

### Few-shot prompting
You provide **a few examples** so the model learns the pattern.

### Chain-of-thought prompting
You ask the model to solve a problem **step by step**.

## Examples

**Zero-shot example**
~~~text
Translate the following sentence to French:
"I am learning prompt engineering."
~~~

**Few-shot example**
~~~text
2 + 2 = 4
3 + 3 = 6

Now solve:
4 + 4 =
~~~

**Chain-of-thought example**
~~~text
Solve the problem step by step.
If a store discount is 20% on a $50 item, what is the final price?
~~~

## Summary
- Zero-shot: fastest, least guidance.
- Few-shot: teaches a pattern.
- Step-by-step: helps with multi-step reasoning tasks.
`,

  techniques: `# Prompt Engineering Techniques

## Introduction
Techniques are reusable prompt patterns that improve reliability, clarity, and formatting.

## Core Concepts

### Role prompting
Assign a role so the model adopts the right voice and priorities.

### Instruction prompting
Give clear, direct instructions and constraints.

### Structured prompting
Use a template so the output is predictable.

### Step-by-step reasoning
For complex tasks, break down the work.

## Examples

**Role prompting**
~~~text
You are a professional teacher.
Explain binary search in simple terms.
~~~

**Instruction prompting**
~~~text
Explain the difference between TCP and UDP.
Use 5 bullet points. Keep it beginner-friendly.
~~~

**Structured prompting**
~~~text
Summarize the topic below using this format:
- Definition:
- Why it matters:
- Example:

Topic: Overfitting in machine learning
~~~

**Step-by-step reasoning**
~~~text
Given the code snippet below, do the following:
1) Explain what it does
2) Identify edge cases
3) Suggest improvements

[PASTE CODE HERE]
~~~

## Summary
- Choose a technique based on what you need: tone, structure, or reliability.
- Templates and constraints make outputs predictable.
`,

  examples: `# Prompt Examples

## Introduction
Use these prompts as starting points, then customize them with context, constraints, and output formats.

## Core Concepts

### How to customize a prompt
For best results, add:
- **Audience** (beginner, student, developer)
- **Tone** (formal, friendly, concise)
- **Constraints** (length, do/don’t do)
- **Output format** (bullets, steps, table, JSON)

## Examples

### Programming prompts
~~~text
Write a Java program to reverse a linked list.
~~~

~~~text
Explain time complexity for binary search and linear search.
Include Big-O and a short intuitive explanation.
~~~

### Content writing prompts
~~~text
Act as a professional copywriter.
Write a product description for a smartwatch.
Target audience: busy professionals.
Tone: confident and concise.
~~~

### Educational prompts
~~~text
Explain Newton’s laws using simple real-world examples.
Keep it suitable for a 12-year-old.
~~~

## Summary
- Add audience + tone + format for better results.
- Reuse proven templates and adjust constraints.
`,

  'best-practices': `# Best Practices

## Introduction
Best practices make prompts easier to understand and outputs easier to use.

## Core Concepts

### Be specific
Vague prompts produce vague answers. Specify what you want.

### Provide context
Tell the model who the audience is, what level to target, and why you need the output.

### Define the output format
If you want bullets, code, JSON, or a table—say so.

### Use examples
Examples reduce ambiguity and teach the pattern.

## Examples

### Example comparison
**Bad prompt**
~~~text
Explain AI.
~~~

**Better prompt**
~~~text
Explain Artificial Intelligence in simple terms with 3 real-world examples.
Audience: high school students.
Keep it under 150 words.
~~~

## Summary
- Specificity + context + format = better outputs.
- Examples reduce ambiguity and improve consistency.
`,
}
