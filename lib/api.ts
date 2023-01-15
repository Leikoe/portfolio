import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Post from '@/lib/interfaces/post'

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Post = {
    slug: realSlug,
    title: data.title,
    date: data.date,
    coverImage: '/assets/blog/' + realSlug + '/index.png',
    authors: data.authors,
    content: content,
    featured: data.featured,
    tags: data.tags.split(",")
  }
  
  return post;
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}