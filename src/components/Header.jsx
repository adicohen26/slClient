import React from "react";
import Fab from '@mui/material/Fab';
import { createTheme } from '@mui/material/styles';

function Header(props){
    const theme3 = createTheme({
        palette: {
          primary: {
            main: '#3B5B66',
            contrastText: '#eff4f6'
          },
          secondary: {
            main: '##eff4f6',
            contrastText: '#3B5B66'
          },
        },
      }
      );
    return <div className="header">
        <h2 className="darkHeading mainHeading">{props.heading}</h2>
        <div className="emphasis-container">
          <span className="emphasis">
            <h3 className="mainHeading">{props.subHeading}</h3>
          </span>
        </div>
        <h3 className="darkHeading mainHeading header-sub-heading">{props.subHeading}</h3>

        {/* {props.btnTitle && <Fab variant="extended" color="secondary" size="large" theme={theme3} type="submit"> {props.btnTitle}</Fab>} */}
        {props.btnTitle && <a href={props.link} className="darkHeading header-link"> {props.btnTitle}</a>}
    </div>
}

export default Header;