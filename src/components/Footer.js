import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';






export default function Footer() {
  return (
    <div className="footer">
        <div>
        <FontAwesomeIcon icon={faInstagram} size="6x"/>
        <FontAwesomeIcon icon={faGithub} size="6x"/>
        <FontAwesomeIcon icon={faLinkedin} size="6x"/>
        </div>
        <p>&copy; 2023 Tom Brine</p>
    </div>
  )
}
