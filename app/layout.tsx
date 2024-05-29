import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';

console.log('root out');
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('root in');
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
