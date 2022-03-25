import React from 'react';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Planets from './pages/Planets'
import Home from './pages/Home'
import Gears from './pages/Gears'
import Food from './pages/Food'
import Shop from './pages/Shop'
import Tickets from './pages/Tickets'
import ShowFood from './pages/ShowFood'
import {useState,useEffect} from 'react';
import axios from 'axios'

const App: React.FC = () => {
  const [food, setFood] = useState<[]>([])
  

  const getFood = () => {
      axios
      .get('https://space-meteor.herokuapp.com/food')
      .then(
        (response) => setFood(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }
  return(
      <>

   
       <nav>
        <Link to ='/home'>Home</Link>
        <Link to ='/planets'>Planets</Link> 
        <Link to ='/shop'>Shop</Link> 
        <Link to ='/tickets'>Tickets</Link> 
      </nav>
      <Routes>
      <Route path = '/home' element = {<Home />}/>
      <Route path = '/planets' element = {<Planets />}/>
      <Route path = '/tickets' element = {<Tickets />}/>      
      <Route path = '/shop' element = {<Shop />}/>
      <Route path = '/food' element = {<Food />}/>
      <Route path = '/gear' element = {<Gears />}/>
      <Route path = '/food/:id' element = {<ShowFood food = {food}/>}/>
      </Routes>
      

      </>
  )
}

export default App;
