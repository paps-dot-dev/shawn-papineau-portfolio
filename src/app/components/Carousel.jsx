'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Scrollbar, Pagination } from 'swiper/modules'

import 'swiper/css/bundle'
import {
  SiAmazonaws,
  SiAngular,
  SiAstro,
  SiAwsamplify,
  SiFirebase,
  SiJavascript,
  SiMicrosoftazure,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiVuedotjs,
} from 'react-icons/si'
import { FaDatabase, FaReact } from 'react-icons/fa'

export default function Carousel() {
  return (
    <Swiper
      className='max-w-xl'
      scrollbar={{
        hide: true,
      }}
      loop={true}
      modules={[Autoplay, Scrollbar, Pagination]}
      spaceBetween={10}
      effect='coverflow'
      slidesPerView={2}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      parallax={true}
      centeredSlides={true}>
      <SwiperSlide className=' text-7xl mb-4 '>
        <SiJavascript className='mx-auto text-yellow-200' />
        <p className='text-lg text-center p-2 font-light '>Javascript</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiReact className='mx-auto text-blue-400' />
        <p className='text-lg text-center p-2 font-light '>React</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiNextdotjs className='mx-auto text-white' />
        <p className='text-lg text-center p-2 font-light '>Next</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiVuedotjs className='mx-auto text-green-400' />
        <p className='text-lg text-center p-2 font-light '>Vue</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiAngular className='mx-auto text-red-400' />
        <p className='text-lg text-center p-2 font-light '>Angular</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiAstro className='mx-auto text-orange-400' />
        <p className='text-lg text-center p-2 font-light '>Astro.js</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiSupabase className='mx-auto  text-emerald-400' />
        <p className='text-lg text-center p-2 font-light '>Supabase</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl  '>
        <FaDatabase className='mx-auto text-blue-500 ' />
        <p className='text-lg text-center p-2 font-light '>SQL</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiFirebase className='mx-auto  text-orange-400' />
        <p className='text-lg text-center p-2 font-light '>Firebase</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiMicrosoftazure className='mx-auto  text-blue-400' />
        <p className='text-lg text-center p-2 font-light '>Azure</p>
      </SwiperSlide>
      <SwiperSlide className='text-7xl '>
        <SiAmazonaws className='mx-auto  text-yellow-400' />
        <p className='text-lg text-center p-2 font-light '>AWS</p>
      </SwiperSlide>
    </Swiper>
  )
}
