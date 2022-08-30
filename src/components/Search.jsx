import {useContext, useState, useEffect} from 'react'
import WeatherContext from '../context/WeatherContext'
import {FaSearch} from 'react-icons/fa'


function Search() {
  
  const {setCityName, getWeather, cityName} = useContext(WeatherContext)

  const[input, setInput] = useState('')
  

 const onChange = (e) => {
    setInput(e.target.value)
  }

  const onClick = () => {
      setCityName(input)
     }

     useEffect(() => {

      getWeather()
  }, [getWeather, cityName])

  return (
    <div className='search-div'>
        <input type="text" className="search-weather" placeholder='City Name' value={input} onChange={onChange} />
        <button className="btn" onClick={onClick}> <FaSearch /> </button>
    </div>
  )
}

export default Search