import 'react-slideshow-image/dist/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Icon } from "@mui/material";
import React, { useEffect, useState, Fragment } from "react";
import Papa from 'papaparse';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vSd9H_z9WG4plW3fM17uOHyV92zrg4SHi1jZzS48MpJSQwj9VyMt1B38CREDkHul9pfoZc0OhTnTGRa/pub?output=csv', {
    download: true,
    header: true,
    complete: function(results) {
      var data = results.data
      setData(data)
    }
  })
 
  }, []);

  const main={
    flex: "1px"
  }

  const style1={
    background:"#636F57", 
    padding:"30px", 
    borderRadius:"90px",
    justifyContent: "center",
    alignItems: "center",
    width:"auto",
    alignSelf:"center",
    paddingLeft:"120px"
   
  }
  const style2={
    fontSize:"25px",
    borderRadius:"90px",
    display: "flex",
    paddingTop:"0px"
  }
  const style3={
    background:"#548B54",
    width:"800px",
    borderRadius:"80px",
    padding:"30px",
    paddingTop:"10px",
    margin:"0px",
    fontSize:"30px",
    

  }
  const style4={
    background:"grey", 
    width:"520px",
    borderRadius:"80px",
    padding:"40px",
    fontSize:"30px",
    margin:"auto"
   
  }
  const style5={
    background:"#40664D", 
    fontSize:"30px",
    margin:"auto",
    borderRadius:"90px",
    padding:"40px",
    height:"auto",
    display:"flex",   
    width:"300px"
  }
  const block={
    margin: "auto",
    height:"300px",
    borderRadius:"90px",
    backgroundColor:"white",
    display:"flex",  
   fontSize:"25px",
  }

  const imageblock={
    margin: "auto",
    borderRadius:"90px",
    backgroundColor:"#2F4F2F",
    padding: "50px",
    width:"400px"
  
  }
  function changeBackground(e) {
    document.getElementById("demo").style.cursor = "pointer";
  }

  function changeBackground2(e) {
  }
  return (
    
    <div style={main}>
      <div style={style1} onMouseEnter={changeBackground}onMouseOut={changeBackground2}>
     
         <img src="header.png" alt="icon" class="center"  style={{
           height:"140px",
           alignSelf:"center",
           width:"auto",
          }}></img>
       </div>
          <div style={style2}>
            <div style={imageblock}>
            <Accordion>
            <AccordionSummary
          expandIcon={<Icon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Alpine Frog</Typography>
        </AccordionSummary>
            <AccordionDetails>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="1.jpeg"
          alt="ALPINE FROG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Alpine frog
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “Lots of frogs are at risk of extinction due to climate change.
          Is it fair to build up our homes at the cost of theirs?"

          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </CardActionArea>
          </Card>
          </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
          expandIcon={<Icon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Elephants</Typography>
        </AccordionSummary>
        <AccordionDetails>
      <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="2.jpeg"
          alt="Elephants"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Elephants
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “Lots of frogs are at risk of extinction due to climate change.
          Is it fair to build up our homes at the cost of theirs?"

          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
            </Card>
            </AccordionDetails>
            </Accordion>

            <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="3.jpeg"
          alt="Hummingbirds"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hummingbirds
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “Lots of frogs are at risk of extinction due to climate change.
          Is it fair to build up our homes at the cost of theirs?"

          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card>

    {data.map((item, i) => (
        <Fragment key={i}>
    <Accordion>
            <AccordionSummary
          expandIcon={<Icon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.Species}</Typography>
        </AccordionSummary>
            <AccordionDetails>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={item.Picture}
          alt={item.Species}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.Species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.Description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </CardActionArea>
          </Card>
          </AccordionDetails>
          </Accordion>
        </Fragment>
      ))}
</div>

    <div style={style4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon />}
          aria-controls="panel1a-content"
          id="Details"
        >
          <Typography> Welcome to STORIESFORSPECIES.COM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

STORIES MAKE THE FUTURE
How can creating and sharing stories forge a better future?

This project is made by, for, and with young people. It asks:
How can creativity and story-telling help channel feelings of eco-anxiety, into political action, centered on generating positive change?

Young people are suffering from the effects of living with the knowledge of a worsening global catastrophe. Terms such as “eco-anxiety” and “pre-traumatic stress syndrome” have been employed to define this suffering and its corresponding symptoms, which are direct results of the climate crisis and climate inaction. 

This project developed out of two workshops held with students from a secondary school in London. Our aim for this project, determined in collaboration with workshop attendees, became how to draw attention to humanity's position in, and relationship to nature. This was accomplished through the students telling the stories of animals at risk of extinction. Story-telling, exploring the lives and relations of species on the brink of extinction, thus became a way to critically think about humanity's relationship with nature. Such critical thinking creates space for new ideas to emerge regarding how to approach, understand, and mitigate human harm to the planet.

In response to the call for better and cross-disciplinary climate education in schools, we propose this project as a resource for incorporating science-based climate knowledge and education into humanities curriculum. As evidenced by the collected feedback from students, this can be a way to alleviate feelings of eco-anxiety and channel action for positive change. We ask that viewers continue to populate this website with species at risk of extinction. In 2019, the UN reported that 1 million species were at risk of extinction. That is a lot of species to save and equally, many stories to tell.

This website, by the digital artist Sunni (Yu Husuan Liao), provides a place for stories to be posted, and viewers to engage and reflect on their situationality within nature. 
          </Typography>
        </AccordionDetails>
      </Accordion>
  
     
      
      </div>
     
      <div id="demo" style={style3} onMouseEnter={changeBackground} onMouseOut={changeBackground2}>

<p>ADD TO THE PROJECT///PROTECT AND MAP ECOLOGIES
THIN OF A SPECIES AT RISK OF EXTINCTION OR CONTRIBUTE TO ONE ALREADY POSTED. TELL ITS STORY.</p>
<p>
Do this through
Writing something:
A creative writing piece
A comic
Poetry
A letter or dialogue with your non-human being 
OR
Recording something
OR
Making something
drawing/painting/collaging
</p>
Some questions that may be used as a starting point are
What affects both your life and this specie’s life?
What living things do you both depend on?
Do you depend on each other ecologically?
What about your futures? What about your pasts?

  </div>
  <div style={style5}>
     THIS IS A CREATE RESEARCH PROJECT FOR THE COURSE ‘DESIGNING POLITICS’ FOR THE MA ART AND POLITICS PROGRAMME
      AT THE UNIVERSITY OF LONDON  <br />
     KATHERINE DICK  <br />
      MEGAN CROSSLAND  <br />
     MIKA TAKAHASHI  <br />
</div>
          </div>
      

      <div style={block}>
      <div style={{backgroundColor:"#0AC92B", borderRadius:"50px", padding:"20px"}}>
      “I feel more optimistic about the climate crisis and what we can do to save it because I’ve been surrounded by like minded people.”
      </div>
      <div style={{backgroundColor:"#31B94D", borderRadius:"50px", padding:"20px"}}>
      “Art and climate can go together, I think that art has a place in almost anything. It allows us to be more open to ideas and inclusive to other people”      </div>
    <div style={{backgroundColor:"#96C8A2", borderRadius:"50px", padding:"20px"}}>
“More hopeful about how different disciplines/fields can come together to help tackle climate change.”  </div>
<div style={{backgroundColor:"#1DA237", borderRadius:"50px", padding:"20px"}}>
“I think art plays a role in politics of climate change because it presents the information in a more accessible way that can appeal to younger and less-aware audiences”  </div>
<div style={{backgroundColor:"#3EA055", borderRadius:"50px", padding:"20px"}}>
“I feel calm and relaxed after doing this project. I thought it was fun to be able to discuss our ideas and anxieties in a non-stressful environment.”
      </div>
      <div style={{backgroundColor:"#337147", borderRadius:"50px", padding:"20px"}}>
      “Art can be really useful in conveying the effects of climate change and exploring how humans affect and can affect nature”
      </div>  
</div>
<div style={{backgroundColor:"#78AB46", borderRadius:"50px", padding:"20px", fontSize:"40px",textAlign:"center"}}>
CONTACT: STORIESFORSPECIES@GMAIL.COM</div>     
</div>

  )
}

export default App;