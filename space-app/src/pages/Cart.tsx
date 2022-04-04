import * as React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import Tickets from './Tickets'
import Nav from './Nav'
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from './Footer'

const Cart:React.FC = (props:any) => {
    const [cartItems, setCartItems] = useState<any['']>([])
    let [sum, setSum] = useState(0)
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

  //  let total: number = 0;
            
  //     cartItems.forEach(a => {
  //         total += a.price
  //     })
      
  //    setSum(total)

       
    return (
        <>
        <Nav />
        <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
        <h1 className = 'planetHeader'>CART</h1>
        <ul className = 'cartCat'>
        <li>PRODUCT</li>
        <li>TOTAL</li>
        </ul>
        <div className = 'divideDiv'>
        <div className = 'cartDivider'></div>
        </div>

      <div className = 'cartContainer'>
      {cartItems?.map((cart:any)=>{
      if (Number(cart.price) < 1000) {
          cart.price = String(cart.price) + ''
      }
    //   let total: number = 0;
            
    //   cartItems.forEach(a => {
    //       total += a.price
    //   })
      
    //  setSum(total)
     

        return (
        <div className = 'cartCont'  key = {cart._id}>
        <div className = 'cartCard'>
        <div className =
        'cartImageStuff'>
        <div className = 'offBlackCart'>
        <img className = 'cartImage' src = {cart.image}></img></div>

        <div className = 'cartStuff'>
        <h3>{cart.name}</h3>

        <h3>{cart.destination}</h3>
        <h4>{cart.date}</h4>
        <h4>${cart.price_string}</h4>
        </div>
        </div>
        <DeleteIcon className = 'deleteCartButton' onClick = {(event) => {handleDelete(cart)}}/>
        <h3 className = 'cartTotal'>${cart.price_string}</h3>


        </div>

        </div>
         )
      })


    }
    <div className = 'divideDiv2'>
    <div className = 'cartDivider2'></div>
    </div>
    </div>
    <form className = 'checkoutDiv'>
        <input type = 'submit' className = 'checkoutButton' value = 'CHECKOUT'></input>
    </form>
    <h3 className = 'cartTotal'>${sum}</h3>
        <Footer />

        </>
    )
}

export default Cart;
