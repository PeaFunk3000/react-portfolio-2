import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.css"





export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <FontAwesomeIcon icon={faInstagram} size="10x"/>
        <FontAwesomeIcon icon={faGithub} size="10x"/>
        <FontAwesomeIcon icon={faLinkedin} size="10x"/>
        </div>
        <p>&copy; 2023 Tom Brine</p>
    </div>
  )
}
