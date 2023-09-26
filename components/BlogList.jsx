import { fetchPages } from '@/lib/notion';
import Card from './Card';

export default async function BlogList() {
  const postList = await fetchPages();

  // postList.results.map((post) => {
  //   console.log(post.properties);
  //   console.log(post.properties.Description.rich_text[0]?.plain_text);
  //   console.log(post.properties.Tags);
  //   console.log(post.cover.external.url);
  //   const Tags = post.properties.Tags;
  //   const { Tags } = post.properties;
  //   console.log(Tags.multi_select);
  // });

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-8 gap-x-4 max-w-3xl mx-auto ">
      {postList.results &&
        postList.results.map((post) => {
          return (
            <Card
              id={post.id}
              post={post}
              href={'/blog/' + post.properties.Slug.formula.string}
              key={post.id}
              src={post.cover.external.url}
              alt={post.properties.Name.title[0]?.plain_text}
              name={post.properties.Name.title[0]?.plain_text}
              description={post.properties.Description.rich_text[0]?.plain_text}
              tags={post.properties.Tags.multi_select}
            />
          );
        })}
    </div>
  );
}
