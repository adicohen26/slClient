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
        <h3 className="darkHeading mainHeading emphasis">{props.subHeading}</h3>
        {props.btnTitle && <Fab variant="extended" color="secondary" size="large" theme={theme3} type="submit"> {props.btnTitle}</Fab>}
    </div>
}

export default Header;