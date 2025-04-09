import Header from '@/components/Header';
import SaleBanner from '@/components/SaleBanner';
import type { Metadata } from 'next';
import { Figtree, Urbanist } from 'next/font/google';
import React from 'react';
import './globals.css';

const sale = {
  tagline: '🚀 FRESH BEGINNINGS SALE:',
  message: 'Extra 25% OFF, Limited Spots - start your journey today!',
};

const FigtreeFont = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const UrbanistFont = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Netzet | Fametonic',
  description:
    'Learn how to grow your influence, create viral content, and build a profitable career on social media with Fametonic.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:title' content='Netzet | Fametonic' />
        <meta
          property='og:description'
          content='Turn Social Media Into a Profitable Career'
        />
        <meta property='og:image' content='/og-img.png' />
        <meta property='og:url' content='https://netzet.vercel.app' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Netzet | Fametonic' />
        <meta
          name='twitter:description'
          content='Turn Social Media Into a Profitable Career'
        />
        <meta name='twitter:image' content='/og-img.png' />
      </head>
      <body
        className={`${FigtreeFont.variable} ${UrbanistFont.variable} antialiased`}
      >
        <SaleBanner tagline={sale.tagline} message={sale.message} />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
