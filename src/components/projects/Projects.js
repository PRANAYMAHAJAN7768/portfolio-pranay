import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Specialized in building social media clone platforms that replicate the core functionalities of popular networks with custom features. Proficient in creating scalable, user-friendly interfaces, real-time interactions, and secure backend infrastructures"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" E-commerce developer with expertise in building feature-rich, scalable online stores optimized for conversions. Skilled in integrating secure payment gateways, product management systems, and intuitive user interfaces that enhance shopping experiences. "
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Experienced in developing real-time chatting apps with seamless messaging, file sharing, and user authentication features. Proficient in building secure, scalable communication platforms with intuitive UI and low-latency performance. "
          src={projectThree}
        />
       <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Specialized in building social media clone platforms that replicate the core functionalities of popular networks with custom features. Proficient in creating scalable, user-friendly interfaces, real-time interactions, and secure backend infrastructures"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" E-commerce developer with expertise in building feature-rich, scalable online stores optimized for conversions. Skilled in integrating secure payment gateways, product management systems, and intuitive user interfaces that enhance shopping experiences. "
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Experienced in developing real-time chatting apps with seamless messaging, file sharing, and user authentication features. Proficient in building secure, scalable communication platforms with intuitive UI and low-latency performance. "
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects