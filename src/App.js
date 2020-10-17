import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './NewsContainer';
import Footer from './Footer'
import Subheader from './Subheader'
import FeaturedContainer from './FeaturedContainer' 
import Subscription from './Subscription';
import SubheaderContainer from './SubheaderContainer' 


function App(){
  return (
    <div className="app">
      <Header name="Floxy News"/>   
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
              <NewsContainer />
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

export default App