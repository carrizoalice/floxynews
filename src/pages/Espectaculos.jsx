import React from 'react'

class Espectaculos extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <div>
                <section className="secciones-genericas-proximamente"> 
                    <div className="container">
                        <div className="row">
                            <div className="col align-content-center">
                                ESPECTÁCULOS <br/>PROXIMAMENTE
                            </div>
                        </div>
                    </div>
                </section>
            </div>
 
        )
    }    
}

export default Espectaculos

