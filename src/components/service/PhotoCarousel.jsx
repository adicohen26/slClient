import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination ,Keyboard} from "swiper";


function PhotoCarousel(props){
    return <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination,Keyboard]}
        pagination={{clickable: true}}
        className="swiper-photo-container"
        keyboard={{enabled: true}}
      >
        <SwiperSlide ><img className="swiper-photo" src="../../images/about-img.jpg" /></SwiperSlide>
        <SwiperSlide ><img className="swiper-photo" src="../../images/desertWithBackground.jpg" /></SwiperSlide>
        <SwiperSlide ><img className="swiper-photo" src="../../images/about-img.jpg" /></SwiperSlide>
        <SwiperSlide ><img className="swiper-photo" src="../../images/desertWithBackground.jpg" /></SwiperSlide>
      </Swiper>
    </>
}



export default PhotoCarousel;