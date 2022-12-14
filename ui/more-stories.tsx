import PostPreview from './post-preview';
import type Post from '@/lib/interfaces/post';

type Props = {
  name: string;
  posts: Post[];
};

const MoreStories = ({ name, posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        {name}
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
