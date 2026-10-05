import { useEffect, useRef } from 'react'
import PhoneMockup from './PhoneMockup.jsx'

const WHATSAPP_URL = 'https://wa.me/5583986604037?text=Ol%C3%A1%21%20Quero%20encontrar%20meu%20pr%C3%B3ximo%20iPhone.'

export default function Hero() {
  const heroRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const scene = sceneRef.current
    if (!hero || !scene) return

    const move = (event) => {
      const box = hero.getBoundingClientRect()
      const x = (event.clientX - box.left) / box.width - 0.5
      const y = (event.clientY - box.top) / box.height - 0.5
      scene.style.setProperty('--rx', `${-y * 10}deg`)
      scene.style.setProperty('--ry', `${x * 14}deg`)
      scene.style.setProperty('--mx', `${x * 22}px`)
      scene.style.setProperty('--my', `${y * 18}px`)
      scene.style.setProperty('--fmy', `${y * 12.6}px`)
      scene.style.setProperty('--bmx', `${x * -12}px`)
      scene.style.setProperty('--bmy', `${y * -10}px`)
      scene.style.setProperty('--brx', `${y * 5.5}deg`)
      scene.style.setProperty('--bry', `${x * -7.5 + 16}deg`)
    }

    const reset = () => {
      scene.style.setProperty('--rx', '0deg')
      scene.style.setProperty('--ry', '0deg')
      scene.style.setProperty('--mx', '0px')
      scene.style.setProperty('--my', '0px')
      scene.style.setProperty('--fmy', '0px')
      scene.style.setProperty('--bmx', '0px')
      scene.style.setProperty('--bmy', '0px')
      scene.style.setProperty('--brx', '0deg')
      scene.style.setProperty('--bry', '16deg')
    }

    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', reset)
    return () => {
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', reset)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-grid" />
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="container hero__content">
        <div className="row min-vh-100 align-items-center g-5 pt-5">
          <div className="col-lg-6 hero-copy">
            <div className="hero-kicker reveal-now"><span /> Loja especializada Apple · Campina Grande</div>
            <h1 className="hero-title reveal-now reveal-delay-1">
              Seu próximo <span>iPhone</span>,<br /> do jeito certo de comprar.
            </h1>
            <p className="hero-subtitle reveal-now reveal-delay-2">
              iPhones novos e seminovos, atendimento próximo e uma experiência pensada para você comprar com segurança.
            </p>
            <div className="d-flex flex-wrap gap-3 hero-actions reveal-now reveal-delay-3">
              <a className="btn-dao btn-dao--light" href="#produtos">Conhecer os produtos <span>↓</span></a>
              <a className="btn-dao btn-dao--ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Quero comprar ↗</a>
            </div>
            <div className="hero-proof reveal-now reveal-delay-4">
              <div><strong>1 ano</strong><span>garantia no seminovo</span></div>
              <div><strong>Troca</strong><span>aceitamos seu iPhone</span></div>
              <div><strong>CG</strong><span>loja física</span></div>
            </div>
          </div>

          <div className="col-lg-6 hero-visual-wrap">
            <div className="hero-scene" ref={sceneRef}>
              <div className="scene-ring scene-ring--a" />
              <div className="scene-ring scene-ring--b" />
              <div className="hero-phone hero-phone--back">
                <PhoneMockup image="/assets/products/iphone-15-pro.webp" alt="iPhone 15 Pro" />
              </div>
              <div className="hero-phone hero-phone--front">
                <PhoneMockup image="/assets/products/iphone-16-pro-max.webp" alt="iPhone 16 Pro Max" priority />
              </div>
              <div className="floating-pill floating-pill--one"><span className="dot dot--green" /> Disponível agora</div>
              <div className="floating-pill floating-pill--two">Novos e seminovos</div>
              <div className="floating-glass-card">
                <span className="glass-label">DÃO SELECT</span>
                <strong>Escolha premium.<br />Sem complicação.</strong>
                <span className="glass-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-note">role para descobrir <span>⌄</span></div>
    </section>
  )
}
