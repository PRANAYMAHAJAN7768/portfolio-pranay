import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievement= () => { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">20023 - 2024</p>
        <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Nagpur isn't easy."
          />
        <ResumeCard
            title="Vigo Technoworld Pvt.Ltd"
            subTitle="Fullstack Devloper(Internship)  - (2023 - 2024)"
            result="Nagpur"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Nagpur isn't easy."
          />
        </div>
      </div>
      {/* part Two */}

      <div >
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
        <h2 className="text-4xl font-bold"> Achievement</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Digital marketing"
            subTitle="ArhhaTechnologies And Intitutions"
            result="Success"
            des="Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
          />
          <ResumeCard
            title="Digital marketing"
            subTitle="ArhhaTechnologies And Intitutions"
            result="Success"
            des="Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
          />
          <ResumeCard
            title="Digital marketing"
            subTitle="ArhhaTechnologies And Intitutions"
            result="Success"
            des="Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Achievement