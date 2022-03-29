import * as React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import AddTickets from './AddTicket'
import {Link, Routes, Route, useNavigate,} from "react-router-dom";


const Tickets = () => {
    const [tickets, setTickets] = useState<[]>([])

    const getTickets = () => {
        axios
        .get('https://space-meteor.herokuapp.com/tickets')
        .then(
          (response) => setTickets(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    const handleCreate = (addTicket:any) => {
    axios
        .post('https://space-meteor.herokuapp.com/tickets', addTicket)
        .then((response) => {
        console.log(response)
        getTickets()
        })
    }

    const handleDelete = (ticketData:any)=>{
        axios
        .delete(`https://space-meteor.herokuapp.com/tickets/${ticketData._id}`)
          .then(()=>{
            axios
            .get('https://space-meteor.herokuapp.com/tickets/')
            .then((response:any)=>{
                setTickets(response.data)
            })
          })
       }


    useEffect(() => {
        getTickets()
       }, [])

    return (
        <>
        <div className='ticketsCon'>
        <img className='ticketBackground' src=''/>
        <div className='addTickets'>
        <AddTickets handleCreate={handleCreate} / >
        </div>
        <div className='ticket'>
        {tickets?.map((ticket:any) =>{
            return (
                <div className='tickets' key={ticket.id}>
                    <p>{ticket.ticket_price}</p>
                    <p>{ticket.date}</p>
                    <p>{ticket.destination}</p>
                    <button onClick = {(event) => {handleDelete(ticket)}}>delete</button>
                </div>
            )}
             )}
       
        </div>
        </div>
        </>
    )
}

export default Tickets