import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from './[...urlSegments]/client-page';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BasePage } from '@/landing/components';

export const revalidate = 300;

export default async function Home() {
  const data = await client.queries.page({
    relativePath: `home.mdx`,
  });
  const isHome = data.data.page._sys.relativePath === 'home.mdx';

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {isHome && <BasePage />}
      {!isHome && (
        <Layout rawPageData={data}>
          <ClientPage {...data} />
        </Layout>
      )}
    </>
  );
}
