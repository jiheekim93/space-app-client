import * as React from 'react'
import {useState, useEffect} from 'react';

const Login = (props:any) => {
 


    
    return (
        <div>
         {/* <button className = 'loginButton' type="button" onClick={handleOpen}>
       Account</button> */}

        <div className = 'welcomeDiv'>
        {props.currentUser.username ?
        <div>
        <h3>Welcome back, {props.currentUser.username}! </h3>

        </div>
        :
        null
    }
        <div className = 'logoutDiv'>
            {props.toggleLogout ?
            <div className = 'logoutButtonDiv'>
            <button className='logoutButton' onClick={props.handleLogout}>Logout</button>
            </div>
            :
            <div className = 'buttonDiv'>
                {props.toggleLogin ?
                //login form
                <div className = 'loginDiv'>
                    <h3>Sign In To Your Account</h3>
                    <form className = 'loginForm' onSubmit={props.handleLogin}>
                    <input className = 'addInput' type='text' placeholder='username...' onChange={(event)=> {props.setUsername(event.target.value)}}/><br/>
                    <input className = 'addInput' type='password' placeholder='password...' onChange={(event)=> {props.setPassword(event.target.value)}}/><br/>
                    {props.toggleError ?
                        <h5 className = 'errorMessage'>{props.errorMessage}</h5>
                        :
                        null
                    }
                    <input className='submitButton' type='submit' value='Login'/>
                    </form>
                </div>
                :
                // new user form
                <div className = 'loginDiv'>
                <h3>Create an Account</h3>
                <form className = 'loginForm' onSubmit={props.handleCreateUser}>
                    <input className = 'addInput' type='text' placeholder='username...' onChange={(event)=> {props.setUsername(event.target.value)}}/><br/>
                    <input className = 'addInput' type='password' placeholder='password...' onChange={(event)=> {props.setPassword(event.target.value)}}/><br/>
                    {props.toggleError ?
                    <h5 className = 'errorMessage'>{props.errorMessage}</h5>
                    :
                    null
                    }
                    <input className='submitButton' type='submit' value='Create Account'/>
                </form>
                </div>
                }
                <button className = 'accountButton' onClick={props.handleToggleForm}>{props.toggleLogin ? 'Don\'t have an account?' : 'Already have an account?'}</button>
            </div>
            }


        </div>
        </div>
        </div>
)
}

export default Login