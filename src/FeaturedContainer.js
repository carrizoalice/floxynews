import React from 'react'
import Featured from './Featured'
import { getNewsGobAr } from './services/news'

class FeaturedContainer extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            newsfeatured: ['0'],
            title: ['0'],
            urlToImage: ['0'],
            description: ['0'],
        }
    }  
    async componentDidMount(){
        const responseJson = await getNewsGobAr()
        this.setState({newsfeatured: responseJson.articles})
    }

    render(){
        const title = this.state.newsfeatured[0].title
        const urlToImage = this.state.newsfeatured[0].urlToImage
        const description = this.state.newsfeatured[0].description

        return <Featured 
        title = {title}
        urlToImage = {urlToImage}
        description = {description}
        />        
    }    
}

export default FeaturedContainer

