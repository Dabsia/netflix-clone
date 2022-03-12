import React from 'react';
import './App.css'
import Home from './Pages/Home/Home';
import NetflixShow from './Pages/NetflixShow/NetflixShow';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return(
    <Routes>
      <Route exact path = '/' element = {<Home/>} />
      <Route path = '/netflix-show' element = {<NetflixShow/>} />
    </Routes>
  )
}
export default App;
