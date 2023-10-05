import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Mininavtwo = () => {
    let Navigate = useNavigate()

    const Home = () =>{
        Navigate('/')
    }
    const Fruits = () =>{
        Navigate('/Products')
    }
    
  return (
    <div className='option-btns'>
        <button onClick={Home}>Home</button>
        <span>/</span>
        <button onClick={Fruits}>Fruits</button>
    </div>
    
  )
}