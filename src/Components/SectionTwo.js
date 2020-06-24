import React from 'react';
import './Stylesheets/SectionTwo.css';
import snapshoot from './images/Destination2.png';
import snapshoot2 from './images/Cowork2.png';
import snapshoot3 from './images/Partner2.png';

const CardProject = (props) => {
    return (
        <div className="cardProject">
            <img className="pictureProject" src={props.image} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <button className="view">View project</button>
        </div>
    )
}

const firstDescription = 'Destination platform for all traveller when they want to fill the vacation.';
const secondDescription = 'Platform rent for user when going to work but bored work on home.';
const thirdDescription = 'Platform for user when they want to find their partnership in live.';

const SectionTwo = () => {
    return (
        <div className="sectionTwo">
            <h1>Recently Project</h1>
            <div className="recentlyProject">
                <CardProject name="Destinations" description={firstDescription} image={snapshoot} />
                <CardProject name="Coworking" description={secondDescription} image={snapshoot2} />
                <CardProject name="Partnership" description={thirdDescription} image={snapshoot3} />
            </div>
        </div>
    )
}

export default SectionTwo;