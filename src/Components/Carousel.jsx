import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

import '../css/swiper.css'

// import required modules
import { Scrollbar } from 'swiper/modules'

export default function Carousel () {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true
        }}
        modules={[Scrollbar]}
        className='mySwiper'
      >
        
        <SwiperSlide>
          <img className='w-full' src='https://i.ibb.co/ZccVRkc/image.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-contain' src='https://i.ibb.co/WGCq5g9/image.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/2y70wYY/image.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/8dDDsCt/image.png' alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
