import { useEffect, useState } from 'react'
import { products } from '../data/products.js'
import PhoneMockup from './PhoneMockup.jsx'
import Reveal from './Reveal.jsx'

function ProductModal({ product, onClose }) {
  if (!product) return null
  const message = encodeURIComponent(`Olá! Vi no site da Dão Celulares o ${product.name} (${product.storage[0]}). Gostaria de saber disponibilidade e condições.`)
  return (
    <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={onClose}>
      <div className="product-modal__panel" onMouseDown={(e) => e.stopPropagation()}>
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Fechar detalhes do produto">×</button>
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-6 product-modal__visual product-modal__visual--photo">
            <PhoneMockup image={product.image} alt={product.name} />
          </div>
          <div className="col-lg-6 product-modal__info">
            <span className="section-kicker">{product.badge}</span>
            <h3 id="product-modal-title">{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-option-label">Armazenamento</div>
            <div className="option-pills">{product.storage.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="product-option-label mt-4">Acabamento em destaque</div>
            <div className="finish-row"><i /> {product.finish}</div>
            <a className="btn-dao btn-dao--dark w-100 justify-content-between mt-4" href={`https://wa.me/5583986604037?text=${message}`} target="_blank" rel="noreferrer">
              Consultar no WhatsApp <span>↗</span>
            </a>
            <small>Disponibilidade, acabamento e condições confirmados pelo WhatsApp.</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <section className="product-section section-space" id="produtos">
      <div className="container">
        <Reveal>
          <div className="section-head d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-4">
            <div>
              <span className="section-kicker">Produtos</span>
              <h2>Seu próximo iPhone<br />começa aqui.</h2>
            </div>
            <p>Explore os modelos em destaque e converse com a nossa equipe para encontrar a melhor escolha para você.</p>
          </div>
        </Reveal>
      </div>

      <div className="product-rail-wrap">
        <div className="product-rail">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 90} className="product-card-reveal">
              <button className="product-card" type="button" onClick={() => setSelected(product)} aria-label={`Ver detalhes do ${product.name}`}>
                <div className="product-card__top">
                  <span>{product.badge}</span>
                  <b>↗</b>
                </div>
                <div className="product-card__phone product-card__phone--real">
                  <PhoneMockup compact image={product.image} alt={product.name} />
                </div>
                <div className="product-card__info">
                  <small>{product.eyebrow}</small>
                  <h3>{product.name}</h3>
                  <p>{product.storage.join(' · ')}</p>
                  <strong>{product.priceLabel}</strong>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
