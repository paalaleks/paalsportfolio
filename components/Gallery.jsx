import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Link from 'next/link';

const Gallery = () => {
  const images = [
    {
      url: '/artwork_airbaloon.png',
      alt: 'Luft ballong',
      width: 1528,
      height: 2095,
    },
    {
      url: '/artwork_Prøvelser.png',
      alt: 'Prøvelser',
      width: 1528,
      height: 1047.5,
    },
    {
      url: '/artwork_Ungløve_2.png',
      alt: 'Ung løve',
      width: 1528,
      height: 1047.5,
    },

    {
      url: '/artwork_detmågåfremmover.png',
      alt: 'Det må gå fremmover',
      width: 1528,
      height: 1047.5,
    },
    {
      url: '/artwork_little_delights.png',
      alt: 'Små gleder',
      width: 1528,
      height: 1047.5,
    },
    {
      url: '/artwork_Ikke_Langt_Borte.png',
      alt: 'Ikke langt borte',
      width: 1528,
      height: 2095,
    },
    {
      url: '/artwork_The_Pearl.png',
      alt: 'Perlen',
      width: 1528,
      height: 2095,
    },
    {
      url: '/artwork_Study_4.png',
      alt: 'Dype studier',
      width: 1528,
      height: 1047.5,
    },
    {
      url: '/artwork_hund_og_meg.png',
      alt: 'Hund og meg',
      width: 1528,
      height: 1047.5,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 group max-w-6xl mx-auto md:px-16">
        {images.map((image) => {
          return (
            <Link
              href={`image/${image.url}?showDialog=y`}
              key={image.url}
              className={`${image.height > image.width ? 'row-span-2' : ''}`}
            >
              <Image
                width={image.width}
                height={image.height}
                className={`cursor-pointer transition duration-300 ease-in-out hover:brightness-110 object-cover h-full`}
                src={image.url}
                alt={image.alt}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
