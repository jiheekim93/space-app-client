import * as React from 'react'
import {useState, useEffect} from 'react'
import Gears from './Gears';
import Food from './Food';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import Nav from './Nav'
const Shop = () => {
    return (
        <>
        <Nav />
        <div className='shopNav'> 
        <Link to = '/gear'><img src = 'https://i.imgur.com/uwvs2lz.png'></img>GEAR</Link>

         <Link to = '/food'><img src = 'https://i.imgur.com/jerWGsZ.png'></img></Link>
        </div>
       
        </>
    )
}

export default Shop