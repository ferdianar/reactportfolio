import React from 'react';
import './Stylesheets/About.css';
import imageAbout from './images/greenphoto.jpg';

const boldText = {"fontWeight":"bold"};

const About = () => {
    return (
        <div className="about">
            <div className="imageAbout">
                <img className="image" src={imageAbout} alt="" />
            </div>
            <div className="descriptionAbout">
                <h1>About Me</h1>
                <p>My background is <span style={boldText}> Informatics Engineering </span>. Since I was on Vocational School, i already know about <span style={boldText}> Computer and Networking </span>. Everyday my teacher always explain about that. I sometimes, i also try to write a code in Computer. First time, i write code <span style={boldText}> HTML and CSS </span>. I try to write and learn consistency. Till now, i like what i do. I make that hobby to help more people.</p>
            </div>
        </div>
    )
}

export default About;