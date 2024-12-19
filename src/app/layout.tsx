import type { Metadata } from 'next';
import './globals.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import TopNavigation from '@/components/nav/TopNavigation';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Detox the Web',
  description:
    'One-page site that show the importance of the Less is More principle on the web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} antialiased font-sans bg-slate-100`}
      >
        <header className="relative z-50">
          <TopNavigation />
        </header>
        {children}
      </body>
    </html>
  );
}
