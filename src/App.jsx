import './App.css'
import { IntlProvider } from 'react-intl'

import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Portfolio } from './components/portfolio/Portfolio'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Services } from './components/services/Services'
import { Qualification } from './components/qualification/Qualification'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { ScrollUp } from './components/scrollup/ScrollUp'

import esMessages from './components/skills/es.json'

const App = () => {
  const locale = 'es'

  return (
    <IntlProvider locale={locale} defaultLocale={locale} esMessages={esMessages} >

      <Header />
      <main className='main'>
        <Home />
        <Portfolio />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>

    </IntlProvider>
  )
}

export default App

