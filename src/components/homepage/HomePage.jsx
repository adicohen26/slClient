import React from "react";
import FaceVideo from "./FaceVideo";
import About from "./About";
import Teaser from "./Teaser";
import Testimonials from "./Testimonial";
import useFetch from "../../useFetch";
import AllServices from "../allServices/AllServices.jsx";
// import "swiper/css";
// import "swiper/css/pagination";
import Newsletter from "./Newsletter";
import Loading from "../Loading";


function HomePage(){
    const {data, isPending, error}=useFetch(process.env.REACT_APP_BASE_URL);

   return (<div>
        {isPending && <Loading />}
        <FaceVideo />
        <About />
        {data && <Teaser id={"services"} preview={data.previewOptions}/>}
        <AllServices />
        {data && <Testimonials reviews={data.reviews} />}
        <Newsletter />
    </div>)
}

export default HomePage;
