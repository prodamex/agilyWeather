import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import  {findOne} from '../api/fetch'
import './Weather.css'


const Weather = () => {

    const [weather, setWeather] = useState({})
    const location = useLocation(); 
    
    useEffect(()=>{
        findOne(location.state.cityname).then(data => {
            if(data){
                setWeather(data)
            }
        })
    }, [])


    const dateBuilder = (d) => {
        let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout",
        "Septembre","Octobre","Novembre","Decembre"];

        let days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi",
        "Samedi"];
              
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return`${day} ${date} ${month} ${year}`
    }

    console.log(weather.sys)
    return (
        
        <div>
            {weather.sys && (

                <div className="city">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <h2 className="city-name">
                    <span>{dateBuilder(new Date())}</span>
                    </h2>
                        
                   
                    <div className="city-temp">
                       Jour{Math.round(weather.main.temp)}
                        <sup>°C</sup>
                    </div>
                    <div className="city-temp">
                       Nuit{Math.round(weather.main.temp)}
                        <sup>°C</sup>
                    </div>
                    <div className="info">
                        
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>

          )}
        </div>
       
    );
}

export default Weather;