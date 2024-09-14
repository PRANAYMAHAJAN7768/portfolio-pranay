import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Post Graduate Diploma in Computer Application (PGDCA)"
            subTitle="Rashtrasant Tukadoji Maharaj Nagpur University (2022 - 2023)"
            result="6.1/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard 
            title="Bachelor of Science in Computer Science BSC(cs)"
            subTitle="Rashtrasant Tukadoji Maharaj Nagpur University, (2019 - 2022)"
            result="6.1/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          {/* <ResumeCard                              
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div >
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
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
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education