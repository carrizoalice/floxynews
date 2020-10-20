import React from 'react'

class NewsExtends extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    sendText(){
       console.log("probando");
       }
   

    render(){
        const {sendTitle} = this.props

        return(
           
        <div className="col">{sendTitle}
        <div> </div>
        
         </div>
        )
    }
    
}



export default NewsExtends

