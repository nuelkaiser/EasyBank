import React from 'react';
import Logo from '../images/Logo';
import Facebook from '../images/Facebook';
import Youtube from '../images/Youtube';
import Twitter from '../images/Twitter';
import Pinterest from '../images/Pinterest'
import Instagram from '../images/Instagram';
import './Footer.css'


function Footer() {
    return (
        <div>
           <div className = 'footer'>
                <div className ='footer-nav'>
                    <div className ='media-container'>
                        <Logo className ='footer-logo'/>

                        <div className ='media'>
                            <Facebook/>
                            <Youtube/>
                            <Twitter/> 
                           <Pinterest/>
                            <Instagram/>
                        </div>
                    </div>

                    <div>
                        <ul className ='nav-list'>
                            <li>
                                About us
                            </li>

                            <li>
                                Contact
                            </li>

                            <li>
                                Blog
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className = 'nav-list'>
                            <li>
                                Careers
                            </li>

                            <li>
                                Support
                            </li>

                            <li>
                                Privacy Policy
                            </li>
                        </ul>
                    </div>

                </div>
                
              <div className='footer-copy-right'>
                  <button className='footer-btn'>
                      Request Invite
                  </button> 
                 <small>   &copy; EasyBank. All Rights Reserved </small>
              </div>

            </div>
        </div>
    )
}

export default Footer
