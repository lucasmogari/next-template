import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { getLayout as defaultGetLayout } from '../components/Layout';
import '../styles/index.css';
import type { GetLayoutFunction } from '../types/layout';

type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunction;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultGetLayout;

  return getLayout(<Component {...pageProps} />);
}
