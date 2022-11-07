import React from 'react'
import logo from './logo.png'

function Navbar(){
    return(
        <div className="navbar">
            <img src ={logo} alt='Logo'></img>
            <ul>
                <li><a href="#" class='active' >Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Press</a></li>
            </ul>
        </div>
    )


}
export default Navbar;