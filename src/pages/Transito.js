import React from 'react'
import '../css/transito.css'
import CorteContainer from '../CorteContainer'



class Transito extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }    
  }


  render(){
    return (
        <div className="transito">
        <div className="container">
          <div className="row">
            <div className="col">
                <CorteContainer />
            </div>
          </div>
        </div>         
      </div>  
    );  
  }
}

export default Transito