import { fetchPageBlocks, fetchPageBySlug, fetchPages } from '@/lib/notion';
import { notFound } from 'next/navigation';
import Post from '@/components/Post';

export const metadata = {
  openGraph: {
    title: `Paal's Portfolio`,
    description:
      'A window into my world, ideas, and creations through the years.',
    url: 'https://www.paalsportfolio.no/',
    siteName: `Paal's Portfolio`,
    images: [
      {
        url: process.env.URL + '/paal.svg',
        width: 800,
        height: 600,
      },
      {
        url: process.env.URL + '/paal.svg',
        width: 1800,
        height: 1600,
        alt: 'Telemark me',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function Page({ params }) {
  const { slug } = params;
  const post = await fetchPageBySlug(slug);
  if (!post) notFound();
  const blocks = await fetchPageBlocks(post.id);
  return <Post post={post} blocks={blocks} />;
}

export async function generateStaticParams() {
  const pages = await fetchPages();

  const slugs = pages.results
    .map((page) => {
      const slugProperty = page.properties.Slug;
      return slugProperty ? slugProperty.formula.string : null;
    })
    .filter((slug) => slug !== null);

  return slugs.map((slug) => {
    return {
      params: { slug },
    };
  });
}
