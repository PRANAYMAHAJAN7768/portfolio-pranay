import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Programmer.","Professional Coder.", "Frontend Developer.",  "Software Engineer.",  "Competitive Programmer.", "Freelancer.", "Open Source Contributor."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className=" text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Pranay Mahajan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm quite excited about web development, particularly with the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
        I bring a combination of creativity, problem-solving abilities, 
        and a strong desire to learn and grow in the technology industry. 
        My objective is to master the MERN stack, which is motivated by my desire to create unique solutions and keep up with the most recent web development trends.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner