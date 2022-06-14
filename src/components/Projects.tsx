import Card from './Card';
import { Fragment } from 'react';

const projectList = [
  {
    title: 'DNA Tester',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    description: 'Knuth-Morris-Pratt dan Boyer-Moore untuk String Matching, algoritma Longest Common Subsequence untuk menghitung tingkat similaritas, serta Regular Expression untuk filter pada pencarian dan sanitasi input.',
    tech: 'ReactJS Node.js PostgreSQL'
  },
];
const Projects = () => {
  return (
    <div className='container mt-16 md:mt-20 lg:mt-24'>
      {/* <h1 className="mt-[80px] mb-[60px] text-center text-5xl font-semibold"></h1> */}
      <h1 className="mb-12 text-center text-4xl font-semibold">
        Projects
      </h1>
      <div className="px-4 flex flex-wrap justify-center">
        <Card title={projectList[0].title} img={projectList[0].img} description={projectList[0].description} tech={projectList[0].tech}></Card>
        <Card title={projectList[0].title} img={projectList[0].img} description={projectList[0].description} tech={projectList[0].tech}></Card>
        <Card title={projectList[0].title} img={projectList[0].img} description={projectList[0].description} tech={projectList[0].tech}></Card>
      </div>
    </div>
  );
};

export default Projects;
