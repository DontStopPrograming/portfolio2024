
import './about.css'
import AboutImg from '../../assets/profile.jpg'
import CV from '../../assets/docWebDev.pdf'
import { Infor } from './Infor'

export const About = () => {
  return (
    <>
      <section className='about section' id='about'>
        <h2 className='section__title'> About me </h2>
        <span className='section__subtitle'> My introduction </span>

        <div className='about__container container grid'>
          <img src={AboutImg} alt='' className='about__img' />
          <div className='about__data'>
            <Infor />
            <p className='about__description'>
              I'm in Lima, Peru. Fascination with video games sparked my tech journey. Obtained my degree in Informatics in 11/2021. Searching for thecnology opportunities to add value.
            </p>

            <a download='' href={CV} className='button button--flex'>
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  )
}