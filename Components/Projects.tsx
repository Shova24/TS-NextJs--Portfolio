import React from "react";
import CertificateCard from "./CertificateCard";
import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  return (
    <>
      <div className="relative flex flex-col items-center h-screen max-w-full px-5 mx-auto overflow-hidden text-left md:flex-row justify-evenly">
        <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;
