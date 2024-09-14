import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 ">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Hubnex Labs"
            subTitle="Front-end Developer(Internship)  - (2024 - 2024)"
            result="Haryana"
            des="Hubnex Labs hiring process is an important part of our culture. Hubnex Labs care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Vigo Technoworld Pvt.Ltd"
            subTitle="Fullstack Devloper(Internship)  - (2023 - 2024)"
            result="Nagpur"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Vigo Technoworld Pvt.Ltd"
            subTitle="Fullstack Devloper(Internship)  - (2023 - 2024)"
            result="Nagpur"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20022 - 2023</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" ARC Technologies And Intitutions"
            subTitle="ARC Technologies (2023 - 2024)"
            result="Nagpur"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Web Developer (2022 - 2023)"
            result="Nagpur"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
       <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Web Developer (2022 - 2023)"
            result="Nagpur"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
