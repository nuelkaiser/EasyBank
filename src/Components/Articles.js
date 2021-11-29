import React from 'react';
import './Article.css'

function Articles( {img, author, heading, text} ) {
    return (
        <div className='article'>
            <img src = {img}  alt={img}/>

               <div> 
                    <h6> {author} </h6>  
                    <h4> {heading} </h4>
                    <p> {text} </p>
              </div>
        </div>
    )
}

export default Articles
