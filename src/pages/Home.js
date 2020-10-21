import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from '../NewsContainer';
import FeaturedContainer from '../FeaturedContainer' 
import Subscription from '../Subscription';
import '../components/navbar.css'



class Home extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render(){
    return(
      <div>
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
      </div>
    )
  }  
}

export default Home