// import { getAllPosts } from '../../lib/api'
import Post from '@/lib/interfaces/post';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import PostHeader from '@/ui/post-header';
import PostBody from '@/ui/post-body';

export default async function Posts({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return (
    <article className="mb-32">
      {/* <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      /> */}
      <PostBody content={content} />
    </article>
  );
}
