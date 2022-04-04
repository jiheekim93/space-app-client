import * as React from "react"
import {useState,useEffect} from 'react';
import axios from 'axios'
import '../App.css';
// import ShowFood from './ShowFood'
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import ShowFood from './ShowFood'
import Nav from './Nav'
import Footer from './Footer'

const FoodPage: React.FC = (props:any) => {
    const [food, setFood] = useState<[]>([])
    let navigate = useNavigate()
    const [filter, setFilter] = useState('')

    const getFood = () => {
        axios
        .get('https://space-meteor.herokuapp.com/food')
        .then(
          (response) => setFood(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    const handleDelete = (foodData:any)=>{
        axios
        .delete(`https://space-meteor.herokuapp.com/food/${foodData._id}`)
          .then(()=>{
            axios
            .get('https://space-meteor.herokuapp.com/food/')
            .then((response)=>{
              setFood(response.data)
            })
          })
        }

        const handleUpdate = (editFood:any) => {
          console.log(editFood)
          axios
            .put('https://space-meteor.herokuapp.com/planets/' + editFood.id, editFood)
            .then((response) => {
              getFood()
            })
        }



        useEffect(() => {
          getFood()
         }, [])




  return (
    <>
    <Nav />
    <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>


    <h1 className= 'shopHeader'>FEATURED PRODUCTS</h1>
    <div className = 'searchDiv'>
    <input className = 'searchInput' type="text" placeholder="SEARCH..." value={filter} onChange={(e) => {e.preventDefault(); setFilter(e.target.value);
      }}
      ></input>
      </div>
   

    <div className = 'foodContainer'>
    <div className="shopNavBar">
              <Link className = 'shopLink' to = '/food'>FOOD</Link>
              <div>
              <Link className = 'shopLink' to = '/gear'>GEAR</Link>
              <div className = 'line'></div>
              </div>
              </div>
    {food?.filter((search:any) =>
        search.name.toLowerCase().includes(filter.toLowerCase())).map((fod:any, index)=>{
      return (
        <>
        <div>
          <Routes>
            <Route path = '/food/:id' element = {<ShowFood fod = {fod} food = {food}/>}/>
          </Routes>
        </div>
      <div className = 'foodCard' key = {fod._id + index}>
      <div onClick = {() => {navigate('/food/' + fod._id)} } className = 'offBlack'>
      <img src = {fod.image}></img></div>
      <h3 className = 'foodName'>{fod.name}</h3>
      <h4 className = 'foodPrice'>${fod.price_string}</h4>

      {/* <button onClick = {(event) => {handleDelete(fod)}} >delete</button> */}
      </div>
      </>
       )
    })
  }
  </div>
  <Footer />
    </>
  )
}

export default FoodPage;
