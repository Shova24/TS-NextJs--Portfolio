

import ExperienceCard from './ExperienceCard';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { experience } from "../utils/exp";


type Props = {}

function WorkExperience({ }: Props) {
  return (
    <div className='relative flex flex-col items-center w-full min-h-screen px-10 mx-auto overflow-hidden text-left justify-evenly'>
      <h3 className='absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl'>WorkExperience</h3>



      <Swiper
        spaceBetween={20}
        className="w-full overflow-hidden rounded-xl"
        grabCursor={true}
        touchRatio={1}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
          320: {
            slidesPerView: 1.15, // Ensure mobile support
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.75,
            spaceBetween: 20,
          },
        }}

      >
        {experience.map((item, index) => (
          <SwiperSlide key={item.id} className="flex items-center justify-center h-full mt-5 space-x-5 snap-x snap-mandatory">
            <ExperienceCard experience={{ ...item, id: item.id.toString() }} index={index} />
          </SwiperSlide>
        ))}


      </Swiper>
    </div>
  )
}

export default WorkExperience