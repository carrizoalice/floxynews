import React from 'react'
import './featured.css';

const Featured = ({title, urlToImage, description}) => (      
    <div className="col-12">
        <div class="card bg-dark text-white">      
        <img className="card-img" src={urlToImage} alt={title}/> 
        <div class="card-img-overlay">
            <div className="content-card">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
            </div>
        </div>
        </div>
    </div>          
)                        

export default Featured