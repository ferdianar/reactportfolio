import React from 'react';
import './Stylesheets/Management.css';
import scrum from './images/scrum.jpg';
import scrumOne from './images/scrumOne.jpg';
import scrumTwo from './images/scrumTwo.jpg';

const ScrumPicture = (props) => {
    return(
        <div className="scrumPicture">
        <img className="scrumCapture" src={props.scrum} alt="" />
        </div>
    )
}

const Management = () => {
    return(
        <div className="management">
            <h1>Project Management</h1>
            <p>I am work with Agile Methodology. I use Scrum Framework for project management. Write on post It and usually , i also use digital tools.</p>
            <div className="scrumBoard">
                <ScrumPicture scrum={scrum} />
                <ScrumPicture scrum={scrumOne} />
                <ScrumPicture scrum={scrumTwo} />
            </div>
        </div>
    )
}
export default Management;