import React from "react";
import SubjectCard from "./SubjectCard";
import Header from "../Header";

function AllServices(){
    return<div className="section-container" >
        <Header heading="כל החווית שלנו" subHeading="הגיע הזמן לבחור בעצמך"/>
        <SubjectCard name="קורסים" img="desertNoBackgrong.png" link="/services/course"/>
        <div className="small-cards-container">
           <SubjectCard name="סדנא משלבת הרצאה" img="desertNoBackgrong.png" link="/services/workshop" />
            <SubjectCard name="דוכני בוטיק" img="desertNoBackgrong.png" link="/services/boutiqueBooth" />
        </div>
            <div className="small-cards-container">
            <SubjectCard name="סדנאות" img="desertNoBackgrong.png" link="/"/>
            <SubjectCard name="הרצאות" img="desertNoBackgrong.png" link="/" />
        </div>
</div>
}

export default AllServices;