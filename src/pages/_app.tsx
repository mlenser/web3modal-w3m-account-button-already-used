import '../globals.css';
import { type AppProps } from 'next/app';
import { Providers } from '@/components/Providers';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
