import React from 'react'
import { Form } from "react-bootstrap";

class FormNewsletter extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleInput = this.handleInput.bind(this); //para evitar esto se puede hacer una arrow function
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        // console.log(e.target.value, e.target.texto);
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        
    }

    handleSubmit(e){    
        e.preventDefault();     
        this.props.onAddEmail();   
        console.log(this.state);        
    }
    


    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <label className="label-fxy">
                <input className="input-modal-fxy" type="text" name="email" onChange={this.handleInput} placeholder="Introduce tu e-mail"/>
                </label><br/>
                <input className="btn btn-outline-floxy" type="submit" value="Enviar"/>                
            </Form>
        )
    }    
}




export default FormNewsletter

