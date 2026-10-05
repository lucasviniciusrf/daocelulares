import Reveal from './Reveal.jsx'

const media = [
  { title: 'Loja cheia de clientes', image: '/assets/trust/loja-cheia.jpg', size: 'large' },
  { title: 'Testando aparelho com cliente', image: '/assets/trust/testando-aparelho.jpg', video: '/assets/trust/teste-aparelho.mp4' },
  { title: 'Por dentro da loja', image: '/assets/trust/atendimento-balcao.jpg', video: '/assets/trust/visita-loja.mp4' },
  { title: 'Demonstrando iPhone', image: '/assets/trust/demonstrando-iphone.jpg', video: '/assets/trust/demonstracao-iphone.mp4' },
  { title: 'Movimento da loja', image: '/assets/trust/movimento-loja.jpg' },
]

export default function TrustSection() {
  return (
    <section className="trust-section section-space" id="confianca">
      <div className="container">
        <Reveal>
          <div className="trust-section__header">
            <div>
              <span className="section-kicker section-kicker--light">Confiança e procedência</span>
              <h2>A loja que mais vende produtos Apple de Campina Grande.</h2>
            </div>
            <ul className="trust-points">
              <li>Loja movimentada todos os dias — quem confia, volta e indica</li>
              <li>Cada aparelho testado na frente do cliente, sem pressa</li>
              <li>Equipe própria, treinada e pronta pra solucionar todas as suas dúvidas</li>
            </ul>
          </div>
        </Reveal>

        <div className="trust-media-grid">
          {media.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} className={item.size === 'large' ? 'trust-media-grid__large' : ''}>
              <article className={`trust-media-card ${item.size === 'large' ? 'trust-media-card--large' : ''} ${item.video ? 'trust-media-card--video' : ''}`}>
                {item.video ? (
                  <video controls playsInline preload="none" poster={item.image} aria-label={item.title}>
                    <source src={item.video} type="video/mp4" />
                    Seu navegador não suporta este vídeo.
                  </video>
                ) : (
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                )}
                {item.video && <span className="trust-media-card__pill">VÍDEO REAL</span>}
                <span className="trust-media-card__title">{item.title}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
