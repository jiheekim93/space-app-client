import * as React from 'react';
import { styled, Box } from '@mui/material';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {useState} from 'react'

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <img className = 'showImage'src = {props.image}></img>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
          <h3>Ticket Price: {props.ticket_price}</h3>
          <h3>Year Discovered: {props.date_found}</h3>
          <h3>Featured Activity: {props.activity}</h3>
          <h3>Weather: {props.weather}</h3>
          <h3>Distance from Sun: {props.distance} miles</h3>
          <h3>Day Length: {props.day_length} hours</h3>
         </div>

        </Box>
      </StyledModal>
    </div>
  );
}

export default ShowPlanets
