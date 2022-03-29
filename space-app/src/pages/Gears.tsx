import * as React from "react"
import {useState,useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {Link, Routes, Route, Router, useNavigate } from 'react-router-dom'
import ShowGears from './ShowGears'


const GearPage: React.FC = (props:any) => {
    const [gears, setGears] = useState<[]>([])
    let navigate = useNavigate()
    

    const getGears = () => {
        axios
        .get('https://space-meteor.herokuapp.com/gear')
        .then(
          (response) => setGears(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getGears()
       }, [])

    return (
        
        <>
                <nav>
            <Link to = '/food'>Food</Link>
            <Link to = '/gear'>Gear</Link>
        </nav>

        <h1>AMAZING SPACE GEAR</h1>

          <div className = 'gearContainer'>
            {gears?.map((gear:any, index)=>{ 
            return (
                <>
                <div>
                  <Routes>
                    <Route path = '/gear/:id' element = {<ShowGears gear = {gear} gears = {gears}/>}/>
                  </Routes>
                </div>
            <div className = 'gearCard' key = {gear._id} >
            <h3>{gear.name}</h3>
            <img onClick = {() => {navigate('/gear/' + gear._id)} } src = {gear.image}></img>
            <h4>${gear.price}</h4>
            </div>
            </>
            )
            })
        }
        </div>
        </>
    )
}
export default GearPage