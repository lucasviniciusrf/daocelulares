import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import TrustSection from './components/TrustSection.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import WhyBuy from './components/WhyBuy.jsx'
import Categories from './components/Categories.jsx'
import TradeIn from './components/TradeIn.jsx'
import FounderSection from './components/FounderSection.jsx'
import AboutDao from './components/AboutDao.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ExperienceSection />
        <TrustSection />
        <ProductShowcase />
        <WhyBuy />
        <Categories />
        <TradeIn />
        <FounderSection />
        <AboutDao />
        <FinalCTA />
      </main>
      <Footer />
      <a className="floating-whatsapp" href="https://wa.me/5583986604037?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20D%C3%A3o." target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
        <span><svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M20.2 11.7a8.2 8.2 0 0 1-12 7.2L4 20l1.2-4a8.2 8.2 0 1 1 15-4.3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8.5 8.4c.2-.4.5-.5.8-.4l1 .4c.3.1.5.4.4.7l-.4 1c.6 1.1 1.4 1.9 2.6 2.5l.9-.4c.3-.1.6 0 .8.3l.5.9c.2.3.1.6-.2.9-.5.4-1 .6-1.6.5-3.2-.6-5.6-3-6-6.1-.1-.5.1-1 .5-1.3Z" fill="currentColor"/></svg></span><b>WhatsApp</b>
      </a>
    </>
  )
}
