import React, { useState } from "react";
import useFetch from "../../useFetch";
import { useParams , useLocation} from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Popup from "./Popup";
import { useSpring, animated } from 'react-spring';
import Header from "../Header";
import Loading from "../Loading";
import LectureCard from "./LectureCard";
import { useEffect } from "react";



function Service(props){
    const { service } = useParams();
    const url=process.env.REACT_APP_BASE_URL+"services/"+service;
    const {data,isPending,error}=useFetch(url);
    const [isOpen,setIsOpen]=useState(false);
    const [selectedCard, setSelectedCard]=useState(""); 

    function useQuery() {
      const { search } = useLocation();
      return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    // get the id of the service that needed to be open by the param send from the url
    const query=useQuery();
    const productId=query.get("productId");
    
    // open a pop up by param id value 
    useEffect(() => {
      if(productId){
        if(data){
          const cardValue=data.filter(dataInfo => dataInfo._id.toString() == productId)[0];
          openPopup(cardValue);
          console.log(cardValue);
        }
      }
    },[data])

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

    return <div className="body-container">
        {isPending && <Loading />}
        {data &&<Header heading={data[0].typeName} subHeading="" btnTitle="חזרה לכל החוויות" link="/services"/>}
        <div className="service-card-container section-container">
            {data && data[0].type!=="lecture" && data[0].type!=="foodWorkshop" && data.map((data,index) => <ServiceCard key={index} data={data} id={data.name} imgPath={"../../images/"+data.type+"/"} openPopup={openPopup}/>)}
            {data && (data[0].type==="lecture" || data[0].type==="foodWorkshop") && data.map((data,index) => <LectureCard key={index} data={data} id={data.name} />)}
        </div>
        
        {/* {data && data.map((dataInfo) => {dataInfo._id.toString() == productId ? <Popup imgPath={"../../images/"+data[0].type+"/"} isOpen={true} setIsOpen={setIsOpen} selectedCard={dataInfo} animation={animation}/> :null})} */}
        {/* {data && setAllData(data.map((dataInfo) => {dataInfo._id.toString() == productId ? return dataInfo  :null}))} */}
        {/* {data && setSelectedCard(data.filter(dataInfo => dataInfo._id.toString() == productId))} */}
        {/* {data && data.map((dataInfo) => {dataInfo._id.toString() == productId ? SetAllData(dataInfo)  :null})} */}
        {/* {data && data.map((dataInfo) => {
          console.log(dataInfo._id.toString() == productId)
          console.log(productId);
          })} */}
        {/* {data && data.map((dataInfo,id) => {data._id === id && <Popup imgPath={"../../images/"+data[0].type+"/"} isOpen={isOpen} setIsOpen={setIsOpen} selectedCard={dataInfo} animation={animation}/>})} */}
        {/* {data && <Popup imgPath={"../../images/"+data[0].type+"/"} isOpen={isOpen} setIsOpen={setIsOpen} selectedCard={getById(data, id)} animation={animation}/>} */}
        {(data && isOpen) && <Popup imgPath={"../../images/"+data[0].type+"/"} isOpen={isOpen} setIsOpen={setIsOpen} selectedCard={selectedCard} animation={animation}/>}
    </div>
}

export default Service;
