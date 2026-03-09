import Layout from '@/components/layout/layout';
import client from '@/tina/__generated__/client';
import PostsClientPage from './client-page';
import { Section } from '@/components/layout/section';

export const revalidate = 300;

export default async function PostsPage() {
  let posts;
  try {
    posts = await client.queries.postConnection({
      sort: 'date',
      last: 1
    });
  } catch {
    return (
      <Layout rawPageData={{}}>
        <Section>
          <p className='text-center text-muted-foreground'>Posts indisponíveis no momento.</p>
        </Section>
      </Layout>
    );
  }
  const allPosts = posts;

  if (!allPosts.data.postConnection.edges) {
    return [];
  }

  while (posts.data?.postConnection.pageInfo.hasPreviousPage) {
    posts = await client.queries.postConnection({
      sort: 'date',
      before: posts.data.postConnection.pageInfo.endCursor,
    });

    if (!posts.data.postConnection.edges) {
      break;
    }

    allPosts.data.postConnection.edges.push(...posts.data.postConnection.edges.reverse());
  }

  return (
    <Layout rawPageData={allPosts.data}>
      <PostsClientPage {...allPosts} />
    </Layout>
  );
}
