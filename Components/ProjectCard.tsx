import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const certifications = [
  {
    id: 1,
    image: "/assets/cer.jpg",
    link: "/",
    title: " Appreciation for achieving highest CGPA : Summer 2019",
  },
  {
    id: 2,
    image: "/assets/4th.png",
    link: "https://toph.co/c/4th-diu-swe-intra-2019-j/standings",
    title:
      "4th in 4th DIU-SWE Intra Department Programming Contest, Summer 2019 (Top 3%)",
  },
  {
    id: 3,
    image: "/assets/9th.jpg",
    link: "https://algo.codemarshal.org/contests/diu_iugpc_19",
    title:
      "9th in DIU Intra University Girls Programming Contest 2019 (Top 6%)",
  },
  {
    id: 4,
    image: "/assets/12th.png",
    link: "https://toph.co/c/3rd-diu-swe-intra-2018-j/standings",
    title:
      "12th in 3rd DIU-SWE Intra Department Programming Contest, Spring 2019 (Top 11%)",
  },
];

const projects = [
  {
    id: 1,
    title: "eBabyCare",
    image: "",
    tech: ["React, Mui, Firebase, Mongodb Atlas"],
    git: "",
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
          <h3>{item.title}</h3>
          <div className="w-[300px] md:w-[300px] xl:w-[300px]   h-[250px] md:h-[250px] xl:h-[250px] overflow-hidden">
            <Image
              src={item.image}
              width={300}
              height={150}
              alt="Picture"
              style={{ height: "150px" }}
            />
          </div>
          <p className="font-light ">{item.title}</p>
        </article>
      ))}
    </>
  );
}

export default ProjectCard;
