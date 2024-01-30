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
          <a className='' href='https://tendency.netlify.app'>
            {/* <div className = 'portfolio__image'> <img src = {pruebaImg}  alt= 'react' /> </div> */}
            <div className='portfolio__image'>

            </div>
          </a>
          <div className='portfolio__title'> <h3> E-commerce Clothes</h3> </div>
          <div className='portfolio__description'>
            <img src={reactImg} />
            <img src={gitImg} />
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