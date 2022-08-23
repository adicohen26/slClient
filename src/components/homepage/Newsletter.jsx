import React from "react";
import Fab from '@mui/material/Fab';
import { createTheme } from '@mui/material/styles';

function Newsletter (){
    const theme2 = createTheme({
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
    return <div className="section-container newsletter">
        <div className="newsletter-container">
                <h3 className="lightHeading">הצעדים הקטנים יחד איתנו לחיים בריאים ומהנים</h3>
            <div>
                <form action="post" className="newsletter-form">
                    <input type="email" placeholder="example@gmail.com"/>
                    <Fab variant="extended" color="secondary" size="large" theme={theme2} type="submit"> אני בעניין</Fab>
                </form>
            </div>
        </div>
    </div>
}

export default Newsletter

