import React from 'react'
import './Home.css'
import imgSandra from '../../images/imgSandra.jpg'

export default function Home(){
    return(
        <div className="Home__container">
            <div className="Menu__title">
                    <span>SandraBlog</span><span>.</span>
                </div>
            <div className="Home-wrapper">
                <div className="Home__container__img">
                    <img src={imgSandra} alt="imagen de sandra animada"/>
                </div>
                <div className="Home__container__text">
                    <h1>Bienvenidos</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,
                    </p>
                    <div className="Home__container__text__blog-entries">
                        <div className="Home__blog-entries">

                        </div>
                        <div className="Home__blog-entries">
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}