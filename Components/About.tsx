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
        src="https://cdn.tutsplus.com/cdn-cgi/image/width=360/psd/uploads/legacy/0613_Minion/final.jpg"
        className="-mb-20 md:mb-0 flex-shirnk-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
        <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum, unde nam ex dolor mollitia labore atque asperiores maiores commodi corrupti, pariatur architecto est ipsum quas nesciunt expedita eligendi reiciendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum, unde nam ex dolor mollitia labore atque asperiores maiores commodi corrupti, pariatur architecto est ipsum quas nesciunt expedita eligendi reiciendis!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
