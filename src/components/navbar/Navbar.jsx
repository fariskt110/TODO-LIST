import React from 'react'
import '../navbar/Navbar.css'


export default function Navbar(){
    
    return(
        <nav>
            <label className='logo'>Todo</label>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/addtodo">ADD </a></li>
              <li><a href='/viewtodo'>View</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>

              
        </nav>
    )
}
