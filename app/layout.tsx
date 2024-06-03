import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Client } from './client';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        <SpeedInsights />
        <Client id="root" />
        {children}
      </body>
    </html>
  );
}
