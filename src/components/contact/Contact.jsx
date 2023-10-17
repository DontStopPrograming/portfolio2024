import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import './contact.css'

export const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault()
       emailjs
    .sendForm(
        'service_4uczijs', 
        'template_knc6wdt', 
        form.current, 
        'eDiOiktfyQe9bxZ-r'
        )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <section className = 'contact section' id = 'contact'>
            <h2 className = 'section__title'> Get in touch </h2>
            <span className = 'section__subtitle'> Contact me </span>

            <div className = 'contact__container'>
                {/* <div className = 'contact__content'>
                    <h3 className = 'contact__title'>  Talk to me</h3>
                </div> */}

                <div className = 'contact__info'>
                    <div className = 'contact__card'>
                        <i className = 'bx bx-whatsapp contact__card-icon'> </i>

                        <h3 className = 'contact__card-title'> Whats App</h3>
                        <span className = 'contact__card-data'> +51 9631 999 83 </span>

                        <a href= '' className = 'contact__button'>
                            Write me {''}
                            <i className = 'bx bx-right-arrow-alt contact__button-icon'> </i>
                        </a>
                    </div>

                    <div className = 'contact__card'>
                        <i className = 'bx bxl-contact__card-icon'> </i>

                        <h3 className = 'contact__card-title'> Email</h3>
                        <span className = 'contact__card-data'> user@gmail.com </span>

                        <a href= '' className = 'contact__button'>
                            Write me {''}
                            <i className = 'bx bx-right-arrow-alt contact__button-icon'> </i>
                        </a>
                    </div>
                </div>

                   <form ref = {form} onSubmit = {sendEmail} className = 'contact__form'>
                   <div className = 'contact__form-div'>
                        <label className = 'contact__form-tag'> Name </label>
                        <input
                            type= 'text'
                            name = 'name'
                            className = 'contact__form-input'
                            placeholder = 'Insert your name'
                        />
                    </div>

                    <div className = 'contact__form-div'>
                        <label className = 'contact__form-tag'> Email </label>
                        <input 
                            type= 'email'
                            name = 'email'
                            className = 'contact__form-input'
                            placeholder = 'Insert your email'
                        />
                    </div>

                    <div className = 'contact__form-div contact__form-area'>
                        <label className = 'contact__form-tag'> Project </label>
                        <textarea 
                            name = 'project' 
                            cols = '30' 
                            rows = '10'
                            className = 'contact__form-input'
                            placeholder = 'Write me'
                            
                        />
                    </div>

                    <button className = 'button button--flex'>
                        Send message
                    </button>

                   </form>

                
            </div>

            {/* <div className = 'contact__content'>
                <h3 className = 'contact__title'> Write me your project</h3>
            </div> */}
        </section>
    </>
  )
}