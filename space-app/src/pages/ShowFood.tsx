import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ShowFood = (props:any) => {

    const params = useParams()
    // const [food, setFood] = useState<[]>([])
   
    const getFood = () => {
        axios
        .get('https://space-meteor.herokuapp.com/food/' + params._id)
        .then((response) => {
            props.setFood(response.data);
          });
      };


    useEffect(() => {
        getFood();
      }, []);
    


console.log('suck it bitchass');
console.log(props.food);

    return (
        <>
        <h3>SUCK MY big COCK</h3>
        <h1>{props.food.name}</h1>
        </>
    )
}

export default ShowFood