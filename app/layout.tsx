import '@/styles/dist.css';
import '@/styles/prism-one-light.css';
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
    <html className={sans.className}>
      <body className="overflow-y-scroll bg-white text-lg leading-[160%] tracking-[.25px] text-secondary-400">
        <NavBar></NavBar>
        <main className="min-h-screen pb-3">{children}</main>
        <Footer reactVersion="18.2" nextVersion="13"></Footer>
      </body>
    </html>
  );
}
