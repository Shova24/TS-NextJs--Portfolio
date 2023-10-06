import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const skills = [
  {
    id: 7,
    logo: "/assets/skills/html.png",
    name: "HTML",
  },
  {
    id: 8,
    logo: "/assets/skills/c.png",
    name: "C",
  },
  {
    id: 9,
    logo: "/assets/skills/js.png",
    name: "Javascript",
  },
  {
    id: 10,
    logo: "/assets/skills/python.jpg",
    name: "Python",
  },
  {
    id: 11,
    logo: "/assets/skills/git.png",
    name: "Git",
  },
  {
    id: 1,
    logo: "/assets/skills/sql.png",
    name: "SQL",
  },
  {
    id: 2,
    logo: "/assets/skills/react.png",
    name: "React JS",
  },
  {
    id: 3,
    logo: "/assets/skills/nextjs.png",
    name: "Next JS",
  },
  {
    id: 4,
    logo: "/assets/skills/ant.jpg",
    name: "Ant Design",
  },
  {
    id: 5,
    logo: "/assets/skills/mui.png",
    name: "Material UI",
  },
  {
    id: 6,
    logo: "/assets/skills/node.png",
    name: "Node JS",
  },
];

function Skill({ directionLeft }: Props) {
  return (
    <>
      {skills.map((item) => (
        <div className="relative flex cursor-pointer group" key={item.id}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={item.logo}
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale"
          />
          <div className="absolute opacity-0 group-hover:opacity-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-center text-black opacity-100">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skill;
