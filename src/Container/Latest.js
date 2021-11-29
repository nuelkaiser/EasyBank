import React from 'react';
import Articles from '../Components/Articles'
import './Latest.css';
import Currency from '../images/image-currency.jpg';
import Resturant from '../images/image-restaurant.jpg';
import Plane from '../images/image-plane.jpg';
import Celebration from '../images/image-confetti.jpg';

function Latest() {
    return (
        <div className='latest'>
            <h1>Latest Articles</h1>

            <div className='latest-container'>
                <Articles
                    img = {Currency}
                    heading = {`Recieve oney in any currency with no fees`}
                    author = {`By Claire Robinson`}
                    text = {`The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single...`}
                />

                <Articles
                    img = {Resturant}
                    heading = {`Test yourself without worrying about money`}
                    author = {`By Wilson Hutton`}
                    text = {`Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...`}
                />

                <Articles
                    img = {Plane}
                    heading = {`Take easy bank card wherever you go`}
                    author = {`By Wilson Hutton`}
                    text = {`We want you to enjoy your travels. This why we don't charge any fees on purchases while you're abroad. We'll even show you...`}
                />

                <Articles
                    img = {Celebration}
                    heading = {`Our inivite-only beta accounts are now live!`}
                    author = {`By Wilson Hutton`}
                    text = {`After a lot of hard work by the whole team, we're excited to launch our close beta. It is easy to request an invitation through the site...`}
                />

            </div>
        </div>
    )
}

export default Latest
