import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Add = (props:any)=>{
    let emptyPlanet = { name: '', image: '', description: '', ticket_price: '', date_fround:'', activity:'', weather:'',distance:'', day_length:'' }
    const [planet, setPlanet] = useState<any['']>({emptyPlanet})   
    const [addBtn, setAddbtn] = useState<any['']>('')
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



    // const handleNewName = (event:any)=>{
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



    // const handleSubmit = () => {
    // axios.post(
    //     'https://space-meteor.herokuapp.com/planets',
    //     {
    //         name: newName,
    //         image: newImage,
    //         description: newDescription,
    //         ticket_price: newPrice,
    //         activity: newActivity,
    //         date_found: newDateFound,
    //         weather: newWeather,
    //         distance: newDistance,
    //         day_length: newDayLength
    //     }).then(()=>{
    //     axios
    //         .get('https://space-meteor.herokuapp.com/planets')
    //         .then((response)=>{
    //             setNewPlanet(response.data)
    //         })
    //     })
    // }
    const handleChange = (event:any) => {
        setPlanet({ ...planet, [event.target.name]: event.target.value })
      }

  
    const handleSubmit = (event:any) => {
        event.preventDefault()
        props.handleCreate(planet)
      }

        return (
            <>
            {props.username ?
            <button className = "btn" onClick={() => setAddbtn(!addBtn)}>
            {!addBtn ? "ADD PLANET" : "Cancel"}
            </button>
            : null }           
            {addBtn && (
                <form className = 'addForm' onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input placeholder='name' type="text" name="name" value={planet.name} onChange={handleChange} />
                <br />
                <label htmlFor="image"></label>
                <input placeholder='image' type="text" name="image" value={planet.image} onChange={handleChange} />
                <br />
                <label htmlFor="description"></label>
                <input placeholder='description' type="text" name="description" value={planet.description} onChange={handleChange} />
                <br />
                <label htmlFor="ticket_price"></label>
                <input placeholder='ticket_price' type="text" name="ticket_price" value={planet.ticket_price} onChange={handleChange} />
                <br />
                <label htmlFor="date_fround"></label>
                <input placeholder='date_fround' type="text" name="date_fround" value={planet.date_fround} onChange={handleChange} />
                <br />
                <label htmlFor="activity"></label>
                <input placeholder='activity' type="text" name="activity" value={planet.activity} onChange={handleChange} />
                <br />
                <label htmlFor="weather"></label>
                <input placeholder='weather' type="text" name="weather" value={planet.weather} onChange={handleChange} />
                <br />
                <label htmlFor="distance"></label>
                <input placeholder='distance' type="text" name="distance" value={planet.distance} onChange={handleChange} />
                <br />
                <label htmlFor="day_length"></label>
                <input placeholder='day_length' type="text" name="day_length" value={planet.day_length} onChange={handleChange} />

                <input className = 'submitButton' type = 'submit' value = 'Add Item' />
                {/* <button onClick = {(event) => {handleDelete(ticket)}}>delete</button> */}

                </form>
            )}
            </>
        )

    }


    export default Add
