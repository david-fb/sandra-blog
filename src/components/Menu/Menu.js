import React from 'react'
import { slide as HamburguerMenu} from 'react-burger-menu'
import {Link} from 'react-router-dom'
import './Menu.css'

export default function Menu(){
    return(
        <section id="Menu-section" className="Menu-nav__container">
            {/* <h1>Menu</h1> */}
                <HamburguerMenu right>
                    {/* <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/soul-blog">Blog</a> */}
                    <Link id="home" className="menu-item" to="/sandra-blog">Home</Link>
                    <Link id="about" className="menu-item" to="/sandra-blog/soul-blog">Soul Resumen</Link>
                    <Link id="about" className="menu-item" to="/sandra-blog/new-blog">New Resumen</Link>
                </HamburguerMenu>
            
        </section>
    )
}