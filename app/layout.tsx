import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STRIDE CONSULTING｜構想を、現場の前進に。',
  description: '戦略・AI・PMO・組織変革を、構想から現場定着まで支援する伴走型コンサルティング。',
  openGraph: {
    title: 'STRIDE CONSULTING｜構想を、現場の前進に。',
    description: '戦略を描くだけで終わらせない。チームの一員として、変革が根づくまで伴走します。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STRIDE CONSULTING｜構想を、現場の前進に。',
    description: '戦略を描くだけで終わらせない。チームの一員として、変革が根づくまで伴走します。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
