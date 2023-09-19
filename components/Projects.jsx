import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';

const Projects = () => {
  const projects = [
    {
      title: 'Rainy Days',
      url: '/rainydays.png',
      alt: 'Rainy Days',
      width: 772,
      height: 772,
      text: 'This was my first school project and is made in pure html, css and javascript.',
      tag: [{ name: 'Javascript' }, { name: 'Html' }, { name: 'css' }],
      link: 'https://rainydays-3v2ft42m5-paalaleks.vercel.app/',
    },
    {
      title: 'Witness the fitness',
      url: '/witnessthefitness.png',
      alt: 'Rainy Days',
      width: 772,
      height: 772,
      text: `This project was made later in the same semester and is also made in
    pure html, css and javascript. I used parcel as a bundler for this
    project.`,
      tag: [{ name: 'Javascript' }, { name: 'Html' }, { name: 'scss' }],
      link: 'https://splendid-selkie-124d56.netlify.app/',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 max-w-3xl mx-auto">
      {projects.map((project) => {
        return (
          <Card
            key={project.title}
            href={project.link}
            alt={project.alt}
            src={project.url}
            name={project.title}
            description={project.text}
            tags={project.tag}
          />
        );
      })}
    </div>
  );
};

export default Projects;
