import MarkdownArticle from '../components/MarkdownArticle'
import { CONTENT_BY_ID } from '../data/content'

export default function PromptTypes() {
  return <MarkdownArticle markdown={CONTENT_BY_ID['prompt-types']} />
}
