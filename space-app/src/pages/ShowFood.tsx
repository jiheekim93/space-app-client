import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
const ShowFood = (props:any, fod:any) => {
    const params = useParams()
    const [food, setFood] = useState<any['']>([])
    const [addToCart, setAddToCart] = useState<any['']>([])


    const handleNewCart = (event:any)=>{
      setAddToCart(event.target.value);
      }


    const getFood = () => {
        axios
          .get('https://space-meteor.herokuapp.com/food/')
          .then(
            (response) => setFood(response.data),
            (err) => console.error(err)
          )
          .catch((error) => console.error(error))
      }

    
    
        const handleCart = () => {
          axios.post(
            'https://space-meteor.herokuapp.com/cart',
            {
              id:food._id,
              name: food.name,
              image: food.image,
              description: food.image,
              price: food.price
            }).then(() => {
              axios.get('https://space-meteor.herokuapp.com/cart')
              .then((response) => {
                setAddToCart(response.data)
              })
            })
        }


      useEffect(() => {
        axios.get('https://space-meteor.herokuapp.com/food/' + params.id)
          .then((response) =>
            setFood(response.data))
      }, []);
    
      console.log(food);
      
    return (
        <>
      <Nav />

      <nav className="shopNavBar">
            <Link to = '/food'>FOOD</Link>
            <Link to = '/gear'>GEAR</Link>
        </nav>
        <img src = {food.image}></img>
        <h1>{food.name}</h1>
        <h2>{food.description}</h2>
        <h3>${food.price}</h3>
        <form className = 'addForm' onSubmit={handleCart}>
        <input className = 'addToCart' type = 'submit' onChange={handleNewCart}/>
        </form>
        </>
    )
}

export default ShowFood