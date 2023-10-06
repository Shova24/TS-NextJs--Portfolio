import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} //if you don't want it to happen again and again
        transition={{ duration: 1.2 }}
        src="data:image/jpeg;base64,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"
        className="-mb-20 md:mb-0 flex-shirnk-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
        <p className="text-base">
           Hello World !!! <br/>
           I am Shova. Finished my BSc in Software Engineering from Daffodil International University with the 
           <span className=" text-amber-400"> CGPA of 3.97</span>
           . My journey of programming began with C in my 2nd semester of varsity, where I started solving problems. Solved more than <span className=" text-amber-400">350 problems on various platform</span>. With time, I shifted towards web development and now I am working as A Trainee Software Engineer at V2 Technologies LTD. 
        </p>
      </div>
    </motion.div>
  );
}

export default About;
