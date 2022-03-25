import React from 'react';
import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Add from './pages/Add';
import Edit from './pages/Edit';
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import Planets from './pages/Planets'

const App: React.FC = () => {
  return(
      <>
      <h1>hello</h1>
      <Add />
      <Planets />
      </>
  )
}

export default App;
