import { demos } from '@/lib/demos';
import markdownToHtml from '@/lib/markdownToHtml';
import Link from 'next/link';
import PostBody from '@/ui/post-body';
import { getAllPosts } from '@/lib/api';
import Post from '@/lib/interfaces/post';
import PostCard from '@/ui/post-card';
import Image from 'next/image';

import { parseISO, format } from 'date-fns';

export default async function Page() {
  const allPosts: Post[] = getAllPosts().sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  const p1 = allPosts[0];
  const p2 = allPosts[1];
  const p3 = allPosts[2];

  return (
    <>
      <main className="w-container mt-20 pb-5 lg:max-w-2xl">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              Léo Paillé
            </h1>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              Second year CS student
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              I like fast software, also a rustacean. Currently working in
              robotics, preparing for the 2023 robocup.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
            <Image
              src="/pfp.png"
              alt="Leikoe"
              width={500}
              height={500}
              className="rounded-full filter"
            />
          </div>
        </div>

        <div>
          <h1 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Featured Posts
          </h1>
          <div className="flex flex-col gap-6 md:flex-row">
            <PostCard
              title={p1.title}
              slug={p1.slug}
              date={p1.date}
              gradient="bg-gradient-to-r from-indigo-300 to-purple-400"
            ></PostCard>
            <PostCard
              title={p2.title}
              slug={p2.slug}
              date={p2.date}
              gradient="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
            ></PostCard>
            <PostCard
              title={p3.title}
              slug={p3.slug}
              date={p3.date}
              gradient="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></PostCard>
          </div>
          <a
            className="mt-8 flex h-6 items-center rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            href="/posts"
          >
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="ml-1 h-6 w-6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              ></path>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}
