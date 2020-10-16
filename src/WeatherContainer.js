import React from 'react'
import Weather from './Weather'
import API_KEY_WEATHER from './config_keys_weather'

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
        const api_weather = API_KEY_WEATHER
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Buenos Aires, AR&appid=${api_weather}`)
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