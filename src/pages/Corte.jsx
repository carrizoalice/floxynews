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
     const {reference} = this.props     
 
      return(            
        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-6 card-style"> 
                <div class="card">
                <img className="card-img-top" src="" alt=""/>                   
                <div class="card-body">
                  <h5 class="card-title">Referencia: {reference}</h5>
                  <p class="card-text">Descripción: <br/>{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">{updatetime}</li>
                <li class="list-group-item"></li>
                </ul>
              </div>
        </div>              
      )
    }    
  }
    
 export default Corte
 
