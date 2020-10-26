import React from 'react'


class Corte extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }    
    } 
  
    render(){
     const {description} = this.props
     const {id} = this.props
     const {updatetime} = this.props
     const {location} = this.props
    
 
      return(                
                <div class="card">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">{updatetime}</li>
                {/* <li class="list-group-item">{location.street}</li> */}
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
      )
    }
    
  }
 
 
  
 export default Corte
 
