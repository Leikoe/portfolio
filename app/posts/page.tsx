// import Container from '../../components/container'
// import MoreStories from '../../components/more-stories'
// import Layout from '../../components/layout'
// import { getAllPosts } from '../../lib/api'
// import Head from 'next/head'
// import Post from '../../interfaces/post'
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import PostBody from './post-body';

export default function Posts() {
  // const post = getPostBySlug('about', [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'content',
  //   'ogImage',
  //   'coverImage',
  // ]);
  // const content = await markdownToHtml(post.content || '');

  return (
    <article className="mb-32">
      {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
      {/* <PostBody content={content} /> */}
      <h1>LOOOL</h1>
    </article>
  );
}
