import '@/styles/dist.css';
import '@/styles/prism-one-light.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
import { DM_Sans } from '@next/font/google';
import NavBar from '@/ui/NavBar';

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
      <body className="overflow-y-scroll bg-white text-secondary-400">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
