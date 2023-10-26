import { useState } from 'react'
import '../services/services.css'

export const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
       setToggleState(index)
    }   
    
    (toggleState !== 0 ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
    )

  return (
    <section className = 'services section' id = 'services'>
        <h2 className = 'section__title'> Services </h2>
        <span className = 'section_subtitle'> What I offer</span>

        <div className = 'container grid'>
            <div className = 'services__content'>
            <div>
                <i className = 'uil uil-web-grid services__icon'> </i>
                <h3 className = 'services__title'> Web <br /> Page </h3>
            </div>

            <span className = 'services__button' onClick = {() => toggleTab(1)}> View More
            <i className = 'uil uil-arrow-right services__button-icon'></i>
            </span>    


            <div className = {toggleState === 1 ? 'services__modal active-modal' : 'services__modal'} >
                
                <div className = 'services__modal-content'>
                    <i onClick = {() => setToggleState(0)} className = 'uil uil-times services__modal-close'> </i>

                    <h3 className = 'services__modal-title'> </h3>
                    <p className = 'services__modal-description'> 
                        Services with one year of experience. 
                        I always aim to offer quality work to my clients.
                    </p>

                    <ul className = 'services__modal-services grid'>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Diseño responsivo para proporcionar una experiencia optima
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Navegacion clara que permite encontrar la informacion que buscan
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Contenido relevante y atractivo
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                I position your company brand.
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Seguridad y proteccion de datos
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
            </div>



            <div className = 'services__content'>
            <div>
                <i className = 'uil uil-arrow services__icon'> </i>
                <h3 className = 'services__title'> UX/UI <br /> Designer </h3>
            </div>

            <span className = 'services__button' onClick = {() => toggleTab(2)}> View More
            <i className = 'uil uil-arrow-right services__button-icon'></i>
            </span>    

            <div className = {toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
                <div className = 'services__modal-content'>
                    <i onClick = {() => setToggleState(0)} className = 'uil uil-times services__modal-close'> </i>

                    <h3 className = 'services__modal-title'> </h3>
                    <p className = 'services__modal-description'> 
                        Services with one year of experience. 
                        I always aim to offer quality work to my clients.
                    </p>

                    <ul className = 'services__modal-services grid'>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Diseño visual atractivo
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Usabilidad y experiencia del usuario
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Adaptabilidad a multitples dispositivos
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                I position your company brand
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Optimizacion de SEO para busquedas
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
            </div>



            <div className = 'services__content'>
            <div>
                <i className = 'uil uil-edit services__icon'> </i>
                <h3 className = 'services__title'> App <br /> Web </h3>
            </div>

            <span className = 'services__button' onClick = {() => toggleTab(3)}> View More
            <i className = 'uil uil-arrow-right services__button-icon'></i>
            </span>    


            <div className = {toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                <div className = 'services__modal-content'>
                    <i onClick = {() => setToggleState(0)} className = 'uil uil-times services__modal-close'> </i>

                    <h3 className = 'services__modal-title'> </h3>
                    <p className = 'services__modal-description'> 
                        Services with one year of experience. 
                        I always aim to offer quality work to my clients.
                    </p>

                    <ul className = 'services__modal-services grid'>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Interfaz de usuario amigable
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Seguridad de datos
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Rendimiento optimo, tiempos de carga
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Actualizaciones y mejoras
                            </p>
                        </li>

                        <li className = 'services__modal-service'> 
                            <i className = 'uil uil-check-circle services__modal-icon'>
                            </i>
                            <p className = 'services__modal-info'> 
                                Funcionalidad completa
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
            </div>

            </div>
     </section>   
    
  )
}