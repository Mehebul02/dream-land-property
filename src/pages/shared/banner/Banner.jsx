import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 import slide1 from '../../../assets/slide1.jpg'
 import slide2 from '../../../assets/slide2.jpg'
 import slide3 from '../../../assets/slide3.jpg'
 import slide4 from '../../../assets/slide4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
               <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper lg:h-[500px]"
      >
    
        
        <SwiperSlide ><img  src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide ><img  src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide ><img  src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide ><img  src={slide4} alt="" /></SwiperSlide>
       
      
       
      </Swiper>
        </div>
    );
};

export default Banner;