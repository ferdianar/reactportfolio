import React from 'react';
import './Stylesheets/Tools.css';
import softwareOne from './images/jirasoftware.png';
import softwareTwo from './images/Trellologo.svg';
import softwareThree from './images/meistertask.png';

const Software = (props) => {
    return(
        <div className="cardsoftware">
            <img src={props.card} />           
        </div>
    )
}

const Tools = () => {
    return(
        <div className="sectionTools">
        <h1 className="toolsTitle"> Tools Management </h1>
        <div className="software">
            <Software card={softwareOne} />
            <Software card={softwareTwo} />
            <Software card={softwareThree} />
        </div>
        </div>
    )
    
}

export default Tools;