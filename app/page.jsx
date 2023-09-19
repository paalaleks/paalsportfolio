import Image from 'next/image';
import Naviagtion from '../components/Naviagtion';
import Gallery from '../components/Gallery';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SectionHeader from '../components/SectionHeader';
import BlogList from '../components/BlogList';
import Shadow from '../components/Shadow';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('/roses.png')] bg-repeat-y h-full w-14 z-20 md:bg-[length:53px_155.5px] bg-[length:42.4px_124.4px] absolute top-0 left-0 bg-left-top md:bg-left-bottom" />

        <section className="min-h-screen  flex flex-col justify-center items-center max-w-5xl mx-auto z-20 relative pl-14 pr-12">
          <Image
            className="hidden sm:block pl-2"
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

          <p className="font-sans text-color2 mt-4 text-lg pl-4 text-center max-w-3xl">
            Howdy! Please take a look at my projects and feel free to reach out
            if you want to get to know me and learn about my work.
          </p>
          <Naviagtion />
        </section>
        <Shadow
          positioned={'bottom-0'}
          gradientDirection={'bg-gradient-to-t'}
          visible={'block md:hidden'}
        />
      </div>
      <div className="relative ">
        <div className="bg-[url('/roses.png')] bg-repeat-y h-full w-14 z-20 md:bg-[length:53px_155.5px] bg-[length:42.4px_124.4px] absolute top-0 left-0 bg-left-top hidden md:block" />
        <section
          id="artwork"
          className="pb-1 relative z-20 bg-color4 md:bg-transparent"
        >
          <SectionHeader
            sectionName="Artwork"
            paddingTop="pt-16"
            paddingBottom="pb-12"
          />

          <Gallery />

          <Shadow
            positioned={'-bottom-5'}
            gradientDirection={'bg-gradient-to-b'}
            visible={'block md:hidden'}
          />
        </section>

        <section id="projects" className="px-4 md:px-16 z-0 relative bg-color3">
          <SectionHeader
            sectionName="Projects"
            paddingTop="pt-16"
            paddingBottom="pb-12"
          />
          <Projects />
        </section>
        <section id="blog" className="px-4 md:px-16 mx-auto bg-color3">
          <SectionHeader
            sectionName="Blog"
            paddingTop="pt-16"
            paddingBottom="pb-12"
          />
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
        <SectionHeader
          sectionName="Contact"
          paddingTop="pt-16"
          paddingBottom="pb-12"
        />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
