import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.css"


export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <p>&copy; 2023 Tom Brine</p>
    </div>
  )
}
