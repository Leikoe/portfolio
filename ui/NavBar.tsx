import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <>
      <nav className="bg-secondary-400 text-white">
        <div className="w-container e-container">
          <div className="flex w-full items-center justify-between py-[15px]">
            <Link href="/">
              <img
                style={{ imageRendering: 'crisp-edges', height: '50px' }}
                src="/favicon.ico"
              ></img>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/posts" className="ml-9 p-2">
                works
              </Link>
              <Link href="/about" className="ml-9 p-2">
                about
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
