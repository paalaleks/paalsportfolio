import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import Link from 'next/link';
import { SiNotion } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-lg w-full self-end pb-2 pt-8 xs:pt-0 text-color2">
      <div className="flex flex-wrap justify-evenly  items-center h-full px-4">
        <div className="flex justify-around w-28">
          <Link
            href={'https://www.linkedin.com/in/fullstakk/'}
            className="btn w-8 h-8 cursor-pointer"
          >
            <LuLinkedin fontSize={15} />
          </Link>
          <Link
            href={'https://github.com/paalaleks'}
            className="btn w-8 h-8 cursor-pointer"
          >
            <LuGithub fontSize={15} />
          </Link>
          <Link href={'mailto:paalaleks@hotmail.com'} className="btn w-8 h-8">
            <LuMail fontSize={15} />
          </Link>
        </div>
        <span className="text-xs text-color1 px-4">
          <span className="mr-2">©2023</span>
          Paal&apos;s Portfolio
        </span>
        <span className="inline-flex px-4 py-4">
          <span className="mr-3 text-dutch_white-800 text-xs">Built with</span>
          <SiNotion fontSize={16} className="text-dutch_white-800" />
        </span>
      </div>
    </footer>
  );
}
