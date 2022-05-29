import React from 'react';
import Weather from '../components/Weather';
import Btn from './Btn'
import "./style.css"

  
  

const Home = () => {

   /* const search = async (e) => {

        
        if(e.key === 'Enter') {
            const data = await fetch(query);

            setWeather(data);
            setQuery('');

        }
        
    } */
    


    return (
        <div className="tete">
               <Weather/>
               <Btn />
        </div>
           

    )
    
}

export default (Home);