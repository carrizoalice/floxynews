import React from 'react';
import WeatherContainer from './WeatherContainer';

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            date: new Date(),
        }
    } 
    
    render(){
        const opt = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
        const date = this.state.date.toLocaleDateString("es-ES", opt)        

        return(
            <nav className="navbar navbar-expand-lg justify-content-between navbar-dark nav-fxy">
                <div className="container justify-content-center">
                    <div className="col-3 col-md-4 col-lg-4 date"> 
                                               
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">		  	
                            <span class="navbar-toggler-icon"></span>
                            </button>
                       
                        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#home">Actualidad<span class="sr-only">(current)</span></a>
                            </li>		    	
                            <li class="nav-item">
                                <a class="nav-link" href="#peliculas-destacadas">Espectáculos<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#series-online">Deportes</a>
                            </li>
                            </ul>
                        </div>                        */}
                        <div className="mr-auto date-hour ">{date}</div>
                    </div>
                    <div className="col-9 col-md-5 col-lg-4 justify-content-center logo">
                        <a href="#" className="navbar-brand"><h1 className="logo-font">{this.props.name}</h1></a>
                    </div>
                    <div className="d-none d-md-block col-md-1 col-lg-1 text-center col-transit">
                         <img src="assets/transito.png" alt="transito" className="header-transit"/>
                    </div>               
                    <div className="d-none d-md-block col-sm-2 col-md-3 col-lg-3">
                        <WeatherContainer />
                    </div> 
                </div>     
            </nav>
        )
    }

   
}

export default Header