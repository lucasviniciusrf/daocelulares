import Reveal from './Reveal.jsx'
import { categories } from '../data/products.js'

function CategoryIcon({ type }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (type) {
    case 'iphone':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="2.8" width="10" height="18.4" rx="2.6" {...common} />
          <line x1="10" y1="5.5" x2="14" y2="5.5" {...common} />
          <circle cx="12" cy="17.8" r="0.8" fill="currentColor" />
        </svg>
      )
    case 'macbook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4.2" width="14" height="10" rx="1.4" {...common} />
          <path d="M3 17.2h18" {...common} />
          <path d="M8 17.2l.8 1h6.4l.8-1" {...common} />
        </svg>
      )
    case 'ipad':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5.5" y="2.5" width="13" height="19" rx="2.3" {...common} />
          <circle cx="12" cy="18.2" r="0.7" fill="currentColor" />
        </svg>
      )
    case 'watch':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="6" width="10" height="12" rx="3" {...common} />
          <path d="M9 4.3l1-1.8h4l1 1.8" {...common} />
          <path d="M9 19.7l1 1.8h4l1-1.8" {...common} />
          <path d="M12 9v3l2 1" {...common} />
        </svg>
      )
    case 'accessories':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4.5" y="7.2" width="15" height="11.3" rx="2" {...common} />
          <path d="M9 7.2V6a3 3 0 0 1 6 0v1.2" {...common} />
          <path d="M8.8 11.2h6.4" {...common} />
          <path d="M8.8 14.2h6.4" {...common} />
        </svg>
      )
    default:
      return null
  }
}

export default function Categories() {
  return (
    <section className="categories section-space" id="ecossistema">
      <div className="container">
        <Reveal>
          <span className="section-kicker">Ecossistema completo</span>
          <h2 className="mb-5">Muito além do iPhone.</h2>
        </Reveal>
        <div className="row g-3">
          {categories.map((category, index) => (
            <div className="col-12 col-md-6 col-lg" key={category.title}>
              <Reveal delay={index * 60}>
                <a className="category-card category-card--dark" href="#contato">
                  <span className="category-card__icon"><CategoryIcon type={category.icon} /></span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.caption}</p>
                  </div>
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
