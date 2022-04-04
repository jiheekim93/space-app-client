import * as React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Login from './Login'

const Nav = (props:any) => {
    return(
        <>
     <div className='NavBar'>
      <div className = 'navBarSmall'>
        <Link className = 'link' to ='/home'>HOME</Link>
        <Link className = 'link' to ='/planets'>PLANETS</Link>

        <Link className = 'link' to ='/tickets'>TICKETS</Link>
        <Link className = 'link' to ='/shop'>SHOP</Link>
        <Link className = 'link' to ='/cart'>CART</Link></div>
        
        <Link className = 'link2' to ='/login'>ACCOUNT</Link>
       
      </div>

        </>
    )
}

export default Nav
