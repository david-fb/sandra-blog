import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import imgSandra from '../../images/imgSandra.jpg'
import FondoSoul from '../../images/fondoSoul.jpg'

export default function Home(){
    return(
        <div className="Home__container">
            <div className="Menu__title">
                    <h1>SandraBlog</h1><span>.</span>
                </div>
            <div className="Home-wrapper">
                
                <div className="Home__container__img">
                    <img src={imgSandra} alt="imagen de sandra animada"/>
                    <h2>Lorem Ipsum</h2>
                </div>

                <div className="Home__container__text">
                    <div className="Home__text__blog-entries">
                        <h2>Bienvenidos</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    
                    <div className="Home__container__text__blog-entries">
                        <div className="Home__blog-entries">
                            <Link to="/soul-blog"><img src={FondoSoul}/></Link>
                        </div>
                        <div className="Home__blog-entries">
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}