import React from 'react';
import './Intro.css';
import mockup from '../images/image-mockups.png';

function Intro() {
    return (
        <div className='intro'>
          <div>
              <h1>
                  Next generation <br/>
                  digital banking
              </h1>
              <p className='intro-lap' >
                    Take your financial life online. Your Easy Bank account <br/>
                    will be a one stop shop for spending, saving <br/>
                    budgeting, investing and much more. 
              </p>

              <p className='para-mobile' >
                    Take your financial life online. Your Easy Bank  <br/> account
                    will be a one stop shop for spending,  <br/> saving
                    budgeting, investing and much more. 
              </p>

                <button className='intro-btn'>
                    Request Invite
                </button>
          </div>
         <img src={mockup} alt='mobile' />
        </div>
    )
}

export default Intro
