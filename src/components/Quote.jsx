import TwitterIcon from '@mui/icons-material/Twitter';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography, Box, Button, Card, CardContent, Link } from '@mui/material';
import { useRef } from 'react'

 
export default function Quote(props) {

let twitter = useRef("twitter.com/intent/tweet")
  
  return (
    <Card sx={{width:"650px"}} id="quote-box">
      <CardContent>
        <Typography variant="h4" id='text'>
          <FormatQuoteIcon sx={{width: 50, fontSize: 50}} color='primary' style={{transform: "scaleX(-1)"}}/>{props.quote}
        </Typography>
        <Typography color="primary" align='right' sx={{paddingTop:2}} id="author">
          - {props.author}
        </Typography>
        <br/>
        <Box sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
          <Link href={"https://twitter.com/intent/tweet"} target='_top' rel="noopener noreferrer" id='tweet-quote' variant='button'><TwitterIcon /></Link>
        <Button onClick={props.handleNewQuote} id='new-quote'> New Quote</Button>
        </Box>
        
      </CardContent>
    </Card>
  );
}