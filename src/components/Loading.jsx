import React from "react";  
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme } from '@mui/material/styles';

function Loading(props){
  const theme4 = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
        contrastText: '#eff4f6'
      },
    },
  }
  )
  return <div className="loading-section">
    <h1>loading</h1>
    <CircularProgress disableShrink color="primary" theme={theme4} />
  </div>
}

export default Loading;
