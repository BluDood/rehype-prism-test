import rehypePrism from 'rehype-prism'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function parseMarkdown(md) {
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism, {
      plugins: [
        // works
        'line-numbers',
        // doesn't work
        'toolbar',
        'copy-to-clipboard'
      ]
    })
    .use(rehypeStringify)
    .process(md)
  return html.toString()
}
