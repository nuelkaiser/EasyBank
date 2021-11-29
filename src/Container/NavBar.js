import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import Logo from '../images/Logo';

function NavBar() {
    const [toggle, setToggle] = useState(false);

     function isToggle(params) {
         setToggle(!toggle)
     }
     

    return (
        <div className='Nav' >
            <Logo />
            <ul className='nav-content' >
                <li className = 'home'>Home</li>
                <li className = 'about'>About</li>
                <li className = 'contact'>Contact</li>
                <li className = 'blog'>Blog</li>
                <li className = 'careers'>Careers</li>
            </ul>

            <button className='nav-btn'>
                Request Invite
            </button>

            <div className={ toggle ? 'hamburger toggle' : 'hamburger'}  onClick={isToggle} >

            </div>

                
            <div className ={ toggle ? 'mobile nav' : 'mobile' } >
                <ul className ='mobile-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div> 
        </div>
    )
}

export default NavBar
