import React from "react";
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { margin } from "@mui/system";
import { BorderBottomOutlined } from "@mui/icons-material";

function SubjectCard(props){
  const imgUrl="../../images/services/"+props.img;
  let cssClasses="";

    return (<Card className="all-cards-container">
    <CardActionArea component={Link} to={props.link} className="subject-card" >
      <CardMedia
        component="img"
        height="250rem"
        background-color="#D4E1D8"
        image={imgUrl}
        alt="img"
      />
      <div className="overlay">
      <h1>{props.name}</h1>
      </div>
      
    </CardActionArea>
  </Card>);
  


}

export default SubjectCard;