import React from 'react'
import Corte from './pages/Corte'
import { getCortesGobAr } from './services/corte'


class CorteContainer extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            corte: ['']
        }
    }  
    async componentDidMount(){
        const responseJson = await getCortesGobAr()
        this.setState({corte: responseJson.incidents})
    }
    

    render(){      
        return(
        this.state.corte.map((corte) => <Corte 
        description = {corte.description} 
        id = {corte.id} 
        updatetime = {corte.updatetime} 
        reference = {corte.reference}
        key = {corte.id}         
        />     
        )
       )
    }    
}

export default CorteContainer