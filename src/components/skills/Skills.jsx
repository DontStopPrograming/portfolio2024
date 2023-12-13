import './skills.css'
import { OtherTechnologies } from './OtherTechnologies'
import { Frontend } from './Frontend'
import { Backend } from './Backend'
import { Languages } from './Languages'


import { FormattedMessage } from 'react-intl'

export const Skills = () => {
  return (
    <>
      <section className='skills section' id='skills'>
        <h2 className='section__title'>
          <FormattedMessage id='skills.title' defaultMessage='Skills' />
        </h2>

        <span className='section__subtitle'>
          My technical level
        </span>

        <div className='skills__container container grid'>
          <Frontend />
          <Backend />
          <Languages />
          <OtherTechnologies />
        </div>
      </section>
    </>
  )
}