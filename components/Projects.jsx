import Card from './Card';

const Projects = () => {
  const projects = [
    {
      title: 'Rainy Days',
      image: '/rainydays.png',
      alt: 'Rainy Days',
      width: 772,
      height: 772,
      text: 'This was my first school project and is made in pure html, css and javascript.',
      tag: [{ name: 'Javascript' }, { name: 'Html' }, { name: 'css' }],
      link: 'https://rainydays-3v2ft42m5-paalaleks.vercel.app/',
    },
    {
      title: 'Witness the fitness',
      image: '/witnessthefitness.png',
      alt: 'Rainy Days',
      width: 772,
      height: 772,
      text: `This project was made later in the same semester and is also made in
    pure html, css and javascript. I used parcel as a bundler for this
    project.(At the moment the project is down)`,
      tag: [{ name: 'Javascript' }, { name: 'Html' }, { name: 'scss' }],
      link: 'https://splendid-selkie-124d56.netlify.app/',
    },
    {
      title: `Bever'n`,
      image: '/iphoneandipda.png',
      alt: 'Bevern for ipad and iphone',
      width: 772,
      height: 772,
      text: `A friend needed a webpage and a logo. We use Notion to make it super easy to upadate the job logg on the go. The webpage is made with Next.js and Tailwind`,
      tag: [{ name: 'Notion' }, { name: 'Next.js' }, { name: 'Tailwind' }],
      link: 'https://www.bevern.no/',
    },
    {
      title: `www.b-d.app`,
      image: '/bd.png',
      alt: 'b-d.app',
      width: 772,
      height: 772,
      text: `This page is quite advanced and is made in Next.js, Firebase and Tailwind. This alows us to pair qr codes witha user and add book and author information to each qr. Now your friend can just scan the qr and initaite a book borrow. Everyone can have their own library and borrow books from each other.`,
      tag: [{ name: 'Firebse' }, { name: 'Next.js' }, { name: 'Tailwind' }],
      link: 'https://www.b-d.app/',
    },
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-8 gap-x-4 max-w-3xl mx-auto">
      {projects.map((project) => {
        return (
          <Card
            key={project.title}
            href={project.link}
            alt={project.alt}
            src={project.image}
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
