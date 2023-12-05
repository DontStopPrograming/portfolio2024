import './social.css'
import CV from '../../assets/docWebDev.pdf'
import imgCisco from '/src/assets/cisco.svg'
import imgGit from '/src/assets/github.svg'
import imgResume from '/src/assets/file.png'

export const Social = () => {
  return (
    <>
        <div className='home__social'>
            <a href= 'https://www.credly.com/users/juan-jesus-nazario-vega/badges' className = 'home__social-icon' target = '__blank'>
            <img src = {imgCisco}  alt="" />
            </a>

            <a href='https://github.com/DontStopPrograming' className = 'home__social-icon' target = '__blank'>
            <img src = {imgGit}  alt="" />
            
            </a>

            <a href= {CV} className = 'home__social-icon' target = '__blank'>
            <img src= {imgResume} alt="" />
            </a>
        </div>
    </>
  )
}