import { createContext, useState } from "react";

const WeatherContext = createContext() 

export const WeatherProvider = ({children}) => {

    const[cityName, setCityName] = useState('')

    const[weatherData, setWeatherData] = useState({
        city: '',
        date: '',
        temperature: '',
        sky: '',
    })


    const getWeather = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9c1191a7bc0f0b985ac512dc813d3096`)
            const data = await res.json()
            setWeatherData({
                city:data.name,
                date: new Date(),
                temperature: data.main.temp,
                sky:data.weather[0].description,
            })
        } catch (error) {
            console.log(error)
        }
        
    }

    return <WeatherContext.Provider value = {{
        weatherData,
        cityName,
        setWeatherData,
        setCityName,
        getWeather,
    }}>
        {children}
    </WeatherContext.Provider>
}

export default WeatherContext