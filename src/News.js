import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';

// const News = ({name, urlToImage, content, publishedAt, title, description}) => (      
//           <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 align-items-stretch">
//             <div className="card">
//               <div className="card-img-cont">
//                 <img className="card-img-top" src={urlToImage} alt={name}/> 
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p class="card-text">{content}</p>
//                 <p class="card-text">{description}</p>
//                 <p>{publishedAt}</p>
//               </div> 
//             </div> 
//           </div>          
// )    

const News = ({name, urlToImage, publishedAt, title, description, author}) => (      
  <div className="col-sm-6 col-md-4 col-lg-6 col-xl-6 align-items-stretch card-style">
    <div className="card-group">
    <div className="card">
    <img className="card-img-top" src={urlToImage} alt={name}/> 
      <div className="card-body">
        <div class="badges">
            <span class="badge badge-floxy">{name}</span>
        </div>        
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
      </div>
    </div>
  </div>   
  </div>      
) 
 
export default News


