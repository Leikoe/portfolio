'use client';

import '@/styles/dist.css';
// import '@/styles/prism-one-light.css';
import '@/styles/globals.css';
import React from 'react';
import { DM_Sans } from '@next/font/google';
import NavBar from '@/ui/NavBar';
import Footer from '@/ui/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
});

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sans.className + ' dark'}>
      <body
        className="overflow-x-hidden overflow-y-scroll bg-white text-lg leading-[160%]
      tracking-[.25px] text-secondary-400 dark:bg-[#111]  dark:text-white"
      >
        <NavBar></NavBar>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={{
              hidden: { opacity: 0, x: 0, y: 20 },
              enter: { opacity: 1, x: 0, y: 0 },
              exit: { opacity: 0, x: -0, y: 20 },
            }}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            <main className="min-h-screen">{children}</main>
          </motion.div>
        </AnimatePresence>
        <Footer reactVersion="18.2" nextVersion="13"></Footer>
      </body>
    </html>
  );
}
