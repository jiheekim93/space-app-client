import * as React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import '../css/home.css';


const Home = (props:any) => {
    return (
        <>
          <div className = 'logoHeader'>
        <img className = 'logo' src = 'https://i.imgur.com/19IQ4Ai.png?1'></img><div className = 'logoName'>APP NAME HERE
        </div>
        </div>
        <div className = 'missionDiv'><div className = 'missionText'>Explore life among the stars with the latest aerospace technology</div>
        <a href = '/planets'><button className = 'planetsButton'>Browse Planets</button></a></div>
       
    
    <div className='showcase'>
    <video src="https://i.imgur.com/ZEfN9E0.mp4" loop muted autoPlay={true}></video>
    </div>
    
        </>
    )
}

export default Home