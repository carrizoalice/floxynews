import React from 'react';

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row footer-menu">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <span className="footer-title">Temas para ver</span>
                        <ul>
                            <li>Coronavirus</li> 
                            <li>Tarjeta alimentar</li>
                            <li>Clases</li>  
                            <li>Moreno</li>                            
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <span className="footer-title">Secciones</span>
                        <ul>
                            <li>Política</li>
                            <li>Policiales</li> 
                            <li>Sociedad</li>                             
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <span className="footer-title">Entretenimientos</span>
                        <ul>
                            <li>Espectáculos</li>
                            <li>Televisión</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <span className="footer-title">Redes Sociales</span>
                        <div className="redes"><img src="assets/facebook.png"/></div>
                        <div className="redes"><img src="assets/twitter.png"/></div>
                        <div className="redes"><img src="assets/youtube.png"/></div>
                    </div>
                </div>
                <div className="row footer-base">
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 text-center footer-logo">
                        {props.name}
                    </div>                    
                    <div className="col-12 col-sm-9 col-md-9 col-lg-9">
                    Editorial Aconcagua Argentina S.A. es licenciataria del Diario Floxy
                    Registro de Propiedad Intelectual: 0644448<br/>
                    Copyright 2020 - Grupo Floxy - Todos los derechos reservados                    
                    </div>
                </div>
            </div>               
        </div>
    )
}

export default Footer