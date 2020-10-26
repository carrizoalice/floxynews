import React from 'react';
import WeatherContainer from './WeatherContainer';
import HamburgerMenu from "react-hamburger-menu/dist/HamburgerMenu";


class Header extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            date: new Date(),
        }
    } 

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    displayNavBar = () => {
        return (
            <ul className='nav'></ul>  
        )
    }   
      
    render(){
        const opt = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
        const date = this.state.date.toLocaleDateString("es-ES", opt)        

        return(
            <nav className="navbar navbar-expand-lg justify-content-between navbar-dark nav-fxy">
                <div className="container justify-content-center">
                    <div className="col-2 col-md-4 col-lg-4 date">  
                        <div className="hamburger">
                            <HamburgerMenu                                
                                isOpen = {this.state.open}
                                menuClicked = { () => this.handleClick()}                        
                                width = {36}
                                height = {30}
                                strokeWidth = {1}
                                rotate = {0}
                                color = 'black'
                                borderRadius = {0}
                                animationDuration = {0.5}                                
                            />                              
                        </div>   
                        <div>
                        { this.state.open ?  this.props.clickMenu() : null}
                        {window.innerWidth > 1200 ? this.displayNavBar() : this.displayNavBar()}
                        </div> 
                        <div className="d-none d-lg-block date-hour">{date}</div>
                    </div>
                    <div className="col-10 col-md-4 col-lg-4 justify-content-center logo">
                        <a href="/" className="navbar-brand"><h1 className="logo-font">{this.props.name}</h1></a>
                    </div>
                    <div className="d-none d-md-none d-lg-block col-lg-1 text-center col-transit">
                         <a href="/Transito"><img src="assets/transito.png" alt="transito" className="header-transit"/></a>
                    </div>               
                    <div className="d-none col-md-2 d-lg-block col-md-5 col-lg-3">
                        <WeatherContainer />
                    </div> 
                </div>     
            </nav>
        )
    }

   
}

export default Header