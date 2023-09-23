import { LuArrowLeft } from 'react-icons/lu';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const Post = ({ post, blocks }) => {
  const renderBlock = (block) => {
    console.log(block);
    if (block.type === 'paragraph') {
      return (
        <div key={block.id} className="text-color2 text-md leading-6 mb-4 mx-8">
          {block.paragraph.rich_text.map((text, index) => {
            if (text.href) {
              return (
                <Link
                  key={index}
                  className={`inline underline`}
                  href={text.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.plain_text}
                </Link>
              );
            }

            return (
              <p
                key={index}
                className={`inline ${text.annotations.bold ? 'font-bold' : ''}`}
              >
                {text.plain_text}
              </p>
            );
          })}
        </div>
      );
    }

    if (block.type === 'image') {
      return (
        <div className="flex flex-col my-4">
          <Image
            key={block.id}
            src={block.image.external.url}
            width={1280}
            height={700}
            alt={block.image.caption[0]?.plain_text || ''}
          />
        </div>
      );
    }

    return null;
  };

  const renderBlocks = () => {
    let imageBuffer = [];

    return blocks.map((block, index) => {
      if (block.type === 'image') {
        imageBuffer.push(block);

        // Check if next block is also an image
        if (index < blocks.length - 1 && blocks[index + 1].type === 'image') {
          return null;
        }

        // Render grid if imageBuffer has more than one image
        const gridImages = imageBuffer.map((imageBlock) =>
          renderBlock(imageBlock),
        );
        imageBuffer = [];

        if (gridImages.length > 1) {
          return (
            <div key={block.id} className="grid sm:grid-cols-2">
              {gridImages}
            </div>
          );
        }

        return gridImages;
      }

      return renderBlock(block);
    });
  };

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
        <div className="flex flex-col items-center justify-center relative mx-auto w-max">
          <Image
            src={'/page-break.png'}
            width={82}
            height={73}
            className="pt-5 pb-4 w-8"
            alt="page break"
          />
        </div>
        {renderBlocks()}
      </div>
      <Footer />
    </div>
  );
};

export default Post;
