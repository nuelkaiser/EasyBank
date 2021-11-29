import React from 'react';
import Reason from '../Components/Reason';
import Banking from '../images/icon-online.svg';
import Budgeting from '../images/icon-budgeting.svg';
import Api from '../images/icon-api.svg';
import Onboarding from '../images/icon-onboarding.svg';

import './why.css'

function Why() {
    return (
        <div className='why-space'>
           <div>
                <h1>
                    Why choose EasyBank?
                </h1>
                <p>
                    We Leverage Open Banking to turn your bank account into your financial hub, <br/>
                    control your finances like never before.
                </p>
           </div>

          <div className='reason-container'>
               <Reason img = {Banking} 
                    heading = {`Online Banking`} 
                    text = {`Our modern web and mobile application allow you to keep track of your finances where ever you are in the world.`}
               />
               

               <Reason img={Budgeting} 
                    heading = {'Simple Budgeting'} 
                    text = {`See excatly where your money goes each month. Recieve notifications when you're close to hitting your limits.`}
               />
              

               <Reason img={Onboarding} 
                    heading = {`Fast Onboarding`} 
                    text = {`We do not do branches. Open your account in minutes online and start taking control of your finances right away.`}
               />
                 

               <Reason img={Api} 
                    heading = {`Open Api`} 
                    text = {`Manage your saving, investments, pension and much more from one account. Tracking your money has never been easier.`}
               />
            
          </div>
        </div>
    )
}

export default Why
