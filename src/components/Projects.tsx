import Card from "./Card";
import { Fragment } from "react";
const Projects = () => {
  return (
    <>
      <h1 className="mt-[80px] mb-[60px] text-center text-5xl font-semibold">Projects</h1>
      <div className="bg-white pb-48 flex justify-around">
        <Card>
          <h1 className="pb-4 text-xl font-semibold">DNA Tester</h1>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="mb-4 item-center rounded-[3px]" />
          <p>Knuth-Morris-Pratt dan Boyer-Moore untuk String Matching, algoritma Longest Common Subsequence untuk menghitung tingkat similaritas, serta Regular Expression untuk filter pada pencarian dan sanitasi input.</p>
          <p className="mt-5 text-sm font-bold tracking-widest">ReactJS Node.js PostgreSQL</p>
        </Card>
        <Card>
          <h1 className="pb-4 text-xl font-semibold">DNA Tester</h1>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="mb-4 item-center rounded-[3px]" />
          <p>Knuth-Morris-Pratt dan Boyer-Moore untuk String Matching, algoritma Longest Common Subsequence untuk menghitung tingkat similaritas, serta Regular Expression untuk filter pada pencarian dan sanitasi input.</p>
          <p className="mt-5 text-sm font-bold tracking-widest">ReactJS Node.js PostgreSQL</p>
        </Card>
        <Card>
          <h1 className="pb-4 text-xl font-semibold">DNA Tester</h1>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className="mb-4 item-center rounded-[3px]" />
          <p>Knuth-Morris-Pratt dan Boyer-Moore untuk String Matching, algoritma Longest Common Subsequence untuk menghitung tingkat similaritas, serta Regular Expression untuk filter pada pencarian dan sanitasi input.</p>
          <p className="mt-5 text-sm font-bold tracking-widest">ReactJS Node.js PostgreSQL</p>
        </Card>
      </div>
    </>

  )
};

export default Projects;