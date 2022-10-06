import React from 'react'
import {NavLink} from 'react-router-dom'
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

//         <NavLink
//         to="/"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </NavLink>
//       {/* <NavLink
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         About
//       </NavLink> */}
//       <NavLink
//         to="/add"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Add
//       </NavLink>
//     </nav>
//   )
// }

// export default NavBar


function NavBar() {
  return (
    <nav className='nav'>
      <NavLink exact to='/'className='site-title'>Contact App</NavLink>
      <ul>
        <li className='active'>
          <NavLink exact to='/add'>Add</NavLink>
        </li>
        <li className='active'>
          {/* <NavLink exact to='/search'>Search</NavLink> */}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar