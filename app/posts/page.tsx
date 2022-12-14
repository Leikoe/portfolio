import MoreStories from '@/ui/more-stories';
import { getAllPosts } from '../../lib/api';
import Post from '@/lib/interfaces/post';

export default function Posts() {
  const allPosts: Post[] = getAllPosts();
  return (
    <>
      {allPosts.length > 0 && <MoreStories name="My posts" posts={allPosts} />}
    </>
  );
}
