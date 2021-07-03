import React from 'react'
import './SoulBlog.css'
import fondoSoul from '../../images/fondoSoul.jpg'
import logoSoul from '../../images/Logo_Soul.png'

export default function SoulBlog(){
    return(
        <section className="SoulBlog__container">
                <div className="SoulBlog__header">
                    <div className="SoulBlog__header__img">
                        <img src={fondoSoul} alt="fondo"/>
                    </div>
                    <div className="SoulBlog__header__text">
                        <img src={logoSoul} alt="logo"/>
                        <p>
                        Es una pel&iacute;cula presentada por Disney que trata de aprovechar 
                        los momentos de la vida, habla de la muerte y la chispa para 
                        aferrarse a la vida, es una producci&oacute;n de Pixar Animation Studios, 
                        es la historia de Joe, un profesor de m&uacute;sica.
                        </p>    
                            <a href="#blog-section" className="SoulBlog__header__link">Leer más</a>
                    </div>
                </div>

            <div className="SoulBlog__content" id="blog-section">
                <div className="Blog__paragraph">
                    <p className="reveal">
                    Joe Gardner es un pianista de Jazz, que, pese a las pocas oportunidades de tocar con una 
                    gran banda, lo &uacute;nico que tiene para mantenerse en la m&uacute;sica es ser profesor de esta misma, pero 
                    para Joe no es una raz&oacute;n suficiente para dejar de soñar y alg&uacute;n d&iacute;a ser parte de una gran banda 
                    de Jazz, pese que su madre no lo apoya, pues ella prefiere verlo en una carrera m&aacute;s seria y con 
                    mayor estabilidad.
                    </p>
                    <p className="reveal">
                    Joe recibe una inesperada llamada, la cual era una invitación para una audici&oacute;n, esta podr&iacute;a ser 
                    la gran oportunidad de hacer parte del grupo musical de una gran musico. Joe se presenta a la prueba, 
                    el cual es elegido y debe ir esa misma noche, debe tocar en un bar con la banda para que la musico vea
                    que tal lo acepta el p&uacute;blico, presentada la función, sale del bar muy feliz hablando por teléfono, 
                    iba muy emocionado, el cual no se percata, cae en una alcantarilla y muere, es aquí donde empieza 
                    su viaje entre la vida y la muerte.
                    </p>
                    <p className="reveal">
                    Al presentar este gran accidente su alma aparece en un gran camino largo, el cual va dirigido al final de 
                    la vida, es la muerte, pero Joe se niega a creer lo sucedido y trata de escapar, corriendo en sentido contrario 
                    buscando una salida, pero cae, llegando su alma a otro lugar, el cual es como un antes de la vida, 
                    donde las almas se preparan para el gran viaje a la Tierra. En este lugar se conoce con 22, es un 
                    alma que se está preparando para nacer, pero no ha podido encontrar su chispa, Joe es confundido 
                    con un psicólogo y le dan la tarea de preparar a 22 a encontrar su chispa, para que así por fin pueda 
                    viajar a la Tierra.
                    </p>
                    <p className="reveal">
                    Emprenden un gran viaje de aventuras Joe y 22, ya que, si 22 encuentra su chispa completaría el pase a la Tierra, 
                    pero como no lo quiere, Joe tomaría ese pase para el volver el a la vida. Conocen a los místicos, quienes ayudan a 
                    las almas perdidas a volver a sus cuerpos, entre el afán de volver a su vida se lanza junto con 22 a su cuerpo que se 
                    encontraba en una clínica, pero 22 se queda en el cuerpo de Joe y este queda en el cuerpo de un gato.
                    </p>
                    <p className="reveal">
                    Estos dos son encontrados por la contadora de las almas, quien buscaba a Joe para devolverlo a la muerte, ambos son llevados 
                    nuevamente al antes, 22 tendr&iacute;a su pase completo, con este Joe vuelve a la Tierra, pero no es feliz, no se siente bien, se da 
                    cuenta que 22 se ha convertido en un alma perdida, la busca y la logra sanar, 22 va con su pase a la 
                    Tierra y Joe se preparar&iacute;a ahora si para morir. Pero por todo lo que vivi&oacute; Joe recibe otra oportunidad de vida y es devuelto a la Tierra.
                    </p>
                </div>
            </div>
        </section>
    )
}