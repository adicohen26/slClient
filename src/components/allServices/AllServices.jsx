import React from "react";
import SubjectCard from "./SubjectCard";
import Header from "../Header";

function AllServices(){
    return<div className="section-container all-services">
        <SubjectCard name="קורסים" img="toolsBanner.png" link="/services/course"/>
        <div className="small-cards-container">
           <SubjectCard name="סדנא משלבת הרצאה" img="eggBanner.png" link="/services/workshop" />
            <SubjectCard name="דוכני בוטיק" img="woodTrayBanner.png" link="/services/boutiqueBooth" />
        </div>
        <div className="small-cards-container row-two">
            <SubjectCard name="סדנאות" img="panBanner.png" link="/"/>
            <SubjectCard name="הרצאות" img="booksBanner.png" link="/" />
        </div>
</div>
}

export default AllServices;