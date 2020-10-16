import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './NewsContainer';
import Footer from './Footer'
import Subheader from './Subheader'
import FeaturedContainer from './FeaturedContainer' 


function App(){
  return (
    <div className="app">
      <Header name="Floxy News"/>   
      <Subheader/>
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
                <div><img src="assets/banner_300_x_600_sidebar.gif"/></div>
            </div>
          </div>
        </div>
      </section>    
      <Footer name="Floxy News"/>
    </div>
  );
}

export default App