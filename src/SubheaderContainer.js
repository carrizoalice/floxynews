import React from 'react'
import Subheader from './Subheader'

class SubheaderContainer extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cotizacion: ['0'],
            compra: '',
            venta: '',
        }
    }
    
    componentDidMount(){        
        fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
        .then(res => res.json())
        .then(CotizacionJson => this.setState({cotizacion: CotizacionJson[0].casa}))
    }

    render() {
        const nombre = this.state.cotizacion.nombre
        const compra = this.state.cotizacion.compra
        const venta = this.state.cotizacion.venta

        return <Subheader 
        nombre = {nombre}
        compra = {compra}
        venta = {venta}
        /> 
    }
}

export default SubheaderContainer