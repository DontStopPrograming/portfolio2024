import './portfolio.css'
import reactImg from '../../assets/react.svg'
import gitImg from '../../assets/github.svg'



export const Portfolio = () => {
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'> Portfolio</h2>
      <span className='section__subtitle'> Recent works</span>

      <div className='portfolio__container container grid'>



        <div className='portfolio__box box__photo__first'>
          <a className='photo__hover__description' href='https://tendency.netlify.app'>
            {/* <p className='portfolio__textHover'>  </p> */}

            {/* <div className='hover__content'>
              Este es el contenido
            </div> */}

            <div className='portfolio__image'>

            </div>
          </a>

          <div className='portfolio__title'>
            <h3> E-commerce Clothes</h3>
            <img src={reactImg} />
            <a className='portfolio__title__github' href='https://github.com/DontStopPrograming/e-commerce-clothing'> <img src={gitImg} /> </a>
          </div>

          <div className='portfolio__description'>
            <p> Trend, web application for the sale of fashion clothing. For now made with React.js technology (Project underway) </p>

          </div>

        </div>


        <div className='portfolio__box box__photo__second'>
          <div className='portfolio__image'>  </div>
          <div className='portfolio__title'> <h3> Updating project</h3> </div>
          <div className='portfolio__description'> <span> </span> </div>
        </div>

        <div className='portfolio__box box__photo__three'>
          <div className='portfolio__image'>  </div>
          <div className='portfolio__title'> <h3> Updating project</h3> </div>
          <div className='portfolio__description'> <span> </span> </div>
        </div>
      </div>

    </section>
  )
}