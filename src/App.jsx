import './App.css'
import { useState, useEffect } from 'react'
import Quote from './components/Quote'
import { Container } from '@mui/material';
import { blue, purple, red, green, orange} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



export default function App(props) {
  const [quotes, setQuotes] = useState([{quote: '', author: ''}])

  const arrayOfColors = [blue, purple, red, green, orange]
  
  function getNewColor() {
    return arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
  }

  const theme = createTheme({
    palette: {
      primary: getNewColor()
    }
  });

  async function getQuote(){
      try {
        const response = await fetch("https://api.quotable.io/random?tags=technology")
        if (response.ok) {
          const quote = await response.json()
          setQuotes({quote: quote.content, author: quote.author})
        }
      } catch (error) {
        console.log(`Error: ${error}`)
      }
  }
  
  useEffect(() => {
    getQuote();
  }, [])

    const handleNewQuote = () => {
      console.log("Click")
      getNewColor()
      getQuote()
    }
  
  return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container 
            maxWidth={
              false
            } 
            sx={{
              bgcolor:theme.palette.primary.main,
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Quote maxHeight handleNewQuote={handleNewQuote} quote={quotes.quote} author={quotes.author} />
          </Container>
        </ThemeProvider>
    )
}
