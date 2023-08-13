import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <div className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[2px] text-gray-500 text-2xl'>WorkExperience</h3>
        <div className='flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            {/* experience cards */}
            
        </div>
    </div>
  )
}

export default WorkExperience