import MarkdownArticle from '../components/MarkdownArticle'
import { CONTENT_BY_ID } from '../data/content'

export default function Examples() {
  return <MarkdownArticle markdown={CONTENT_BY_ID.examples} />
}
