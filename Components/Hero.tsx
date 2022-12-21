import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import DP from '../assets/DP.jpg'
import Link from 'next/link'


type Props = {}

function Hero({}: Props) {
  
  const [text, count] = useTypewriter({
    words: ["Hi, The Name is Shova","Girl-who-loves-Caffeine","<ButLovesToCodeMore/>"],loop: true, delaySpeed:2000,
  })
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles/>
      <img
      className='relative w-32 h-32 mx-auto rounded-full'
      src='https://cdn.tutsplus.com/cdn-cgi/image/width=360/psd/uploads/legacy/0613_Minion/final.jpg' alt="" />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
         
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>

          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>

          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>

        </div>
      </div>
      

    </div>
  )
}

export default Hero