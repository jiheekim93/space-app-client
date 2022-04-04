import * as React from 'react'
import {useState, useEffect} from 'react'
import Gears from './Gears';
import Food from './Food';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
const Shop = () => {
    return (
        <>
        <Nav />
        <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
        <div className='shopNav'>
        <div className = 'shopImage'>
        <Link to = '/gear'><img  src = 'https://i.imgur.com/uwvs2lz.png'></img></Link>
        <div className = 'shopGear'>BROWSE GEAR</div>
        </div>
        <div className = 'shopImage'>
         <Link to = '/food'><img  src = 'https://i.imgur.com/jerWGsZ.png'></img></Link>
         <div className = 'shopFood'>BROWSE FOOD</div>
         </div>
        </div>
        <Footer />
        </>
    )
}

export default Shop
