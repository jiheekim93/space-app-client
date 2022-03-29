import * as React from 'react'
import {useState} from 'react'
import axios from 'axios'


const Add = (props:any)=>{

    const [newPlanet, setNewPlanet] = useState<[]>([])
    const [newName, setNewName] = useState<string>('')
    const [newImage, setNewImage] = useState<string>('')
    const [newDescription, setNewDescription] = useState<string>('')
    const [newPrice, setNewPrice] = useState<string>('')
    const [newDateFound, setNewDateFound] = useState<string>('')
    const [newActivity, setNewActivity] = useState<string>('')
    const [newWeather, setNewWeather] = useState<string>('')
    const [newDistance, setNewDistance] = useState<string>('')
    const [newDayLength, setNewDayLength] = useState<string>('')



    const handleNewName = (event:any)=>{
        setNewName(event.target.value);
      }

    const handleNewImage = (event:any)=>{
    setNewImage(event.target.value);
    }

    const handleNewDescription = (event:any)=>{
    setNewDescription(event.target.value);
    }

    const handleNewPrice = (event:any)=>{
    setNewPrice(event.target.value);
    }

    const handleNewActivity = (event:any)=>{
    setNewActivity(event.target.value);
    }

    const handleNewDateFound = (event:any)=>{
    setNewDateFound(event.target.value);
    }

    const handleNewWeather = (event:any)=>{
    setNewWeather(event.target.value);
    }

    const handleNewDistance = (event:any)=>{
    setNewDistance(event.target.value);
    }

    const handleNewDayLength = (event:any)=>{
    setNewDayLength(event.target.value);
    }



    const handleSubmit = (event:any) => {
    axios.post(
        'https://space-meteor.herokuapp.com/planets',
        {
            name: newName,
            image: newImage,
            description: newDescription,
            ticket_price: newPrice,
            activity: newActivity,
            date_found: newDateFound,
            weather: newWeather,
            distance: newDistance,
            day_length: newDayLength
        }).then(()=>{
        axios
            .get('https://space-meteor.herokuapp.com/planets')
            .then((response)=>{
                setNewPlanet(response.data)
            })
        })
    }



        return (
            <>
            <h2>Add New Planet</h2>
                <form className = 'addForm' onSubmit={handleSubmit}>
                <input type = 'text' className = 'addInput' placeholder = 'Planet Name...' onChange={handleNewName}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Image URL...' onChange={handleNewImage}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Item Description...' onChange={handleNewDescription}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Ticket Price...' onChange={handleNewPrice}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Year discovered...' onChange={handleNewDateFound}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Activity...' onChange={handleNewActivity}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Weather...' onChange={handleNewWeather}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Distance from Sun...' onChange={handleNewDistance}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Day length in hours...' onChange={handleNewDayLength}/><br/>



                <input className = 'submitButton' type = 'submit' value = 'Add Item' />
                </form>
            </>
        )

    }


    export default Add
