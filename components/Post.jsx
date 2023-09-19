import { LuArrowLeft } from 'react-icons/lu';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const Post = ({ post, blocks }) => {
  const allText = blocks.filter((block) => {
    if (block.type === 'paragraph') {
      return block.paragraph.rich_text;
    }
  });

  console.log(post.properties.Name.title[0].plain_text);

  return (
    <div className="relative grid grid-flow-row min-h-screen">
      <div className="max-w-3xl mx-auto pb-8">
        <nav className="md:ml-0 ml-2 my-4">
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
        <div
          className={`flex flex-col items-center justify-center relative mx-auto w-max`}
        >
          <Image
            src={'/page-break.png'}
            width={82}
            height={73}
            className="pt-2 pb-4 w-8"
            alt="page break"
          />
        </div>
        {allText.map((block) => {
          return (
            <p
              key={block.id}
              className="text-color2 text-md leading-6 mb-4 mx-8"
            >
              {block.paragraph.rich_text.map((text, index) => {
                console.log(text);

                return (
                  <span
                    key={index}
                    className={text.annotations.bold ? 'font-bold' : ''}
                  >
                    {text.plain_text}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Post;
