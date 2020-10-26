import React from 'react'
import Subheader from './Subheader'

class SubheaderContainer extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cotizacion: ['0'],
            compra: '',
            venta: '',
            cotizacionblue: ['0'],
            comprablue: '',
            ventablue: '',
        }
        
    }
    
    componentDidMount(){        
        fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
        .then(res => res.json())
        .then(CotizacionJson => this.setState({cotizacion: CotizacionJson[0].casa, cotizacionblue: CotizacionJson[1].casa}))
    }


    render() {
        const nombre = this.state.cotizacion.nombre
        const compra = this.state.cotizacion.compra
        const venta = this.state.cotizacion.venta
        const nombreblue = this.state.cotizacionblue.nombre
        const comprablue = this.state.cotizacionblue.compra
        const ventablue = this.state.cotizacionblue.venta

        

        return <Subheader 
        nombre = {nombre}
        compra = {compra}
        venta = {venta}
        nombreblue = {nombreblue}
        comprablue = {comprablue}
        ventablue = {ventablue}        

        /> 
    }
}

export default SubheaderContainer