import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import PropTypes from 'prop-types'

// const App = ({ name }) => <h2>{name}</h2>  

// App.propTypes = {
//   name : PropTypes.string
// }

// export default App;
const News = ({name, urlToImage, content, publishedAt, title, description}) => (      
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 align-items-stretch">
            <div className="card">
              <div className="card-img-cont">
                <img className="card-img-top" src={urlToImage} alt={name}/> 
              </div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p class="card-text">{content}</p>
                <p class="card-text">{description}</p>
                <p>{publishedAt}</p>
              </div> 
            </div> 
          </div>          
)                        

export default News


