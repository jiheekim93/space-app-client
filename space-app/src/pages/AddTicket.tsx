import * as React from 'react'
import {useState} from 'react'
import axios from 'axios'

const AddTickets = (props:any)=>{

    const [newTicket, setNewTicket] = useState<[]>([])
    const [newTicketPrice, setNewTicketPrice] = useState<string>('')
    const [newDate, setNewDate] = useState<string>('')
    const [newDestination, setNewDestination] = useState<string>('')
   

    const handleNewPrice = (event:any)=>{
        setNewTicketPrice(event.target.value);
      }

    const handleNewDate = (event:any)=>{
        setNewDate(event.target.value);      
    }

    const handleNewDestination = (event:any)=>{
        setNewDestination(event.target.value);
    }
    
    const handleSubmit = (event:any) => {
    axios.post(
        'https://space-meteor.herokuapp.com/tickets',
        {
            ticket_price: newTicketPrice,
            date: newDate,
            destination: newDestination,
        }).then(()=>{
        axios
            .get('https://space-meteor.herokuapp.com/tickets')
            .then((response)=>{
                setNewTicket(response.data)
            })
        })
    }
    
    

        return (
            <>
            <h2>Your Ticket</h2>
                <form className = 'addForm' onSubmit={handleSubmit}>
                <input type = 'text' className = 'addInput' placeholder = 'Ticket Price' onChange={handleNewPrice}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Date' onChange={handleNewDate}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Destination' onChange={handleNewDestination}/><br/>            
                <input className = 'submitButton' type = 'submit' value = 'Add Item' />
                </form> 
            </>
        )

    }

        
    export default AddTickets