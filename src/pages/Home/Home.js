import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import imgSandra from '../../images/imgSandra.jpg'
import FondoSoul from '../../images/fondoSoul.jpg'
import HablemosSoul from '../../images/hablemos-Soul.png'

export default function Home(){
    return(
        <div className="Home__container">
                <div className="Menu__title">
                    <h1>SandraBlog</h1><span>.</span>
                </div>
            <div className="Home-wrapper">
                
                <div className="Home__container__img">
                    <img src={imgSandra} alt="imagen de sandra animada"/>
                </div>

                <div className="Home__container__text">
                    <div className="Home__text__blog-entries">
                        <h2>Bienvenidos</h2>
                        <p>
                        En este espacio compartiré  las películas que desde mi punto crítico dejan un mensaje acerca de la vida.
                        </p>
                        <p>&Eacute;chale un vistazo a mis últimas entradas, espero que sea de tu agrado</p>
                    </div>
                    
                    <div className="Home__container__text__blog-entries">
                        <div className="Home__blog-entries">
                            <Link to="/soul-blog"><img src={FondoSoul} alt="soul resumen preview"/></Link>
                        </div>
                        <div className="Home__blog-entries">
                        <Link to="/hablemos-soul"><img src={HablemosSoul} alt="soul resumen preview"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}