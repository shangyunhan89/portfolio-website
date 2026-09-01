import type { Metadata } from 'next';
import '@fontsource-variable/oxanium';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'SYH.tide — Creative Captain',
  description:
    'A playful pixel-art portfolio charting digital products, visual systems, and curious web experiments.',
  openGraph: {
    title: 'SYH.tide — Creative Captain',
    description: 'Designing delightful things for the digital sea.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYH.tide — Creative Captain',
    description: 'Designing delightful things for the digital sea.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
