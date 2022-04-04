import * as React from 'react'
import {useState, useEffect} from 'react';
import Nav from './Nav'
import Footer from './Footer'
import {Route, Routes, Link} from 'react-router-dom'

const Login = (props:any) => {




    return (
        <div className = 'loginContainer'>
        <Nav />
        <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
         {/* <button className = 'loginButton' type="button" onClick={handleOpen}>
       Account</button> */}

        <div className = 'welcomeDiv'>
        {props.currentUser.username ?
        <div>
        <h3 className = 'welcomeBack'>WELCOME BACK, {props.currentUser.username.toUpperCase()}! </h3>

        </div>
        :
        null
    }
        <div className = 'logoutDiv'>
            {props.toggleLogout ?
            <div className = 'logoutButtonDiv'>
            <Link to = '/planets'><button className='logoutButton2' > PLANETS</button></Link>
            <Link to = '/tickets'><button className='logoutButton2' >BUY TICKETS</button></Link>
            <Link to = '/shop'><button className='logoutButton2' >SHOP</button></Link>

            <div><button className='logoutButton' onClick={props.handleLogout}>LOGOUT</button>
            </div>
            </div>
            :
            <div className = 'buttonDiv'>
                {props.toggleLogin ?
                //login form
                <div className = 'loginDiv'>
                    <h3 className = 'planetHeader'>LOGIN</h3>
                    <h5 className = 'loginText'>Please enter your username and password:</h5>
                    <form className = 'loginForm' onSubmit={props.handleLogin}>
                    <input className = 'addInput' type='text' placeholder='Enter your username...' onChange={(event)=> {props.setUsername(event.target.value)}}/><br/>
                    <input className = 'addInput' type='password' placeholder='Enter your password...' onChange={(event)=> {props.setPassword(event.target.value)}}/><br/>
                    {props.toggleError ?
                        <h5 className = 'errorMessage'>{props.errorMessage}</h5>
                        :
                        null
                    }
                    <input className='submitButton' type='submit' value='LOGIN'/>
                    </form>
                </div>
                :
                // new user form
                <div className = 'loginDiv'>
                <h3 className = 'planetHeader'>REGISTER</h3>
                <h5 className = 'loginText'>Please fill in the information below:</h5>
                <form className = 'loginForm' onSubmit={props.handleCreateUser}>
                    <input className = 'addInput' type='text' placeholder='Create a username...' onChange={(event)=> {props.setUsername(event.target.value)}}/><br/>
                    <input className = 'addInput' type='password' placeholder='Create a password...' onChange={(event)=> {props.setPassword(event.target.value)}}/><br/>
                    {props.toggleError ?
                    <h5 className = 'errorMessage'>{props.errorMessage}</h5>
                    :
                    null
                    }
                    <input className='submitButton' type='submit' value='CREATE ACCOUNT'/>
                </form>
                </div>
                }
                <div className = 'accountButton' onClick={props.handleToggleForm}>{props.toggleLogin ? 'Don\'t have an account?' : 'Already have an account?'}</div>
            </div>
            }


        </div>
        </div>
        <Footer />
        </div>
)
}

export default Login
