import React from 'react'
import './subscription.css';

function Subscription(props) {
    return (
        <section className="subscription">
            <div className="container">
                <div className="row">
                    <div className="col col-md-7 col-lg-8 col-xl-8 text-center d-flex align-content-center flex-wrap">
                        <div className="col">
                            <h2>{props.title}</h2>
                            <p>{props.subtitle}</p>                        
                            <button type="button" className="btn btn-outline-danger">¡QUIERO EL DIARIO!</button>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-5 col-lg-4 col-xl-4">
                        <img src="assets/diario_floxy.png" className="img-fluid" alt="Diario Floxy"/>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Subscription


