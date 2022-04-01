import * as React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import Tickets from './Tickets'
import Nav from './Nav'

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

    const handleDelete = (cartData:any)=>{
        axios
        .delete(`https://space-meteor.herokuapp.com/cart/${cartData._id}`)
          .then(()=>{
            axios
            .get('https://space-meteor.herokuapp.com/cart/')
            .then((response:any)=>{
              setCartItems(response.data)
            })
          })
       }

    useEffect(() => {
        getCartItems()
       }, [])


    return (
        <>
        <Nav />
        <h1>CART</h1>
      <div className = 'cartContainer'>
      {cartItems?.map((cart:any)=>{ 
        return (
        <div className = {cart.name} key = {cart._id}>
        <h3>{cart.name}</h3>
        <img src = {cart.image}></img>
        <h3>{cart.destination}</h3>
        <h4>{cart.date}</h4>
        <h4>{cart.price}</h4>

        <button onClick = {(event) => {handleDelete(cart)}} >delete</button>
        </div>
         )
      })
    }
    </div>
   
        </>
    )
}

export default Cart;