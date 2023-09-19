import Link from 'next/link';
import { FaBlog, FaEnvelope, FaPaintBrush, FaPortrait } from 'react-icons/fa';

const Naviagtion = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 mt-3 xs:mt-6 pl-4 gap-2">
      <Link
        className="w-full hover:bg-eerie_black-500 cursor-pointer items-center flex flex-col bg-opacity-40 bg-eerie_black-500 rounded-lg p-4 transition duration-300 ease-in-out "
        href="/#artwork"
      >
        <h3 className=" font-bold inline-flex items-baseline mb-1">
          <FaPaintBrush className="mr-2" fontSize={14} /> Artwork
        </h3>
        <p className="text-color2 text-sm text-center">
          Artwork over the years.
        </p>
      </Link>
      <Link
        href="/#projects"
        className="w-full hover:bg-eerie_black-500 cursor-pointer items-center flex flex-col bg-opacity-40 bg-eerie_black-500 rounded-lg p-4 transition duration-300 ease-in-out "
      >
        <h3 className="font-bold inline-flex items-baseline mb-1">
          <FaPortrait className="mr-2" fontSize={14} />
          Projects
        </h3>

        <p className="text-color2 text-sm text-center">
          Projects in web development.
        </p>
      </Link>

      <Link
        className="w-full hover:bg-eerie_black-500 cursor-pointer items-center flex flex-col bg-opacity-40 bg-eerie_black-500 rounded-lg p-4 transition duration-300 ease-in-out "
        href="/#blog"
      >
        <h3 className=" font-bold inline-flex items-baseline mb-1">
          <FaBlog className="mr-2" fontSize={14} /> Blog
        </h3>

        <p className="text-color2 text-sm text-center">Thoughts and ideas.</p>
      </Link>

      <Link
        className="w-full h-full hover:bg-eerie_black-500 cursor-pointer items-center flex flex-col justify-center bg-opacity-40 bg-eerie_black-500 rounded-lg p-4 transition duration-300 ease-in-out"
        href="/#contact"
      >
        <h3 className=" font-bold inline-flex items-center">
          <FaEnvelope className="mr-2" fontSize={14} /> Contact
        </h3>
      </Link>
    </div>
  );
};

export default Naviagtion;
