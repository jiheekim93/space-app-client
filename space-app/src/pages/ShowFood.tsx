import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

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
              price: food.price,
              price_string: food.price_string
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
      <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
      <nav className="shopNavBar">
            <Link to = '/food'>FOOD</Link>
            <Link to = '/gear'>GEAR</Link>
        </nav>
        <div className = 'showStuffDiv'>
        <div className = 'showStuff'>
        <div className = 'offBlackShow'>
        <img className = 'showGearImage' src = {food.image}></img></div>
        <h1>{food.name}</h1>
        <h2>${food.price_string}</h2>
        <div className = 'divider'></div>
        <h4>{food.description}</h4>

        <form className = 'addForm' onSubmit={handleCart}>
        <input className = 'addToCart' type = 'submit' value = 'ADD TO CART' onChange={handleNewCart}/>
        </form>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShowFood
