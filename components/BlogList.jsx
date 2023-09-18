import { fetchPages } from '@/lib/notion';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogList() {
  const postList = await fetchPages();

  // console.log(postList);

  // postList.results.map((post) => {
  //   console.log(post.properties);
  //   console.log(post.properties.Description.rich_text[0]?.plain_text);
  //   console.log(post.properties.Tags.multi_select[0]?.name);
  //   console.log(post.cover.external.url);
  // });

  return (
    <div className="grid grid-cols-2 gap-y-8 gap-x-4 max-w-3xl mx-auto ">
      {postList.results &&
        postList.results.map((post) => {
          return (
            <Link
              href={'/blog/' + post.properties.Slug.formula.string}
              key={post.id}
              className="transition duration-300 ease-in-out cursor-pointer   "
            >
              <Image
                width={768}
                height={768}
                src={post.cover.external.url}
                className=""
                alt={post.properties.Name.title[0]?.plain_text}
              />
              <h2>{post.properties.Name.title[0]?.plain_text}</h2>
              <p className="text-color2">
                <span className="mr-1">
                  {post.properties.Description.rich_text[0]?.plain_text}
                </span>
                <span
                  className={`inline-flex whitespace-nowrap w-fit rounded-full bg-eerie_black-500 px-2.5 py-0.5 text-xs text-color1`}
                >
                  {post.properties.Tags.multi_select[0]?.name}
                </span>
              </p>
            </Link>
          );
        })}
    </div>
  );
}
