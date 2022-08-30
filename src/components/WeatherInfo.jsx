import {useContext} from 'react'
import WeatherContext from '../context/WeatherContext'

function WeatherInfo() {

    const {weatherData} = useContext(WeatherContext)

    const date = new Date()
    
  return (
    <div className='container'>
        <div className="city">
            {weatherData.city}
        </div>
            <div className="date">
               {date.getDay()}, { date.getMonth()+1}, { date.getFullYear()}
            </div>
        <div className="temperature">
            <p>{weatherData.temperature}degree celsius</p> 
        </div>
        <div className="sky-info">
           {weatherData.sky}
        </div>
    </div>
  )
}

export default WeatherInfo