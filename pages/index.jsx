import { parseMarkdown } from '../lib/markdown'

export default function Index({ parsedMarkdown }) {
  return <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }}></div>
}

export async function getServerSideProps() {
  const markdown = `# Hello!
## This is some markdown.
\`\`\`js
// This is a code block
const test = await testing()
\`\`\`
`
  const parsedMarkdown = await parseMarkdown(markdown)
  return {
    props: { parsedMarkdown }
  }
}
