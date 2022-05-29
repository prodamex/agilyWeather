import React, {useState} from "react";
import './Search.css';
import {useHistory} from "react-router-dom";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Search.css'


const Search = () => {
   
    const [query, setQuery] = useState("")
    const history = useHistory();
    
    const handleValidSearch = (e) => {
        if(query.length < 1){
            return;
        }

        if(e.key === "Enter"){
            history.push('/weather', { cityname: query})
        }
    }
    

    return (



        <div className="main-container">
            <div className="child">
                <h2>The Forecast <br></br>Weather App</h2>
                <input type="text" className="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={handleValidSearch}/>
                <FontAwesomeIcon className="iconSearch" icon={faSearch} size="2x" color=""/>

            </div>
            
     </div>
    );
}

export default Search;