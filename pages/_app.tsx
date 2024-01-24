import type { AppProps } from 'next/app';
import AppProvider from '@/src/app.provider';
import { Pixelify_Sans } from 'next/font/google'
import App from 'next/app';

const pixelifySans = Pixelify_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={pixelifySans.className}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </main>
  );
}
