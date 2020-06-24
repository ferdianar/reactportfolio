import React from 'react';
import './Stylesheets/Skill.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/javascript.png';
import bootstrap from './images/bootstrap.png';
import materialize from './images/materialize.png';
import adobexd from './images/adobexd.png';
import animate from './images/animate.png';
import anime from './images/anime.png';
import figma from './images/figma.svg';
import whims from './images/Whimsical.png';
import reactjs from './images/reactJS.png';
import sass from './images/sass.png';


const Logoskill = (props) => {
    return (
        <div className="skill">
            <img className="imageSkill" src={props.gambar} />
        </div>
    )
}


const Skill = () => {
    return(
        <div className="skillset">
            <h1>Skill Acquired</h1>
            <div className="allskill">
                <Logoskill gambar={html} />
                <Logoskill gambar={css} />
                <Logoskill gambar={js} />
                <Logoskill gambar={bootstrap} />
                <Logoskill gambar={materialize} />
            </div>
            <div className="allskill2">
                <Logoskill gambar={adobexd} />
                <Logoskill gambar={sass} />
                <Logoskill gambar={whims} />
                <Logoskill gambar={reactjs} />
                <Logoskill gambar={figma} />
            </div>
        </div>
    )
}

export default Skill;