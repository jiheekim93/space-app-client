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
import ShowGears from './pages/ShowGears'
import Cart from './pages/Cart'
import AddPlanet from './pages/AddPlanet'
import Login from './pages/Login'
// import {
//   handleIncomingRedirect, 
//   onSessionRestore
// } from "@inrupt/solid-client-authn-browser";
// import { useNavigate } from 'react-router-dom'


const App: React.FC = (props:any) => {
  const [food, setFood] = useState<[]>([])
  const [gears, setGears] = useState<[]>([])
  const [planets, setPlanets] = useState<[]>([])
  //Login
  const [toggleLogin, setToggleLogin] = useState<boolean>(true)
  const [toggleError, setToggleError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<''>('')
  const [toggleLogout, setToggleLogout] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<{}>({})

  const [username, setUsername] = useState<''>('')
  const [password, setPassword] = useState<''>('')
  const [userObj, setUserObj] = useState()


  // sessionStorage.setItem('usernamet', true)
  

  
  // const EventEmitter = require('events');

  // class MyEmitter extends EventEmitter {}
  
  // const myEmitter = new MyEmitter();
  // // increase the limit
  // myEmitter.setMaxListeners(11);
  
  // for(let i = 0; i < 11; i++) {
  //   myEmitter.on('event', _ => console.log(i));
  // }
  
  // myEmitter.emit('event');

  // const navigate = useNavigate();

  // onSessionRestore((currentUrl) => {
  //   // navigate(currentUrl)
  //   console.log(currentUrl)
  // });
  
  const getFood = () => {
    axios
    .get('https://space-meteor.herokuapp.com/food')
    .then(
      (response) => setFood(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}

const getGears = () => {
  axios
  .get('https://space-meteor.herokuapp.com/gear')
  .then(
    (response) => setGears(response.data),
    (err) => console.error(err)
  )
  .catch((error) => console.error(error))
}

const getPlanets = () => {
axios
.get('https://space-meteor.herokuapp.com/planets')
.then(
  (response) => setPlanets(response.data),
  (err) => console.error(err)
)
.catch((error) => console.error(error))
}


  const handleCreateUser = (event:any) => {
    event.preventDefault()
    event.currentTarget.reset()
    let userObj = {
      username: username,
      password: password
    }
    setUsername('')
    setPassword('')
    axios.post('https://space-meteor.herokuapp.com/users/', userObj)
      .then((response) => {
        if (response.data.username) {
          console.log(response.data);
          setToggleError(false)
          setErrorMessage('')
          setCurrentUser(response.data)
          handleToggleLogout()
        } else {
          setErrorMessage(response.data)
          setToggleError(true)
        }
      })
  }


const handleLogin = (event:any) => {
    event.preventDefault()
    event.currentTarget.reset()
    let userObj = {
      username: username,
      password: password
    }
    setUsername('')
    setPassword('')
    axios.post('https://space-meteor.herokuapp.com/sessions', userObj)
      .then((response) => {
        if (response.data.username) {
          console.log(response.data)
          setToggleError(false)
          setErrorMessage('')
          setCurrentUser(response.data)
          handleToggleLogout()
        } else {
          console.log(response);
          setToggleError(true)
          setErrorMessage(response.data)
        }
      }
    ).then(() => {
      getPlanets()
      getFood()
      getGears()
    })
  }  
  
  
  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }

  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }


  // const handleLogout = () => {
  //   setUsername('')
  //   setPassword('')
  //   setCurrentUser({})
  //   handleToggleLogout()
  //   }

    const handleToggleForm = (event:any) => {
      setToggleError(false)
      if(toggleLogin === true) {
        setToggleLogin(false)
      } else {
        setToggleLogin(true)
      }
    }


useEffect(()=> {
  const login = sessionStorage.getItem("");
  getPlanets()
  getGears()
  getFood()
  setUsername('')
}, [])



// useEffect(() => {
//   handleIncomingRedirect({
//     restorePreviousSession: true
//   }).then((info) => {
//     console.log(`Logged in with WebID [${info?.webId}]`)
//   })
// }, []);
// if (!currentUser) {
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCurrentUser(true);
//         }}
//       >
//         I accept
//       </button>
//     </>
//   );
// }
  return(
      <>

       <nav>
        <Link to ='/'>Home</Link>
        <Link to ='/planets'>Planets</Link> 
        <Link to ='/shop'>Shop</Link> 
        <Link to ='/tickets'>Tickets</Link> 
        <Link to ='/cart'>Cart</Link> 
        <Link to ='/login'>Account</Link> 
        {/* <Login  setCurrentUser = {setCurrentUser}
                currentUser = {currentUser}
                handleCreateUser = {handleCreateUser}
                handleLogin = {handleLogin}
                handleLogout = {handleLogout}
                handleToggleForm = {handleToggleForm}
                handleToggleLogout = {handleToggleLogout}
                toggleLogin = {toggleLogin}
                toggleLogout = {toggleLogout}
                username = {username}
                setUsername = {setUsername}
                password = {password}
                setPassword = {setPassword}
                errorMessage = {errorMessage}
                setErrorMessage = {setErrorMessage}
                toggleError = {toggleError}
                setToggleError = {setToggleError}
                setPlanets = {setPlanets}
                setFood = {setFood}
                setGears = {setGears}
                AddPlanet = {AddPlanet}
                /> */}

      </nav>


      <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/planets' element = {<Planets />}/>
      <Route path = '/tickets' element = {<Tickets />}/>      
      <Route path = '/shop' element = {<Shop />}/>
      <Route path = '/food/*' element = {<Food />}/>
      <Route path = '/gear/*' element = {<Gears />}/>
      <Route path = '/cart/*' element = {<Cart />}/>
      <Route path = '/food/:id' element = {<ShowFood food = {food}/>}/>
      <Route path = '/gear/:id' element = {<ShowGears gears = {gears}/>}/>
      <Route path = '/login/' element = {<Login setCurrentUser = {setCurrentUser}
                                                currentUser = {currentUser}
                                                handleCreateUser = {handleCreateUser}
                                                handleLogin = {handleLogin}
                                                handleLogout = {handleLogout}
                                                handleToggleForm = {handleToggleForm}
                                                handleToggleLogout = {handleToggleLogout}
                                                toggleLogin = {toggleLogin}
                                                toggleLogout = {toggleLogout}
                                                username = {username}
                                                setUsername = {setUsername}
                                                password = {password}
                                                setPassword = {setPassword}
                                                errorMessage = {errorMessage}
                                                setErrorMessage = {setErrorMessage}
                                                toggleError = {toggleError}
                                                setToggleError = {setToggleError}
                                                setPlanets = {setPlanets}
                                                setFood = {setFood}
                                                setGears = {setGears}
                                                AddPlanet = {AddPlanet}
                                                />}/>
      </Routes>
      
      

      </>
  )
}

export default App;