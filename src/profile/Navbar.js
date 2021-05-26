import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink ,
  } from 'react-router-dom'
function NavBar() {
    return (
        <div>
           <ul>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>=
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            
          </ul>
        </div>
    )
}

export default NavBar