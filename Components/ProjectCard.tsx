import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const projects = [
  //   {
  //     id: 1,
  //     title: "eBabyCare",
  //     image: "",
  //     tech: ["React, Mui, Firebase, Mongodb Atlas"],
  //     git: "",
  //     deploy: "",
  //   },
  {
    id: 2,
    title: "FeedBack App",
    image: "/assets/feedback.png",
    tech: ["React JS"],
    git: "https://github.com/Shova24/feedback_app",
    deploy: "",
  },
  {
    id: 3,
    title: "Coffee Queen",
    image: "/assets/coffee.png",
    tech: ["React JS"],
    git: "https://github.com/Shova24/Coffee-Queen",
    deploy: "",
  },
];

function ProjectCard({}: Props) {
  return (
    <>
      {projects.map((item) => (
        <article
          key={item.id}
          className="flex flex-col rounded-lg items-center space-y-5 flex-shirk-0 
          w-[300px] md:w-[300px] xl:w-[400px]   h-[400px] md:h-[400px] xl:h-[400px] 
          snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 "
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <div className="w-[300px] md:w-[300px] xl:w-[300px]   h-[250px] md:h-[250px] xl:h-[250px] overflow-hidden">
            <Image
              src={item.image}
              width={300}
              height={150}
              alt="Picture"
              style={{ height: "150px" }}
            />
          </div>

          <p>
            <Link href={item.git}>
              <span className="text-xl">Git link </span>
            </Link>
          </p>
        </article>
      ))}
    </>
  );
}

export default ProjectCard;
