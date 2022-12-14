import '@/styles/dist.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
import { DM_Sans } from '@next/font/google';

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
        {children}
      </body>
    </html>
  );
}
