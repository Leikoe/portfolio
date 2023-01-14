import '@/styles/dist.css';
// import '@/styles/prism-one-light.css';
import '@/styles/globals.css';
import React from 'react';
import { DM_Sans } from '@next/font/google';
import NavBar from '@/ui/NavBar';
import Footer from '@/ui/Footer';

const sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sans.className + ' dark'}>
      <body
        className="overflow-y-scroll bg-white text-lg leading-[160%]
      tracking-[.25px] text-secondary-400 dark:bg-[#111]  dark:text-white"
      >
        <NavBar></NavBar>
        <main className="min-h-screen">{children}</main>
        <Footer reactVersion="18.2" nextVersion="13"></Footer>
      </body>
    </html>
  );
}
