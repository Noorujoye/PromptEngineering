import MarkdownArticle from '../components/MarkdownArticle'
import { CONTENT_BY_ID } from '../data/content'

export default function BestPractices() {
  return <MarkdownArticle markdown={CONTENT_BY_ID['best-practices']} />
}
