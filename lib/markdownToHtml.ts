import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
// import rehypeDocument from 'rehype-document'
// import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from '@mapbox/rehype-prism'

export default async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        // .use(rehypeDocument)
        // .use(rehypeFormat)
        .use(rehypePrism)
        .use(rehypeStringify)
        .process(markdown);

    return result.toString();
}
