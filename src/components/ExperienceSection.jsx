import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import PhoneMockup from './PhoneMockup.jsx'

export default function ExperienceSection() {
  const sectionRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !visualRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
      visualRef.current.style.setProperty('--word-scale', (0.78 + progress * 0.42).toFixed(3))
      visualRef.current.style.setProperty('--p1-x', `${-270 - progress * 70}px`)
      visualRef.current.style.setProperty('--p1-r', `${-18 + progress * 7}deg`)
      visualRef.current.style.setProperty('--p2-y', `${-progress * 55}px`)
      visualRef.current.style.setProperty('--p2-r', `${3 - progress * 5}deg`)
      visualRef.current.style.setProperty('--p3-x', `${270 + progress * 70}px`)
      visualRef.current.style.setProperty('--p3-r', `${18 - progress * 7}deg`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="experience" id="diferenciais" ref={sectionRef}>
      <div className="experience__visual" ref={visualRef}>
        <div className="experience__word">DÃO</div>
        <div className="experience__phone experience__phone--1"><PhoneMockup image="/assets/products/iphone-14-pro.webp" alt="iPhone 14 Pro" /></div>
        <div className="experience__phone experience__phone--2"><PhoneMockup image="/assets/products/iphone-16-blue.webp" alt="iPhone 16" /></div>
        <div className="experience__phone experience__phone--3"><PhoneMockup image="/assets/products/iphone-16-pro-max.webp" alt="iPhone 16 Pro Max" /></div>
      </div>
      <div className="container experience__copy">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <Reveal>
              <span className="section-kicker section-kicker--light">Diferenciais</span>
              <h2>A escolha certa se sente em cada detalhe.</h2>
              <p>Do primeiro contato ao momento de ligar o seu novo iPhone, a experiência é feita para você escolher com calma e confiança.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
