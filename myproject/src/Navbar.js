
import React from 'react'
import logo from './videos/logo.png'

function Navbar(){
    return(
        <div className="navbar">

            <img className='logo' src ={logo} alt='Logo'></img>
            <input type="checkbox" id ="click"/>
                <label for="click" class="menu-btn">
                    <i class="fas fa-bars"></i>
                </label>
            <ul>
                <li><a href="Home" class='active' >Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Press</a></li>
            </ul>
        </div>
    )

}
export default Navbar