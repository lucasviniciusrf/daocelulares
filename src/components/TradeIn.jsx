import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function TradeIn() {
  const [model, setModel] = useState('iPhone 14 Pro')
  const [battery, setBattery] = useState(88)
  const message = encodeURIComponent(`Olá! Quero avaliar meu ${model} na troca por outro iPhone. Saúde da bateria: ${battery}%.`)

  return (
    <section className="tradein section-space" id="trocas">
      <div className="container">
        <div className="tradein-shell">
          <div className="tradein-glow" />
          <div className="row g-5 align-items-center position-relative">
            <div className="col-lg-6">
              <Reveal>
                <span className="section-kicker section-kicker--light">Avaliação sem compromisso</span>
                <h2>Seu iPhone antigo<br />vale desconto no novo.</h2>
                <p>Faça uma avaliação rápida do seu aparelho e use o valor para facilitar o upgrade.</p>
                <div className="tradein-points">
                  <span>01 · informe seu modelo</span>
                  <span>02 · conte o estado</span>
                  <span>03 · receba uma avaliação</span>
                </div>
                <div className="tradein-upgrade" aria-label="Seu iPhone entra na avaliação para um upgrade">
                  <div><small>SEU APARELHO</small><strong>{model}</strong></div>
                  <span className="tradein-upgrade__arrow" aria-hidden="true">→</span>
                  <div className="tradein-upgrade__next"><img src="/assets/products/iphone-16-pro-max.webp" alt="" loading="lazy" /><span><small>PRÓXIMO PASSO</small><strong>Seu novo iPhone</strong></span></div>
                </div>
                <a className="tradein-start" href="#simulador-troca">Começar minha avaliação <span aria-hidden="true">↗</span></a>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={120}>
                <div className="tradein-card" id="simulador-troca">
                  <span className="tradein-card__eyebrow">SIMULADOR DE TROCA</span>
                  <label htmlFor="tradein-model">Qual é o seu iPhone?</label>
                  <select id="tradein-model" className="form-select" value={model} onChange={(e) => setModel(e.target.value)}>
                    <option>iPhone 15 Pro Max</option><option>iPhone 15 Pro</option><option>iPhone 15</option><option>iPhone 14 Pro</option><option>iPhone 14</option><option>iPhone 13</option><option>iPhone 12</option><option>Outro modelo</option>
                  </select>
                  <label htmlFor="tradein-battery" className="mt-4 d-flex justify-content-between">Saúde da bateria <strong>{battery}%</strong></label>
                  <input id="tradein-battery" type="range" className="form-range" min="70" max="100" value={battery} onChange={(e) => setBattery(e.target.value)} />
                  <div className="tradein-status" aria-live="polite"><i /> Informe estes dados para iniciar a avaliação</div>
                  <a className="btn-dao btn-dao--light w-100 justify-content-between mt-4" href={`https://wa.me/5583986604037?text=${message}`} target="_blank" rel="noreferrer">Quero avaliar meu iPhone <span>↗</span></a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
