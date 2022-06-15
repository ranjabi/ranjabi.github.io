import Card from './Card';
import { Fragment } from 'react';

const projectList = [
  {
    title: 'DNA Tester',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    desc: 'a Full Stack DNA Pattern Matching Website using String Matching and Regular Expression.',
    tech: 'ReactJS Node.js PostgreSQL',
    github: 'https://github.com/ranjabi/Tubes3_13520002',
    demo: 'https://dna-tester.netlify.app/',
  },
  {
    title: 'Image Compressor',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    desc: 'Image Compression Website using SVD Algorithm in Flask.',
    tech: 'Flask',
    github: 'https://github.com/ranjabi/Algeo02-20002',
    demo: '',
  },
  {
    title: 'ITB Nim Finder',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    desc: 'Web App to search ITB students based on their student ID, faculty, and major.',
    tech: 'ReactJS',
    github: 'https://github.com/ranjabi/itb-nim-finder',
    demo: '',
  },
  {
    title: 'My Emotions',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    desc: 'Web App to track your daily emotion.',
    tech: 'ReactJS',
    github: 'https://github.com/ranjabi/my-emotions',
    demo: '',
  },
  {
    title: 'To Do List',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    desc: 'To Do List Web App to track your activites.',
    tech: 'ReactJS',
    github: 'https://github.com/ranjabi/to-do-list',
    demo: '',
  }
];

const Projects = () => {
  return (
    <div className="container mt-16 md:mt-20 lg:mt-24">
      <h1 className="mb-12 text-center text-4xl font-semibold">Projects</h1>
      <div className="px-4 flex flex-wrap justify-center">
        {projectList.map((project) => {
          return <Card
          title={project.title}
          img={project.img}
          description={project.desc}
          tech={project.tech}
        ></Card>
        })}
      </div>
    </div>
  );
};

export default Projects;
