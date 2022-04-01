import * as React from 'react';
import { styled, Box } from '@mui/material';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {useState} from 'react'
import axios from 'axios'
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
        <div className= 'showImageDiv'><img className = 'showImage'src = {props.image}></img></div>
        <div className = 'showInfo' key={props._id}>
          {/* <h2>{props.id}</h2> */}
          <h2 className = 'showName'>{props.name}</h2>
          <h3 className = 'showDescription'>{props.description}</h3>
          <h3>Ticket Price: <span>${props.ticket_price}</span></h3>
          <h3>Year Discovered: <span>{props.date_found}</span></h3>
          <h3>Featured Activity: <span>{props.activity}</span></h3>
          <h3>Weather: <span>{props.weather}</span></h3>
          <h3>Distance from Sun: <span>{props.distance} miles</span></h3>
          <h3>Day Length: <span>{props.day_length} hours</span></h3>
         </div>
        </Box>
      </StyledModal>
    </div>
  );
}

export default ShowPlanets
