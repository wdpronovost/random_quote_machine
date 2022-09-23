import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { Container } from '@mui/material';
// import { blue, purple, red, green } from '@mui/material/colors';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//   },
// });
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
    //     <Container disableGutters={true} maxWidth={false} sx={{bgcolor:theme.palette.primary.main}}>*/}
          <App />
      {/*   </Container>
       </ThemeProvider> */}
  </React.StrictMode>
);