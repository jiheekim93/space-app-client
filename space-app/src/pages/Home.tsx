import * as React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import '../css/home.css';


const Home = (props:any) => {
    return (
        <>
        <div className = 'homeHeader'>
          <div className = 'logoHeader'>
        <img className = 'logo' src = 'https://i.imgur.com/OIvkSRz.png?1'></img><div className = 'logoName'>MISSION ATOM
        </div>
        </div>
        <a className = 'signinButton' href = '/login'>SIGN IN</a>
        </div>
        <div className = 'missionDiv'><div className = 'missionText'>Experience Life Between the Stars with the Latest Aerospace Technology</div>

        <a className = 'planetsButton' href = '/planets'><div >LAUNCH SITE</div></a></div>


    <div className='showcase'>
    <video src="https://i.imgur.com/ZEfN9E0.mp4" loop muted autoPlay={true}></video>
    </div>

        </>
    )
}

export default Home
