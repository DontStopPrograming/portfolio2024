import './portfolio.css'


export const Portfolio = () => {
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'> Portfolio</h2>
      <span className='section__subtitle'> Recent works</span>
      <div className='portfolio__container container grid'>

        <a href='https://tendency.netlify.app'>
          <div className='portfolio__box box__photo__first'>
            {/* <div className = 'portfolio__image'> <img src = {pruebaImg}  alt= 'react' /> </div> */}
            <div className='portfolio__image'>  </div>
            <div className='portfolio__title'> <h3> E-commerce Clothes</h3> </div>
            <div className='portfolio__description'> <span>  </span> </div>
          </div>
        </a>

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