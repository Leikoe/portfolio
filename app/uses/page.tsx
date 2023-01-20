// import Container from '../../components/container'
// import MoreStories from '../../components/more-stories'
// import Layout from '../../components/layout'
// import { getAllPosts } from '../../lib/api'
// import Head from 'next/head'
// import Post from '../../interfaces/post'
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import PostBody from '@/ui/post-body';
import PostHeader from '@/ui/post-header';

export default async function Posts() {
  const post = getPostBySlug('uses');
  const content = await markdownToHtml(post.content || '');

  return (
    <article className="mb-32">
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.authors}
      />
      <PostBody content={content} />
    </article>
  );
}
