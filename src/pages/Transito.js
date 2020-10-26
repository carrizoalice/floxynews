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
          <div className="row"><span className="title-transito">El tránsito en C.A.B.A</span></div>
          <div className="row">
                <CorteContainer />            
          </div>
        </div>         
      </div>  
    );  
  }
}

export default Transito