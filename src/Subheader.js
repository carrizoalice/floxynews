import React from 'react';
import './subheader.css';
import Modal from "react-bootstrap/Modal";
import FormNewsletter from './components/FormNewsletter'

const Subheader = ({nombre, compra, venta, nombreblue, comprablue, ventablue}) => {  
    
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
                    <div className="col-lg-8"><strong>{nombre}</strong>: {compra} - {venta} / 
                    <strong> {nombreblue}:</strong> {comprablue} - {ventablue}</div>  
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
            <FormNewsletter onAddEmail={hideModal}/>
            
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
