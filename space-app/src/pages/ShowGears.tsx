import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Nav from './/Nav'
import Footer from './Footer'

const ShowGears = (props:any, gear:any) => {
    const params = useParams()
    const [gears, setGears] = useState<any['']>([])
    const [addToCart, setAddToCart] = useState<any['']>([])

    const handleNewCart = (event:any)=>{
      setAddToCart(event.target.value);
      }

    const getGears = () => {
        axios
          .get('https://space-meteor.herokuapp.com/gear/')
          .then(
            (response) => setGears(response.data),
            (err) => console.error(err)
          )
          .catch((error) => console.error(error))
      }

      const handleCart = () => {

        axios.post(
          'https://space-meteor.herokuapp.com/cart',
          {
            id:gears._id,
            name: gears.name,
            image: gears.image,
            description: gears.image,
            price: gears.price,
            price_string: gears.price_string
          }).then(() => {
            axios.get('https://space-meteor.herokuapp.com/cart')
            .then((response) => {
              setAddToCart(response.data)
            })
          })
      }
console.log(gears);

      useEffect(() => {
        axios.get('https://space-meteor.herokuapp.com/gear/' + params.id)
          .then((response) =>
            setGears(response.data))
      }, []);

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
        <div className = 'offBlackShow'><img className = 'showGearImage' src = {gears.image}></img></div>
        <h1>{gears.name}</h1>
        <h2>${gears.price_string}</h2>
        <div className = 'divider'></div>
        <h4>{gears.description}</h4>

        <form className = 'addForm' onSubmit={handleCart}>
        <input className = 'addToCart' type = 'submit' value = 'ADD TO CART' onChange={handleNewCart}/>
        </form>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShowGears
