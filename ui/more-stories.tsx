import PostPreview from './post-preview';
import type Post from '@/lib/interfaces/post';
import PostHeader from './post-header';
import DateFormatter from './date-formatter';

type Props = {
  name: string;
  posts: Post[];
};

const MoreStories = ({ name, posts }: Props) => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#111]">
      {/* <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        {name}
      </h2> */}
      <div className="w-container e-container flex flex-col gap-1 pt-12">
        {posts.map((post) => (
          <>
            <a
              href={'/posts/' + post.slug}
              className="bg-white dark:bg-neutral-900"
            >
              <div className="flex flex-col p-4">
                <div>{post.title}</div>
                <DateFormatter dateString={post.date} />
              </div>
            </a>
          </>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
