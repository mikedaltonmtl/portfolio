import '../styles/globals.css';
import type { AppProps } from 'next/app';

// eslint-disable-next-line func-style
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
