import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Footer from './Footer'
import Subscription from './Subscription';
import SubheaderContainer from './SubheaderContainer' 
import Menuitems from './components/Menuitems'
import './components/navbar.css'
import Politica from './pages/Politica'
import Economia from './pages/Economia'
import Sociedad from './pages/Sociedad'
import Espectaculos from './pages/Espectaculos'
import Floxygrilla from './pages/Floxygrilla'
import Transito from './pages/Transito'
import { Route, BrowserRouter as Router} from "react-router-dom"




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
      <Router>
      <div className="app">
        <Header name="Floxy News" clickMenu={this.displayMobileMenu}/>
        <SubheaderContainer/>    
        <Route path="/" component={Home} exact/> 
        <Route path="/Politica" component={Politica}/>
        <Route path="/Economia" component={Economia} exact/> 
        <Route path="/Sociedad" component={Sociedad} exact/>     
        <Route path="/Espectaculos" component={Espectaculos} />
        <Route path="/Floxygrilla" component={Floxygrilla} />  
        <Route path="/Transito" component={Transito} />              
        <Subscription title="Suscríbete a Club Floxy News" subtitle="Recibí el diario en tu casa y disfrutá de todos los beneficios."/>   
        <Footer name="Floxy News"/>        
      </div>
      </Router>
    );  
  }
}

export default App