import { LuArrowLeft } from 'react-icons/lu';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const Post = ({ post, blocks }) => {
  // console.log(blocks);

  const allText = blocks.filter((block) => {
    if (block.type === 'paragraph') {
      return block.paragraph.rich_text;
    }
  });

  return (
    <div className="relative grid grid-flow-row min-h-screen">
      <div className="max-w-3xl mx-auto">
        <nav className="md:ml-0 ml-2 my-2">
          <Link href={'/#blog'} className="btn">
            <LuArrowLeft fontSize={18} />
          </Link>
        </nav>
        <Image
          src={post.cover.external.url}
          width={1240}
          height={750}
          alt={post.properties.Name.title[0].plain_text}
        />
        <SectionHeader
          sectionName={post.properties.Name.title[0].plain_text}
          paddingTop="pt-8"
          paddingBottom="pb-4"
        />

        <div className="px-8 relative pb-10">
          {allText.map((block) => {
            return (
              <p key={block.id} className="text-color2 text-md leading-6 mb-4">
                {block.paragraph.rich_text.map((text) => {
                  return text.plain_text;
                })}
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
