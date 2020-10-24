import React from 'react'

class Floxygrilla extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <div>
                <section className="secciones-genericas-proximamente"> 
                    <div className="container">
                        <div className="row">
                            <div className="col align-content-center">
                            <div id="puzzle_container">
                                <table id="puzzle">
                                </table>
                                </div>

                                <div id="hints_container">
                                    <h3>Vertical</h3>
                                        <div id="vertical_hints_container"></div>
                                    <h3>Horizontal</h3>
                                        <div id="horizontal_hints_container"></div>
                                </div>

                                <div id="buttons_container">
                                    <button id="clear_all">Clear All</button>
                                    <button id="check">Check</button>
                                    <button id="solve">Solve</button>
                                    <button id="clue">Clue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
 
        )
    }    
}

export default Floxygrilla

