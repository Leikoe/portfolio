import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center bg-secondary-800 text-white">
        <div className="mx-auto flex min-w-[1440px] px-4">
          <div className="flex w-full items-center justify-between py-4">
            <Link href="/">
              <img
                style={{ imageRendering: 'crisp-edges' }}
                src="/favicon.ico"
              ></img>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/posts" className="ml-9 p-2 text-xl">
                works
              </Link>
              <Link href="/about" className="ml-9 p-2 text-xl">
                about
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
