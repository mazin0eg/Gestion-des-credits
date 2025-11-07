import React from "react"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<div className="p-8"><h1 className="text-2xl font-bold">Admin Dashboard</h1><p>Vous êtes connecté en tant qu'administrateur.</p></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
