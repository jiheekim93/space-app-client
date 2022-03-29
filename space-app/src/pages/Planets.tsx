import * as React from 'react'
import {useState, useEffect} from 'react'
import Add from './AddPlanet';
import Edit from './EditPlanet';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import ShowPlanets from "./ShowPlanets"

const Planets:React.FC  = (props:any) => {
    const [planets, setPlanets] = useState<[]>([])

    const getPlanets = () => {
      axios
      .get('https://space-meteor.herokuapp.com/planets')
      .then(
        (response:any) => setPlanets(response.data),
        (err:any) => console.error(err)
      )
      .catch((err:any) => console.error(err))
    }
  
    const handleDelete = (planetData:any)=>{
          axios
          .delete(`https://space-meteor.herokuapp.com/planets/${planetData._id}`)
            .then(()=>{
              axios
              .get('https://space-meteor.herokuapp.com/planets/')
              .then((response:any)=>{
                setPlanets(response.data)
              })
            })
         }
  
          const handleUpdate = (editPlanet:any) => {
            console.log(editPlanet)
            axios
              .put('https://space-meteor.herokuapp.com/planets/' + editPlanet.id, editPlanet)
              .then((response:any) => {
                getPlanets()
              })
          }
          console.log(planets)
  
          useEffect(() => {
            getPlanets()
           }, [])
  
    return (
      <>
      <div className='showcase'>
    <video src="https://i.imgur.com/cUgXEi6.mp4" loop muted autoPlay={true}></video>
    <img className = 'rings' src = 'https://i.imgur.com/DIV0fC4.png'></img>
    </div>
      <h1>TRAVEL TO THE PLANETS!</h1>
      <div className = 'planetContainer'>
      {planets?.map((planet:any)=>{ 
        return (
        <div className = {planet.name} key = {planet._id}>
        <ShowPlanets
        name = {planet.name}
        image = {planet.image}
        description = {planet.description}
        ticket_price = {planet.ticket_price}
        date_found = {planet.date_found}
        activity = {planet.activity} weather = {planet.weather} distance = {planet.distance} day_length= {planet.day_length}/>
        <Edit handleUpdate={handleUpdate} id={planet._id}/>
        <button onClick = {(event) => {handleDelete(planet)}} >delete</button>
        </div>
         )
      })
    }
    </div>
        
      </>
    )
}

export default Planets;