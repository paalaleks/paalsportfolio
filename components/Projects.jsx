import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Rainy Days',
      url: '/rainydays.png',
      alt: 'Rainy Days',
      width: 772,
      height: 772,
      text: 'This was my first school project and is made in pure html, css and javascript.',
      tag: ['Html', 'CSS', 'Javascript'],
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
      tag: ['Html', 'SCSS', 'Javascript'],
      link: 'https://splendid-selkie-124d56.netlify.app/',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-8 gap-x-4 max-w-3xl mx-auto">
      {projects.map((project) => {
        return (
          <Link
            href={project.link}
            className="cursor-pointer "
            key={project.title}
          >
            <Image
              alt="project 1"
              width={project.width}
              height={project.height}
              src={project.url}
              className="object-cover"
            />
            <h2>{project.title}</h2>
            <p className="text-color2">
              <span className="mr-1">{project.text}</span>
              {project.tag.map((tag, index) => {
                return (
                  <span
                    className={`inline-flex whitespace-nowrap w-fit rounded-full bg-eerie_black-500 px-2.5 py-0.5 text-xs text-color1`}
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
