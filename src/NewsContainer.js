import React from 'react'
import News from './News'

class NewsContainer extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            news: ['0'],
        }
    }  
    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=47e220d319514589833c444653c15ffc')
        .then(res => res.json())
        .then(newsJson => this.setState({news: newsJson.articles}))
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
        key={news.generatorID}/>)
        )                 
    }
    
}

export default NewsContainer