import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
const Main = () => {
  return (
    <div className='background'>
      <h1>Dice Game</h1>
      <Link to="/game">
      <button>Play Now</button>
      </Link>
     
    </div>
  )
}

export default Main