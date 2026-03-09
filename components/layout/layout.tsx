import React, { PropsWithChildren } from 'react';
import { LayoutProvider } from './layout-context';
import client from '../../tina/__generated__/client';
import { Header } from './nav/header';
import { Footer } from './nav/footer';
import fallbackGlobalSettings from '@/content/global/index.json';

type LayoutProps = PropsWithChildren & {
  rawPageData?: Record<string, unknown>;
};

export default async function Layout({ children, rawPageData }: LayoutProps) {
  let globalSettings = fallbackGlobalSettings as any;

  try {
    const { data: globalData } = await client.queries.global(
      {
        relativePath: 'index.json',
      },
      {
        fetchOptions: {
          next: {
            revalidate: 60,
          },
        },
      }
    );
    globalSettings = globalData.global;
  } catch {
    // Fallback to local JSON when Tina GraphQL is not reachable.
  }

  return (
    <LayoutProvider globalSettings={globalSettings} pageData={rawPageData ?? {}}>
      <Header />
      <main className='overflow-x-hidden pt-20'>{children}</main>
      <Footer />
    </LayoutProvider>
  );
}
