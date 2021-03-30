import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import Instagram from '../../Images/instagram.png'
import Linkedin from '../../Images/linkedin.png'
import Github from '../../Images/github.png'
import {linkedinLink, githubLink, instagramLink} from '../../Constants/index';
import './style.css';

const Footer = () => {
return (
    <div className="mainFooterContainer">
        <div className="footer">
            <a href={instagramLink}><img src={Instagram} alt="instagram"/></a>
            <a href={linkedinLink} ><img src={Linkedin} alt="linkedin"/></a>
            <a href={githubLink}><img src={Github} alt="github"/></a>
        </div>
    </div>
)
}

export default Footer