import './footer.css'
import dev from '../../assets/dev.png'

export const Footer = () => {
  return (
    
     <footer className = 'footer'>
        <div className = 'footer__container'>
            <h3 className = 'footer__title'>
            
            <ul className = 'footer__list'>
                <li>
                    <a href = '#about' className = 'footer__link'> About </a>    
                </li>

                <li>
                    <a href = '#portfolio' className = 'footer__link'> Projects </a>    
                </li>

                <li>
                    <a href = '#skills' className = 'footer__link'> Skills </a>    
                </li>

                <li>
                    <a href = '#services' className = 'footer__link'> Services </a>    
                </li>

                <li>
                    <a href = '#qualification' className = 'footer__link'> Qualification </a>    
                </li>

                <li>
                    <a href = '#contact' className = 'footer__link'> Contact </a>    
                </li>

            </ul>

            {/* <div className = 'footer__social'>

                <a 
                    href = 'https://www.instagram.com/'
                    className = 'footer__social-link'
                    target = '_blank' rel= 'noreferrer'
                >
                    <i className = 'bx bxl-facebook'> </i>

                </a>
            </div> */}

            <span className = 'footer__copy'>
                &#169; All rights reserved { new Date().getFullYear()}
            </span>   

            <div className = 'footer__logo'>
                <img src= {dev} alt="" />
            </div>

            </h3>
        </div>
     </footer>   
    
  ) 
}