import './globals.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import { Press_Start_2P } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Pixelify_Sans } from 'next/font/google';
// Initialize the fonts
const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: '400', // Adjust weight if needed
});
export const metadata = {
  title: 'My Portfolio',
  description: 'This is my portfolio description.',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={pixelifySans.className}>
        <Header fontClassName={pressStart2P.className} />
        <main>{children}</main>
        <Footer fontClassName={pressStart2P.className} />
      </body>
    </html>
  );
}
