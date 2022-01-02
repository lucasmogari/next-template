import Head from 'next/head';
import type { FunctionComponent } from 'react';
import type { GetLayoutFunction } from '../types/layout';

const SiteLayout: FunctionComponent = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width" />
    </Head>
    {children}
  </>
);

export const getLayout: GetLayoutFunction = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
