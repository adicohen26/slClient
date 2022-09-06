import React, { useState } from "react";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Popup from "./Popup";
import { useSpring, animated } from 'react-spring';
import Header from "../Header";

function Service(props){
    const { service } = useParams();
    const url=process.env.REACT_APP_BASE_URL+"/services/"+service;
    const {data,isPending,error}=useFetch(url);
    const [isOpen,setIsOpen]=useState(false);
    const [selectedCard, setSelectedCard]=useState("");
    
    function openPopup(cardInfo){
        setSelectedCard(cardInfo);
        setIsOpen(true);
    }
    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? `translateY(0%)` : `translateY(-80%)`
      });

    return <div className="section-container">
        
        {isPending && <h1>loading ..</h1>}
        {data &&<Header heading={data[0].typeName} subHeading="" btnTitle="חזרה לכל החוויות" link="/services"/>}
        <div className="service-card-container">
            {data && data.map((data,index) => <ServiceCard key={index} data={data} id={data.name} openPopup={openPopup}/>)}
        </div>
        {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} selectedCard={selectedCard} animation={animation}/>}
    </div>
}

export default Service;