import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContainer from './NewsContainer';
import Footer from './Footer'

// const App = ({name, urlToImage, content, publishedAt, title, description}) => (      
//           <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-4 align-items-stretch">
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

function App(){
  return (
    <div className="app">
      <Header name="Floxy News"/>      
      <section className="news-section">
        <div className="container">
          <div className="row mt4">
            <NewsContainer />
          </div>
        </div>
      </section>      
      <Footer name="Floxy News"/>
    </div>
  );
}

export default App