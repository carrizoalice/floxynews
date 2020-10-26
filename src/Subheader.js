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
                    <div className="col-12 col-xs-8 col-md-7 col-lg-7"><strong>{nombre}</strong>: {compra} - {venta} / 
                    <strong> {nombreblue}:</strong> {comprablue} - {ventablue}</div>  
                    <div className="col-12 col-xs-4 col-md-3 col-lg-3">
                        <button className="btn btn-outline-floxy" onClick={showModal}>Recibí newsletters</button>
                        </div>
                    <div className="d-none xs-2 col-md-2 d-lg-block col-lg-2 center fly-grilla"><a href="/Floxygrilla">Floxygrilla</a></div>
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
