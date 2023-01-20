import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <>
      <nav className="bg-secondary-400 text-white dark:bg-[#111]">
        <div className="w-container e-container">
          <div className="flex w-full items-center justify-between py-8 lg:py-[15px]">
            <Link href="/">
              <img
                className="h-20 lg:h-14"
                style={{ imageRendering: 'crisp-edges' }}
                src="/favicon.ico"
              ></img>
            </Link>
            <div className="flex items-center gap-3 text-4xl font-bold lg:text-base">
              <Link href="/posts" className="ml-9 p-2 small-caps">
                posts
              </Link>
              <Link href="/about" className="ml-9 p-2 small-caps">
                about
              </Link>
              <Link href="/uses" className="ml-9 p-2 small-caps">
                uses
              </Link>
              <Link
                href="https://github.com/Leikoe/leikoe.github.io"
                className="ml-9 p-2 small-caps"
              >
                source
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
