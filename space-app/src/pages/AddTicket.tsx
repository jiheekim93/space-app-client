import * as React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import Cart from './Cart'

const AddTickets = (props:any)=>{
    let emptyTicket = {ticket_price:'', date:'', destination:''}
    const [ticket, setTicket] = useState<any>({emptyTicket})
    const [addToCart, setAddToCart] = useState<any['']>([])
  
    
    const handleNewCart = (event:any)=>{
      setAddToCart(event.target.value);
      }

    
    const handleChange = (event:any) => {
        setTicket({ ...ticket, [event.target.name]: event.target.value })
      }

      const handleSubmit = (event:any) => {
        event.preventDefault()
        props.handleCreate(ticket)
      }
      const handleCart = () => {
      
        axios.post(
          'https://space-meteor.herokuapp.com/cart',
          {
            id: ticket._id,
            destination: ticket.destination,
            date: ticket.date,
            price: ticket.price
          }).then(() => {
            axios.get('https://space-meteor.herokuapp.com/cart')
            .then((response) => {
              setAddToCart(response.data)
            })
          })
      }


    return (
     <div className='ticketForm'>
   
      <form onSubmit={handleCart} >

        <label htmlFor="date"></label>
        <input type="date" 
        name="date" 
        value={ticket.date}
        onChange={handleChange}/>

        <label htmlFor="destination"> 
        <select name="destination"onChange={handleChange}>
        <option value='Your Destinations'>Destinations</option>
        <option value='Krypton'>Krypton</option>
        <option value='Iris-Cream'>Iris-Cream</option>
        <option value='Sauna XXA'>Sauna XXA</option>
        <option value='Breakup 4EVA'>Breakup 4EVA</option>
        <option value='7 Flags'>7 Flags</option>
        <option value='Republixios GOP'>Republixios GOP</option>
        <option value='Pop-star Z'>Pop-star Z</option>
        </select></label>

        <label htmlFor="price"></label>
        <input type="text" name="price"  placeholder='price'
        value={ticket.price}
        onChange={handleChange}/>


        {/* <input type="text" name="destination" 
        value={ticket.destination}
        onChange={handleChange}/> */}

       <button> <input type="submit" onChange={handleNewCart}/></button>
      </form>
 
    </div>
        )

    }

        
    export default AddTickets