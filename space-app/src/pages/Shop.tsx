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
            <Link to = '/food'>Food</Link>
            <Link to = '/gear'>Gear</Link>
        </nav>
       
        </>
    )
}

export default Shop