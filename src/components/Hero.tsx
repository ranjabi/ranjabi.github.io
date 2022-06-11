import { Fragment } from "react";

const Hero = () => {
  const profpic = require("./profile-picture.png");

  return (
    <div className="bg-tertiary flex">
      <div id="left" className="bg-secondary h-800 w-1/2">
        <div className="ml-[10rem] mt-[17rem]">
          <h1 className="text-4xl text-primary">Front-end <br /> Web Developer</h1>
          <p className="text-white">3rd year computer science student, <br /> gunpla builder
          </p>
        </div>
      </div>
      <div id="right" className="bg-primary flex justify-center h-800 w-1/2">
        <img src={profpic} alt="" className="rounded-[50%] h-[256px] w-[246px] mt-[205px] border-[1px] border-secondary p-[10px]" />
      </div>
    </div>
  )
};
export default Hero;