import React from 'react';
import './subheader.css';

const Subheader = ({nombre, compra, venta}) => (    
        <section className="subheader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">{nombre}: {compra} - {venta}</div> 
                    <div className="col-lg-2">Recibí newsletters</div>
                    <div className="col-lg-2">Buscar</div>
                </div>
            </div>                        
        </section>
    )

export default Subheader
