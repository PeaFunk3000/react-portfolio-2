import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.css"
import socials from "../socials.json";


export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a href={socials.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href={socials.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={socials.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <p>&copy; 2023 Tom Brine</p>
    </div>
  )
}
