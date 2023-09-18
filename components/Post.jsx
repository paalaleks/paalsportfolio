import { LuArrowLeft } from 'react-icons/lu';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const Post = ({ post, blocks }) => {
  // console.log(blocks.map((block) => block.type));
  // blocks.map((block) => console.log(block));
  // console.log(html);

  // console.log(post);

  return (
    <div className="relative grid grid-flow-row min-h-screen">
      <div className="max-w-3xl mx-auto ">
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
        <SectionHeader sectionName={post.properties.Name.title[0].plain_text} />

        <div className="px-8 relative pb-10">
          <p className="text-color2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolores illo quidem nostrum nobis vero, earum voluptate? Debitis
            dolor aliquam delectus odit laboriosam! Dolor quibusdam
            reprehenderit debitis, illum officiis enim?
          </p>
          <p className="text-color2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolores illo quidem nostrum nobis vero, earum voluptate? Debitis
            dolor aliquam delectus odit laboriosam! Dolor quibusdam
            reprehenderit debitis, illum officiis enim?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
