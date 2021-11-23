import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div onClick={() => console.log('hello')}>
      <Link to="/list">go list</Link>
    </div>
  )
}

export default Home
