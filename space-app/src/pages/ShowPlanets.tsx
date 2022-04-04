import * as React from 'react';
import { styled, Box } from '@mui/material';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {useState} from 'react'
import axios from 'axios'
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  Link,
} from "react-router-dom";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {

  bgcolor: 'rgba(0, 0, 0, 0.8)',

  // border: '2px solid #000',

};

const ShowPlanets = (props:any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [planets, setPlanets] = useState<any['']>('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getPlanets = () => {
    axios
      .get('https://space-meteor.herokuapp.com/planets/')
      .then(
        (response) => setPlanets(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }




    return (
    <div>
      <img src = {props.image} className = 'showPlanet' onClick={handleOpen}>
      </img>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx = {style} className = 'showModal'>
        <div className = 'carouselName'>
        <Carousel className = 'carousel' showArrows={true} autoPlay = {true} infiniteLoop = {true} showStatus = {false} useKeyboardArrows = {true} showIndicators = {false} showThumbs = {false} width = {'500px'} dynamicHeight = {false}>

                <div>
                    <img className = 'carouselImage' src={props.img1} />

                </div>
                <div>
                    <img className = 'carouselImage' src={props.img2} />

                </div>
                <div>
                    <img className = 'carouselImage' src={props.img3} />

                </div>
            </Carousel>

        <div className = 'showInfo' key={props._id}>
          {/* <h2>{props.id}</h2> */}
          <h1 className = 'showName'>{props.name.toUpperCase()}</h1>
          <h3 className = 'showDescription'>{props.description}</h3>
          <h3 className = 'ticketPrice'>TICKET PRICE: <span>${props.ticket_price}</span></h3>


         </div>
         </div>
         <div className = 'showShit'>
         <div className = 'showShitText'>
         <div>
         <h3 className = 'stuff'>YEAR DISCOVERED: <br/><span>{props.date_found}</span></h3>
         <h3 className = 'stuff'>FEATURED ACTIVITY: <br/><span>{props.activity}</span></h3>
         </div>
         <div>
         <h3 className = 'stuff'>DISTANCE FROM SUN: <br/><span>{props.distance} miles</span></h3>
         <h3 className = 'stuff'>DAY LENGTH: <br/><span>{props.day_length} hours</span></h3>
         </div>

         </div>
         <div className = 'lastRow'>
         <h3 className = 'weather'>WEATHER: <br/><span>{props.weather}</span></h3>
         <Link to ='/tickets'>
   <button className = 'buyTicketButton'>BUY TICKETS</button>
</Link>
</div>
         <div className = 'dividerButton'>



         </div>

         </div>
        </Box>
      </StyledModal>
    </div>
  );
}

export default ShowPlanets
