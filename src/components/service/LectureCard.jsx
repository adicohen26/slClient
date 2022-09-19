import React from "react";
import { Card, CardContent } from "@mui/material";

function LectureCard(props){
const cardInfo=props.data;
    console.log(props);
return <Card className="cardsParent">
    <CardContent>
        <h4 className="darkHeading">{cardInfo.name}</h4>
        <p className="darkHeading">{cardInfo.discription}</p>
    </CardContent>
</Card>
}

export default LectureCard;