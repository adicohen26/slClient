import React from "react";


function Customers(){
const counter=[1,2,3,4,5,6,7,8,9,10,11,12];
   return <div className="section-container">
    <h2 className="darkHeading mainHeading">הם מרוצים ,</h2>
    <h3 className="darkHeading mainHeading"> הגיע הזמן שגם אתם </h3>
  <div className="customers-container">
    {/* {counter.map((num) => <h1>"/images/customers/customer"+num+".png" alt="customer logo"</h1>)} */}
    {counter.map((num) => <img src={"/images/customers/customer"+num+".png"} alt="customer logo" />)}
    {/* {counter.map((num) => <img src="/images/customers/customer"+num+".png" alt="customer logo" />)} */}
    </div>

    </div>
}

export default Customers;