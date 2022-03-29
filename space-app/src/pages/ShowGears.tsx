import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ShowGears = (props:any, gear:any) => {
    const params = useParams()
    const [gears, setGears] = useState<any['']>([])
   
    const getGears = () => {
        axios
          .get('https://space-meteor.herokuapp.com/gear/')
          .then(
            (response) => setGears(response.data),
            (err) => console.error(err)
          )
          .catch((error) => console.error(error))
      }

      useEffect(() => {
        axios.get('https://space-meteor.herokuapp.com/gear/' + params.id)
          .then((response) =>
            setGears(response.data))
      }, []);

    return (
        <>
        <h3>SUCK MY big COCK</h3>
        <img src = {gears.image}></img>
        <h1>{gears.name}</h1>
        <h2>{gears.description}</h2>
        <h3>{gears.price}</h3>
        </>
    )
}

export default ShowGears