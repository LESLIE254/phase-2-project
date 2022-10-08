import React from 'react'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <nav className='nav'>
      <Link exact to='/'className='site-title'>Contact App</Link>
      <ul>
        <li className='active'>
          <Link exact to='/add'>Add</Link>
        </li>
        <li className='active'>
          <Link exact to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar