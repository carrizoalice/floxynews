import React from 'react';
import WeatherContainer from './WeatherContainer';

function Header(props){
    return(
        <nav className="navbar navbar-expand-lg justify-content-between navbar-dark nav-fxy">
            <div className="container justify-content-center">
                <div className="date col-4">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">		  	
                        <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="logo col-4 justify-content-center">
                    <a href="#" className="navbar-brand"><h1 className="logo-font">{props.name}</h1></a>
                </div>
                <div className="col-1 text-center col-transit">
                     <img src="assets/transito.png" alt="transito" className="header-transit"/>
                </div>               
                <div className="wheather col-3">
                    <WeatherContainer />
                </div> 
            </div> 
                       
        </nav>
    )
}

export default Header