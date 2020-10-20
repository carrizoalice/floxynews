import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './NewsContainer';
import Footer from './Footer'
import FeaturedContainer from './FeaturedContainer' 
import Subscription from './Subscription';
import SubheaderContainer from './SubheaderContainer' 
import  Menuitems from './components/Menuitems'
import './components/navbar.css'

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }    
  }

  state = {clicked: false}

  handleClick = () =>{
      this.setState({ clicked: !this.state.clicked})
  }

  displayMobileMenu = () => {
    return (
        <section className="site-nav">
            <div className="container">
              <div className="row">
                <div className="col">
                  <span class="nav-hamb-title">SECCIONES</span>
                  <div className="navbar-hamb">
                      <div onClick={this.handleClick}>
                          <i className={this.state.clicked ? 'P' : 'R'}></i>
                      </div>
                      <ul>
                          {Menuitems.map((item, index)=>{
                              return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                              )
                          })} 
                      </ul>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}


  render(){
    return (
      <div className="app">
        <Header name="Floxy News" clickMenu={this.displayMobileMenu}/>
        <SubheaderContainer/>
        <section className="featured"> 
          <div className="container">
            <div className="row">
            <FeaturedContainer /> 
            </div>
          </div>
        </section>   
        <section className="news-section">
          <div className="container">
            <div className="col-12 col-lg-9 news">
              <div className="row">
                <NewsContainer onAddEmail={this.handleAddEmail}/>
              </div>
            </div>
            <div className="col-12 col-lg-3 sidebar">
              <div className="row">
                  <div className="col"><img src="assets/banner_300_x_600_sidebar.gif" className="img-fluid"/></div>
              </div>
            </div>
          </div>
        </section> 
        <Subscription title="Suscríbete a Club Floxy News" subtitle="Recibí el diario en tu casa y disfrutá de todos los beneficios."/>   
        <Footer name="Floxy News"/>
      </div>
    );
  
  }
}

export default App