import React from 'react'
import logo from './videos/logo.png'

function Navbar(){
    return(
        <div className="navbar">

            <img className='logo' src ={logo} alt='Logo'></img>
            <ul>
                <li><a href="#" class='active' >Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Press</a></li>
            </ul>
            <input type="checkbox" id ="check"/>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
        </div>
    )


}
export default Navbar;