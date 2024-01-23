import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProvider from '@/src/app.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trivia Master',
  description: 'Trivia Master Game',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
