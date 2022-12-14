import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center bg-secondary-800">
        <div className="w-7xl flex px-4">
          <div className="flex gap-3 py-4">
            <Link href="/">
              <img
                style={{ imageRendering: 'crisp-edges' }}
                src="/favicon.ico"
              ></img>
            </Link>

            <Link href="/posts" className="ml-9 p-2 text-xl">
              works
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
