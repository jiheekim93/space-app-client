import * as React from 'react'
import {useState, useEffect} from 'react'
import Gears from './Gears';
import Food from './Food';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'

const Shop = () => {
    return (
        <>
        <nav>
        <Link to = '/gear'><img src = '#'></img></Link>

         <Link to = '/food'><img src = '#'></img></Link>
        </nav>
       
        </>
    )
}

export default Shop