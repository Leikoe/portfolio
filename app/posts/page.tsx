import MoreStories from '@/ui/more-stories';
import { getAllPosts } from '../../lib/api';
import Post from '@/lib/interfaces/post';
import PostHeader from '@/ui/post-header';

export default function Posts() {
  const allPosts: Post[] = getAllPosts();
  const post: Post = allPosts.filter((x) => x.featured)[0];
  return (
    <>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.authors}
      />
      {allPosts.length > 0 && <MoreStories name="My posts" posts={allPosts} />}
    </>
  );
}
