import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

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
            price: gears.price
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
        <h3>shop!</h3>
        <img src = {gears.image}></img>
        <h1>{gears.name}</h1>
        <h2>{gears.description}</h2>
        <h3>{gears.price}</h3>
        <form className = 'addForm' onSubmit={handleCart}>
        <input className = 'addToCart' type = 'submit' onChange={handleNewCart}/>
        </form>
        </>
    )
}

export default ShowGears