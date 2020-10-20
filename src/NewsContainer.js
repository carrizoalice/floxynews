import React from 'react'
import News from './News'
import { getNewsGobAr } from './services/news'


class NewsContainer extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            news: [''],
        }
    }  
    async componentDidMount(){
        const responseJson = await getNewsGobAr()
        this.setState({news: responseJson.articles})
    }

    render(){
        // const name = this.state.news[0].author
        return(
        // <App name = {name}/>
        this.state.news.map((news) => <News 
        urlToImage= {news.urlToImage} 
        name = {news.author}
        content = {news.content} 
        publishedAt = {news.publishedAt}
        title = {news.title}
        description = {news.description}
        key={news.generatorID}/>       
        
        )
       )       
        
    }
    
}

export default NewsContainer