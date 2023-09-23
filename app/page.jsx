import Image from 'next/image';
import Gallery from '../components/Gallery';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SectionHeader from '../components/SectionHeader';
import BlogList from '../components/BlogList';
import Shadow from '../components/Shadow';
import Footer from '@/components/Footer';
import LinkCard from '@/components/LinkCard';
import { FaPaintBrush, FaPortrait, FaBlog, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  openGraph: {
    title: `Paal's Portfolio`,
    description:
      'A window into my world, ideas, and creations through the years.',
    url: 'https://www.paalsportfolio.no/',
    siteName: `Paal's Portfolio`,
    images: [
      {
        url: process.env.URL + '/paal.svg',
        width: 800,
        height: 600,
      },
      {
        url: process.env.URL + '/paal.svg',
        width: 1800,
        height: 1600,
        alt: 'Telemark me',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  const cards = [
    {
      icon: <FaPaintBrush className="mr-2" fontSize={14} />,
      title: 'Artwork',
      description: 'Artwork over the years.',
      href: '/#artwork',
    },
    {
      icon: <FaPortrait className="mr-2" fontSize={14} />,
      title: 'Projects',
      description: 'Projects in web development.',
      href: '/#projects',
    },
    {
      icon: <FaBlog className="mr-2" fontSize={14} />,
      title: 'Blog',
      description: 'Thoughts and ideas.',
      href: '/#blog',
    },
    {
      icon: <FaEnvelope className="mr-2" fontSize={14} />,
      title: 'Contact',
      description: '',
      href: '/#contact',
    },
  ];

  return (
    <div>
      <section className="z-20 relative ">
        <div className="bg-[url('/roses.png')] bg-repeat-y h-full w-14 z-20 md:bg-[length:53px_155.5px] bg-[length:42.4px_124.4px] absolute top-0 left-0 bg-left-top md:bg-left-bottom" />
        <div className=" max-w-5xl mx-auto pl-10 pr-8 sm:px-12 flex justify-center flex-col items-center xs:min-h-screen pt-12 pb-16">
          <Image
            className="hidden sm:block pl-4"
            width={716}
            height={245.5}
            src={'/paal.svg'}
            alt="Paal Aleksander hero image XL"
          />
          <Image
            className="block sm:hidden"
            width={445}
            height={207}
            src={'/paal_2.svg'}
            alt="Paal Aleksander hero image"
          />

          <p className="font-sans text-color2 mt-2 text-lg pl-4 text-center max-w-3xl">
            Howdy! I&apos;m Paal Aleksander, a web developer and artist from
            Telemark, Norway. I&apos;m a trained front-end developer, but I also
            tend to want to develop full-stack apps. Right now I&apos;m working
            in{' '}
            <span className="inline-flex whitespace-nowrap w-fit rounded-full bg-eerie_black-500 px-2.5 py-0.5 text-sm text-color1">
              Next.js
            </span>
            <span className="inline-flex whitespace-nowrap w-fit rounded-full bg-eerie_black-500 px-2.5 py-0.5 text-sm text-color1">
              Tailwind
            </span>
            <span className="inline-flex whitespace-nowrap w-fit rounded-full bg-eerie_black-500 px-2.5 py-0.5 text-sm text-color1">
              Firebase
            </span>
            , but I&apos;m agnostic to the tech stack as long as it&apos;s fun
            and I can learn something new.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 mt-4 pl-4 gap-2  mx-auto">
            {cards.map((card) => {
              return (
                <LinkCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                />
              );
            })}
          </div>
        </div>
        <Shadow
          positioned={'bottom-0'}
          gradientDirection={'bg-gradient-to-t'}
          visible={'block md:hidden'}
        />
      </section>

      <div className="relative ">
        <div className="bg-[url('/roses.png')] bg-repeat-y h-full w-14 z-20 md:bg-[length:53px_155.5px] bg-[length:42.4px_124.4px] absolute top-0 left-0 bg-left-top hidden md:block" />
        <section
          id="artwork"
          className="pb-1 relative z-20 bg-color4 md:bg-transparent"
        >
          <SectionHeader sectionName="Artwork" />

          <Gallery />

          <Shadow
            positioned={'-bottom-5'}
            gradientDirection={'bg-gradient-to-b'}
            visible={'block md:hidden'}
          />
        </section>

        <section id="projects" className="px-4 md:px-16 z-0 relative bg-color3">
          <SectionHeader sectionName="Projects" />
          <Projects />
        </section>
        <section id="blog" className="px-4 md:px-16 mx-auto bg-color3">
          <SectionHeader sectionName="Blog" />
          <BlogList />
          <div className="h-20"></div>
        </section>
        <Shadow
          positioned={'bottom-0'}
          gradientDirection={'bg-gradient-to-t'}
          visible={''}
        />
      </div>

      <section id="contact" className="min-h-screen relative grid bg-color4 ">
        <SectionHeader sectionName="Contact" />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
