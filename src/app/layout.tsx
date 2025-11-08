import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hybrid Fitness Lifestyle Growth Lab',
  description:
    'Master playbook for scaling a hybrid fitness, lifestyle, and entrepreneurship brand to 100K followers in 10 months.',
  keywords: [
    'social media growth',
    'hybrid fitness',
    'lifestyle brand strategy',
    'influencer growth playbook',
    'instagram algorithm',
    'content engineering',
  ],
  openGraph: {
    title: 'Hybrid Fitness Lifestyle Growth Lab',
    description:
      'Field-tested growth operating system synthesizing viral creators, editing frameworks, and community building tactics.',
    url: 'https://agentic-6582b6b4.vercel.app',
    siteName: 'Hybrid Fitness Lifestyle Growth Lab',
    images: [
      {
        url: 'https://dummyimage.com/1200x630/0f1729/ffffff.png&text=Hybrid+Fitness+Growth+Lab',
        width: 1200,
        height: 630,
        alt: 'Hybrid Fitness Lifestyle Growth Lab',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
