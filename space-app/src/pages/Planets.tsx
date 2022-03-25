import * as React from 'react'
import {useState, useEffect} from 'react'
import logo from './logo.svg';
import Add from './AddPlanet';
import Edit from './EditPlanet';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'

const Planets:React.FC  = (props:any) => {
    const [planets, setPlanets] = useState<[]>([])
    const [gears, setGears] = useState<[]>([])
  
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
      <Add />
      <h1>TRAVEL TO THE PLANETS!</h1>
      <div className = 'planetContainer'>
      {planets?.map((planet:any)=>{ 
        return (
        <div className = 'planetCard' key = {planet._id}>
        <img src ={planet.image}></img>
        <h3>{planet.name}</h3>
        <h3>{planet.description}</h3>
        <h4>Year discovered: {planet.date_found}</h4>
        <h4>Ticket price: ${planet.ticket_price}</h4>
        <h4>Featured activity: {planet.activity}</h4>
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