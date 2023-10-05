import { MobileNavBar } from '@/components/MobileNavBar';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css'
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const SideBarWidth = 224;
  const SidesMargin = 48;
  const MobileSidesMargin = 12;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Sistema de Avaliação • UNICAP </title>
      </Head>

      <div className="flex max-sm:flex-col">
        <MobileNavBar />
        <Sidebar />

        <main
          className={`
          max-w-6xl my-12 mx-auto
          max-sm:w-[calc(100%_-_${MobileSidesMargin * 2}px)] max-sm:mt-0
          min-[640px]:w-[calc(100%_-_${SidesMargin * 2}px_-_${SideBarWidth}px)]
          `}
        >
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
