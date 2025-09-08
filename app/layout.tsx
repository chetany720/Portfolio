import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chetany Kalaneya - Software Developer & AI Enthusiast',
  description: 'Portfolio of Chetany Kalaneya - A passionate software developer and AI/ML enthusiast with expertise in web development, data science, and cybersecurity.',
  keywords: 'software developer, AI, machine learning, web development, data science, cybersecurity, portfolio',
  authors: [{ name: 'Chetany Kalaneya' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Chetany Kalaneya - Software Developer & AI Enthusiast',
    description: 'Portfolio showcasing projects in AI/ML, web development, and cybersecurity',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}