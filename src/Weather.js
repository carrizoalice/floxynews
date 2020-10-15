import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flexbox-react/dist/flexboxgrid.min.css';

const Weather = ({name, temp, icon}) => (      
          <div className="row header-weather middle-xs">            
              <div className="col-4 text-center">
                  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="{name}"/>
              </div>               
              <div className="col-8 clime">
                <span className="col temp">{temp}</span>
                <span className="col city">{name}</span>
              </div>              
          </div> 
                  
)                        

export default Weather