import '@/styles/globals.css'
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Sistema de Avaliação • UNICAP </title>
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>

  );
}
