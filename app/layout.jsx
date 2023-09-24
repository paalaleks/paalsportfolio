import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const flyover = localFont({
  src: 'fonts/flyover.ttf',
  display: 'swap',
  variable: '--font-flyover',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakartaSans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${flyover.variable} ${jakartaSans.variable}`}>
      <body className="bg-color3 text-color1">{children}</body>
    </html>
  );
}
