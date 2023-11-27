import './social.css'
import CV from '../../assets/curriculum.pdf'

export const Social = () => {
  return (
    <>
        <div className='home__social'>
            <a href= 'https://www.credly.com/users/juan-jesus-nazario-vega/badges' className = 'home__social-icon' target = ''>
            <img src= './src/assets/cisco.svg' alt="" />
            </a>

            <a href='https://github.com/DontStopPrograming' className = 'home__social-icon' target = ''>
            <img src= './src/assets/github.svg' alt="" />
            
            </a>

            <a href= {CV} className = 'home__social-icon' target = ''>
            <img src= './src/assets/file.png' alt="" />
            </a>
        </div>
    </>
  )
}