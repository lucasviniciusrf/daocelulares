import Reveal from './Reveal.jsx'

export default function FounderSection() {
  return (
    <section className="founder-section section-space" id="historia">
      <div className="container">
        <div className="founder-section__layout">
          <Reveal className="founder-section__media-reveal">
            <figure className="founder-section__portrait">
              <img src="/assets/people/fundador-dao.jpg" alt="Dão, fundador da Dão Celulares" loading="lazy" decoding="async" width="1600" height="1600" />
              <figcaption>O rosto por trás da Dão Celulares <span>Campina Grande · PB</span></figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div className="founder-section__content">
              <span className="section-kicker">Nossa história</span>
              <h2>Quem está por trás da Dão.</h2>
              <p className="founder-section__lead">Da primeira revenda à referência em produtos Apple em Campina Grande.</p>
              <blockquote>“Comecei com um objetivo claro: fazer o que ninguém fazia — e fazer do jeito certo.”</blockquote>
              <p>A trajetória começou com a revenda de Xiaomi. A visão de Dão, porém, sempre foi construir uma loja de referência para quem procura produtos Apple.</p>
              <p>A atenção à garantia dos seminovos e a conferência dos aparelhos junto com cada cliente ajudaram a transformar aquela primeira revenda em uma relação de confiança.</p>
              <p>Hoje, a Dão reúne produtos, atendimento próximo e suporte depois da compra para seguir crescendo com as pessoas que fizeram parte dessa história.</p>
              <div className="founder-section__signature"><strong>Dão</strong><span>Fundador · Dão Celulares</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
