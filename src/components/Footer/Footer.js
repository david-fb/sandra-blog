import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './Footer.css'

export default function Footer(){
    library.add(fab)
    return(
        <React.Fragment>
            <div className="Footer__container">
                <div className="Footer__social-media">
                  <a href="https://www.facebook.com/Sandra-Blog-106554748345736/"> <FontAwesomeIcon icon={['fab', 'facebook']} />  </a> 
                  <a href="https://instagram.com/sandrablog_u"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </div>
            </div>
        </React.Fragment>
    )
}