import React from 'react'
import "./index.scss"

function Navbar() {


  function handleToggle() {
    document.body.classList.toggle("dark")
  }
  return (
    <div>
      <nav className='container'>
        <h2>Malik</h2>
        <ul>
          <li>Main</li>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
        </ul>
        <button onClick={handleToggle}>Mode change</button>
      </nav>
    </div>
  )
}

export default Navbar