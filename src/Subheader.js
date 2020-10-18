import React from 'react';
import './subheader.css';
import Modal from "react-bootstrap/Modal";

const Subheader = ({nombre, compra, venta}) => {  
    
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };  

     return(
     <>
        <section className="subheader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">{nombre}: {compra} - {venta}</div> 
                    <div className="col-lg-2">
                        <button className="btn btn-outline-floxy" onClick={showModal}>Recibí newsletters</button>
                        </div>
                    <div className="col-lg-2">Buscar</div>
                </div>
            </div>    
            <Modal 
                show={isOpen} 
                onHide={hideModal}               
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
            <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">Suscribite al Newsletter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Recibí lo mejor de Floxy News en tu casilla de E-mail
            <form>
                <label className="label-fxy">
                <input className="input-modal-fxy" type="text" name="name" placeholder="Introduce tu e-mail"/>
                </label><br/>
                <input type="submit" value="Enviar" />
            </form>
            </Modal.Body>
            {/* <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            </Modal.Footer> */}
            </Modal>                              
        </section>
        </>
     )
        
     }

export default Subheader
