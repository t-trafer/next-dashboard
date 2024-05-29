import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

console.log('root out');
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('root in');
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
