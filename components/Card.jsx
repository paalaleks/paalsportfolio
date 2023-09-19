import Link from 'next/link';
import Image from 'next/image';

export default function Card({ href, key, src, alt, name, description, tags }) {
  return (
    <Link href={href} key={key} className="cursor-pointer group">
      <Image
        width={1200}
        height={1200}
        src={src}
        className="group-hover:brightness-105 transition duration-300 ease-in-out"
        alt={alt}
      />

      <div className="text-color2 px-4 pb-4 pt-2 mt-2 group-hover:shadow group-hover:bg-eerie_black-500 group-hover:bg-opacity-40 transition duration-300 ease-in-out">
        <h2 className="text-color1 m-0 p-0">{name}</h2>
        <span className="mr-1">{description}</span>

        {tags.map((tag) => {
          return (
            <span
              className="inline-flex whitespace-nowrap w-fit rounded-full bg-eerie_black-500 px-2.5 py-0.5 text-xs text-color1"
              key={tag.id}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </Link>
  );
}
