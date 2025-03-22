import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Shova from './../public/assets/Shova.png';

function About() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}

      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} //if you don't want it to happen again and again
        transition={{ duration: 1.2 }}
        className="-mb-20 pt-[2rem] md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          src={Shova}
          alt="Shova"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="px-0 space-y-10 md:px-10 pt-[2rem]">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
        <p className="text-base">
          Hello World !!! <br />
          I am Shova. Finished my BSc in Software Engineering from Daffodil International University with the
          <span className=" text-amber-400"> CGPA of 3.97</span>
          . My journey of programming began with C in my 2nd semester of varsity, where I started solving problems. Solved more than <span className=" text-amber-400">300 problems on various platform</span>. With time, I shifted towards web development and now I am working as A Software Engineer at <b>CoDesign</b> .
        </p>
      </div>
    </motion.div>
  );
}

export default About;
