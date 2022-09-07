import React from "react";
import FaceVideo from "./FaceVideo";
import About from "./About";
import Teaser from "./Teaser";
import Testimonials from "./Testimonial";
import useFetch from "../../useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
// import AllServices from "../allservices/AllServices";
import AllServices from "../allServices/AllServices.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Newsletter from "./Newsletter";


function HomePage(){
    console.log("im in the homepage, trying to fetch this url " +process.env.REACT_APP_BASE_URL); 
    const {data, isPending, error}=useFetch(process.env.REACT_APP_BASE_URL);
   return (<div>
        {isPending && <h1>loading...</h1>}
        <FaceVideo />
        <About />
        {data && <Teaser id={"services"} preview={data.previewOptions}/>}
        <AllServices />
        {data && <Testimonials reviews={data.reviews} />}
        <Newsletter />
    </div>)
}

export default HomePage;
