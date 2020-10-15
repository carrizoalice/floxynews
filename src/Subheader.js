import React from 'react';
import './subheader.css';

function Subheader(props){
    return(
        <section className="subheader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">Dólar  BNA: $76,50 / $82,50 Blue:  $165,00 / $171,00</div> 
                    <div className="col-lg-2">Recibí newsletters</div>
                    <div className="col-lg-2">Buscar</div>
                </div>
            </div>                        
        </section>
    )
}

export default Subheader