import React from 'react'
import {Link} from 'react-router-dom'
// function NavBar() {
//     const linkStyles = {
//         display: "inline-block",
//         width: "50px",
//         padding: "12px",
//         margin: "0 6px 6px",
//         background: "blue",
//         textDecoration: "none",
//         color: "white",
//       };
//   return (
//     <nav className='nav'>

//         <Link
//         to="/"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </Link>
//       {/* <Link
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         About
//       </Link> */}
//       <Link
//         to="/add"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Add
//       </Link>
//     </nav>
//   )
// }

// export default NavBar


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