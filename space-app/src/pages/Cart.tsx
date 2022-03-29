import * as React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import Tickets from './Tickets'
const Cart:React.FC = (props:any) => {
    const [cartItems, setCartItems] = useState<any['']>([])
    const getCartItems = () => {
        axios
        .get('https://space-meteor.herokuapp.com/cart')
        .then(
          (response:any) => setCartItems(response.data),
          (err:any) => console.error(err)
        )
        .catch((err:any) => console.error(err))
    }

    useEffect(() => {
        getCartItems()
       }, [])


    return (
        <>
        <div className='carts'>
            <p>{props.tickets}</p>
        </div>
   
        </>
    )
}

export default Cart;