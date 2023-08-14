import React from "react";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shirk-0 w-[500px] md:w-[900px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 mx-auto rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"

        src="https://cdn.tutsplus.com/cdn-cgi/image/width=360/psd/uploads/legacy/0613_Minion/final.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Trainee Software Engineer</h4>
        <p className="mt-1 text-2xl font-bold">V2 Technologies</p>
        <div className="flex my-2 space-x-2">
          
        <Icon  icon="vscode-icons:file-type-js-official" className='w-10 h-10 rounded-full'/>
        <Icon  icon="skill-icons:css" className='w-10 h-10 rounded-full'/>
        <Icon  icon="skill-icons:html" className='w-10 h-10 rounded-full'/>
        <Icon  icon="vscode-icons:file-type-sql" className='w-10 h-10 rounded-full'/>
        </div>
        <p>Started work...-Ended...</p>
        <ul className="ml-5 space-y-4 text-lg list-disc">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
