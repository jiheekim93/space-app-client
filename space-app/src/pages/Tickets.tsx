import * as React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import AddTickets from './AddTicket'


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

    useEffect(() => {
        getTickets()
       }, [])

    return (
        <>
        <AddTickets / >
        </>
    )
}

export default Tickets