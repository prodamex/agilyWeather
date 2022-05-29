import React from "react";
import {useHistory} from "react-router-dom";
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Btn() {
    let history = useHistory();
  
    function handleClick() {
      history.goBack()
      
    }
  
    return (
      <div>
    
      <FontAwesomeIcon onClick={handleClick} className="icon" icon={faArrowAltCircleLeft} size="4x" />

      </div>
      
      
    );
  }