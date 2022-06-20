import Card from './Card';
import { Fragment } from 'react';

const dnatesterimg = require('../assets/dnatester.png');
const myemotionsimg = require('../assets/myemotions.png');
const todolistimg = require('../assets/todolist.png')
const nimfinderimg = require('../assets/nimfinder.png')

const projectList = [
  {
    title: 'My Emotions',
    img: myemotionsimg,
    desc: 'Web App to track your daily emotion.',
    tech: 'ReactJS',
    github: 'https://github.com/ranjabi/my-emotions',
    demo: '',
  },
  {
    title: 'Nim Finder',
    img: nimfinderimg,
    desc: 'Web App to search ITB students based on their student ID, faculty, and major.',
    tech: 'ReactJS',
    github: 'https://github.com/ranjabi/itb-nim-finder',
    demo: '',
  },
  {
    title: 'To Do List',
    img: todolistimg,
    desc: 'To Do List Web App to track your activites.',
    tech: 'ReactJS',
    github: 'https://github.com/ranjabi/to-do-list',
    demo: '',
  },
  {
    title: 'DNA Tester',
    img: dnatesterimg,
    desc: 'DNA Pattern Matching Website using String Matching and Regular Expression.',
    tech: 'ReactJS Node.js PostgreSQL',
    github: 'https://github.com/ranjabi/Tubes3_13520002',
    demo: 'https://dna-tester.netlify.app/',
  },
];

const etc = [
  {
    title: 'Image Compressor',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    desc: 'Image Compression Website using SVD Algorithm in Flask.',
    tech: 'Flask',
    github: 'https://github.com/ranjabi/Algeo02-20002',
    demo: '',
  },
]

const Projects = () => {
  return (
    <div id="projects" className="container my-20 md:mt-20 lg:mt-24">
        <h1 className="mb-12 text-center text-4xl font-semibold">Projects</h1>
        <div className="px-4 flex flex-wrap justify-center">
          {projectList.map((project) => {
            return (
              <Card
                key={project.title}
                title={project.title}
                img={project.img}
                github={project.github}
                description={project.desc}
                tech={project.tech}
              ></Card>
            );
          })}
        </div>
    </div>
  );
};

export default Projects;
