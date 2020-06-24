import React from 'react';
import './Stylesheets/Footer.css';
import logoFooter from './images/profilepictures.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="partOne">
                <img className="logofooter" src={logoFooter} />
                <h1>Ferdian AR</h1>
                <small> Frontend Web Developer</small>
                <p>I am a Frontend web developer and Design Enthusiast. I always designing user interface in spare time.</p>
            </div>
            <div className="partTwo">
                <h2>Timeline</h2>
                <p>Homepage</p>
                <p>Experience</p>
                <p>Portfolio</p>
                <p>About Us</p>
            </div>
            <div className="partThree">
                <h2>Find Me</h2>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>WhatsApp</p>
            </div>
            <div className="partFour">
                <h2>Feedback</h2>
                <input type="text" placeholder="Type a feedback" />
                <button className="submit">Submit</button>
            </div>
        </div>
    )
}

export default Footer;