import * as React from 'react'
import {useState, useEffect} from 'react'
import Add from './AddPlanet';
import Edit from './EditPlanet';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import ShowPlanets from "./ShowPlanets"

const Planets:React.FC  = (props:any) => {
    const [planets, setPlanets] = useState<[]>([])
    // const [newPlanet, setNewPlanet] = useState<[]>([])
    // const [newName, setNewName] = useState<string>('')
    // const [newImage, setNewImage] = useState<string>('')
    // const [newDescription, setNewDescription] = useState<string>('')
    // const [newPrice, setNewPrice] = useState<string>('')
    // const [newDateFound, setNewDateFound] = useState<string>('')
    // const [newActivity, setNewActivity] = useState<string>('')
    // const [newWeather, setNewWeather] = useState<string>('')
    // const [newDistance, setNewDistance] = useState<string>('')
    // const [newDayLength, setNewDayLength] = useState<string>('')


  //   const handleNewName = (event:any)=>{
  //     setNewName(event.target.value);
  //   }

  // const handleNewImage = (event:any)=>{
  // setNewImage(event.target.value);
  // }

  // const handleNewDescription = (event:any)=>{
  // setNewDescription(event.target.value);
  // }

  // const handleNewPrice = (event:any)=>{
  // setNewPrice(event.target.value);
  // }

  // const handleNewActivity = (event:any)=>{
  // setNewActivity(event.target.value);
  // }

  // const handleNewDateFound = (event:any)=>{
  // setNewDateFound(event.target.value);
  // }

  // const handleNewWeather = (event:any)=>{
  // setNewWeather(event.target.value);
  // }

  // const handleNewDistance = (event:any)=>{
  // setNewDistance(event.target.value);
  // }

  // const handleNewDayLength = (event:any)=>{
  // setNewDayLength(event.target.value);
  // }




    const getPlanets = () => {
      axios
      .get('https://space-meteor.herokuapp.com/planets')
      .then(
        (response:any) => setPlanets(response.data),
        (err:any) => console.error(err)
      )
      .catch((err:any) => console.error(err))
    }

          const handleUpdate = (editPlanet:any) => {
            console.log(editPlanet)
            axios
              .put('https://space-meteor.herokuapp.com/planets/' + editPlanet.id, editPlanet)
              .then((response:any) => {
                getPlanets()
              })
          }


          const handleCreate = (addPlanet:any) => {
            axios
              .post('https://space-meteor.herokuapp.com/planets/', addPlanet)
              .then((response) => {
                console.log(response)
                getPlanets()
              })
          }
          // console.log(planets)
  
          // const handleSubmit = () => {
          //   axios.post(
          //       'https://space-meteor.herokuapp.com/planets',
          //       {
          //           name: newName,
          //           image: newImage,
          //           description: newDescription,
          //           ticket_price: newPrice,
          //           activity: newActivity,
          //           date_found: newDateFound,
          //           weather: newWeather,
          //           distance: newDistance,
          //           day_length: newDayLength
          //       }).then(()=>{
          //       axios
          //           .get('https://space-meteor.herokuapp.com/planets')
          //           .then((response)=>{
          //               setNewPlanet(response.data)
          //           })
          //       })
          //   }

          useEffect(() => {
            getPlanets()
           }, [])
  
    return (
      <>
            <Add handleCreate={handleCreate} />

      <div className='showcase'>
    <video src="https://i.imgur.com/cUgXEi6.mp4" loop muted autoPlay={true}></video>
    <img className = 'rings' src = 'https://i.imgur.com/DIV0fC4.png'></img>
    </div>
      <h1>TRAVEL TO THE PLANETS!</h1>
      <div className = 'planetContainer'>
      {planets?.map((planet:any)=>{ 
        return (
        <div className = {planet.name} key = {planet._id}>
        <ShowPlanets planet={planet} planets = {planets} id = {planet._id}
        name = {planet.name}
        image = {planet.image}
        description = {planet.description}
        price = {planet.price}
        date_found = {planet.date_found}
        activity = {planet.activity} weather = {planet.weather} distance = {planet.distance} day_length= {planet.day_length}/>
        <Edit handleUpdate={handleUpdate} id={planet._id}/>
        </div>
         )
      })
    }
    </div>
      </>
    )
}

export default Planets;