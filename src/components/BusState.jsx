import { render } from '@testing-library/react'
import React from 'react'
import Header from '../Header'

class BusState extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }    


handleBusState = () => {
    return(
        <div className="busstate container">
            <div className="row">
                <div className="col">

                </div>
            </div>
        </div>
    )
}    


    render(){
        return(
            <div className="busstate container">
                <div className="row">
                    <div className="col">
                        <Header sendBus={this.handleBusState}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default BusState

