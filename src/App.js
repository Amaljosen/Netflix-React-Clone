import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Netflix from './Netflix'
import Video from './Video'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/netflix' element={<Netflix/>}/>
        <Route path='/video' element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App
