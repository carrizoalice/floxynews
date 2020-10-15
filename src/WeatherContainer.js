import React from 'react'
import Weather from './Weather'

class WeatherContainer extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            clime: ['0'],
            temp: 0,
            icon: ['0'],
        }
    }  
    componentDidMount(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Buenos Aires, AR&appid=466ab881dcf2ea1da8075b9242ecbd22')
        .then(res => res.json())
        .then(ClimeJson => this.setState({clime: ClimeJson, temp: ClimeJson.main, icon: ClimeJson.weather}))
    }


    convertToSilsious = (temp) => {
        return Math.floor(temp - 273.15)
    }

    render(){
        const name = this.state.clime.name
        const temp = this.convertToSilsious(this.state.temp.temp)
        const icon = this.state.icon[0].icon

        return <Weather  
        name = {name}
        temp = {temp}
        icon = {icon}
        />        
    }
}

export default WeatherContainer