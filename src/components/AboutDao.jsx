import Reveal from './Reveal.jsx'

export default function AboutDao() {
  const handleTilt = (event) => {
    if (event.pointerType === 'touch') return
    const panel = event.currentTarget
    const rect = panel.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    panel.style.setProperty('--tilt-x', `${-y * 4}deg`)
    panel.style.setProperty('--tilt-y', `${x * 4}deg`)
  }

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <section className="about-dao section-space" id="onde-estamos">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <Reveal>
              <div className="dao-panel dao-panel--location" onPointerMove={handleTilt} onPointerLeave={resetTilt}>
                <div className="dao-panel__noise" />
                <span className="dao-panel__small">ONDE ESTAMOS</span>
                <div className="dao-panel__brand-lockup">
                  <img className="dao-panel__brand-logo" src="/assets/brand/dao-logo-clean.png" alt="Logo Dão Celulares" loading="lazy" width="382" height="382" />
                  <strong>DÃO CELULARES</strong>
                  <span>CAMPINA GRANDE · PB</span>
                </div>
                <div className="dao-panel__badge">WhatsApp<br /><b>(83) 98660-4037</b></div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6">
            <Reveal delay={100}>
              <span className="section-kicker">Onde estamos</span>
              <h2>Venha nos visitar.</h2>
              <p className="lead-soft">Estamos no centro de Campina Grande, em um ponto de fácil acesso para você conhecer os aparelhos de perto e comprar com calma.</p>
              <div className="trust-grid">
                <div><strong>Atendimento</strong><span>Segunda a Sexta — 9h às 21h<br />Sábado — 9h às 15h</span></div>
                <div><strong>Contato</strong><span><a href="https://wa.me/5583986604037" target="_blank" rel="noreferrer">(83) 98660-4037 ↗</a><br />WhatsApp e telefone</span></div>
                <div><strong>Endereço</strong><span>Rua José Bernardino, 97 — Vila Cabral<br />Campina Grande — PB</span></div>
                <div><strong>Instagram</strong><span><a href="https://instagram.com/daocelulares" target="_blank" rel="noreferrer">@daocelulares ↗</a></span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
