import React from 'react';
import './Stylesheets/SectionOne.css';
import pictures from './images/profilepictures.png';
import pictures2 from './images/greenphoto.jpg';

const CardHire = (props) => {
    return(
        <div className="cardHire">
            <img className="cardPicture" src={props.pictures} />
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}

const SectionOne = () => {
    return(
        <div className="sectionOne">
            <h1> Why Should Hire Me ? </h1>
            <div className="cards">
                <CardHire title="Perfectionist" subtitle="Every task have finished with fast development and creative" pictures={pictures} />
                <CardHire title="Development" subtitle="Fast and good project work according to client's request" pictures={pictures2} />
                <CardHire title="Experienced" subtitle="Complete new daily tasks in accordance with the specified time" pictures={pictures2} />
                <CardHire title="Proficiency" subtitle="Experienced in their fields and accustomed to deadlines" pictures={pictures} />
            </div>
        </div>
    )
}

export default SectionOne;