import React from "react";
import SubjectCard from "./SubjectCard";
import Header from "../Header";
import AllServices from "./AllServices";

function AllServicesPage(){
    return<div className="section-container body-container all-services" >
        <Header heading="כל החווית שלנו" subHeading="הגיע הזמן לבחור בעצמך"/>
        <AllServices />
</div>
}

export default AllServicesPage;