
import './about.css'
import AboutImg from '../../assets/profile.jpg'
import CV from '../../assets/curriculum.pdf'
import { Infor } from './Infor'

export const About = () => {
  return (
    <>
    <section className = 'aboute section' id = 'about'>
        <h2 className = 'section__title'> About me </h2>
        <span className = 'section__subtitle'> My introduction </span>

        <div className= 'about__container container grid'>
            <img src= {AboutImg} alt='' className = 'about__img' />
            <div className = 'about__data'> 
                <Infor />
                <p className = 'about__description'> 
                I live in Peru in the capital of Lima, Peru has a variety of climates and that is great.
                My approach to technology began with video games, from there I was very interested in how video games were built based on hardware and software.
                Graduating with Thecnical Informatic in 2021, These days, I am looking for new job opportunities in the technology field in order to add value.
                </p>

                <a download = '' href= {CV} className = 'button button--flex'>
                    Download CV
                </a>
            </div>
        </div>
    </section>  
    </>
  )
}