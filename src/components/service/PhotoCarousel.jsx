import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination ,Keyboard, Autoplay} from "swiper";


function PhotoCarousel(props){
  console.log(props);
    return <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
              shadow= {false}
        modules={[EffectCards, Pagination,Keyboard, Autoplay]}
        pagination={{clickable: true}}
        className="swiper-photo-container"
        keyboard={{enabled: true}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {props.data.map((img,index) => <SwiperSlide key={index}><img className="swiper-photo" src={props.imgPath+img}  /></SwiperSlide>)}
      </Swiper>
    </>
}



export default PhotoCarousel;