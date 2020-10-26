import React from 'react'
import Modal from "react-bootstrap/Modal";
import '../css/floxygrilla.css'


 const Floxygrilla = () => {  

        const [isOpen, setIsOpen] = React.useState(false);
        const [title, setTitle] = React.useState("Transitioning...");
      
        const showModal = () => {
          setIsOpen(true);
        };
      
        const hideModal = () => {
          setIsOpen(false);
          setTitle("Transitioning...");
        }; 

        const iframe = '<iframe height="700vh" style="width: 100%;" scrolling="no" title="fx." src="http://celebrandofiestas.com.ar/new/floxygrilla/" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/ycw/pen/JqwbQw/">fx.</a> by ycw(<a href="https://codepen.io/ycw">@ycw</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>';
        
        function Iframe(props) {
            return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
          }          
          
        return(
            <>
            <div>
                <section className="floxygrilla"> 
                    <div className="container">
                        <div className="row">
                            <div className="col">                                
                                <span className="fxy-title">Floxygrilla</span>
                                <p>El clásico juego de las palabras con una distribución de letras ideal para jugar con el vocabulario castellano.</p>
                                <span className="fxy-title">Reglas</span>
                                <p>• Las palabras se escriben en forma vertical u horizontal.<br/>
                                    • Se escribe una letra por casilla hasta formar la palabra (sin tildes).<br/>
                                    • Las letras en las casillas de intersección debe ser válida para la palabra horizontal y la palabra vertical.<br/>                                  
                                    • Gana el jugador si logra completar todas las casillas del tablero<br/>
                                    • La pista más grande es cuando el jugador completa una línea horizontal y en la línea horizontal tiene una vertical será de gran ayuda.</p>
                                    
                                    <button className="btn btn-info-fxy" onClick={showModal}>Hacé click y empezá a jugar!</button>    
                            </div>
                        </div>
                    </div>
                    <Modal 
                        show={isOpen} 
                        dialogClassName="modal-floxy"
                        onHide={hideModal}               
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                    <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Floxygrilla</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Seleccioná una palabra para comenzar el juego                   
                    <Modal.Footer>
                        <button onClick={hideModal}>Cerrar</button>
                    </Modal.Footer>                  
                    </Modal.Body>
                    <Iframe iframe={iframe} />
                    </Modal> 
                </section>
            </div>
            </>
        )
    }    


export default Floxygrilla

