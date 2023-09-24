import Dialog from '@/components/Dialog';
import Image from 'next/image';
import { fetchPages } from '@/lib/notion';

export default function page({ params: { id } }) {
  return (
    <Dialog>
      <Image
        src={`/${id}`}
        width={1240}
        height={1240}
        alt="bigger version"
        className="max-h-screen object-contain py-4"
      />
    </Dialog>
  );
}

export async function generateStaticParams() {
  const pages = await fetchPages();

  const ids = pages.results.map((page) => page.id);

  return ids.map((id) => {
    return {
      params: { id },
    };
  });
}
