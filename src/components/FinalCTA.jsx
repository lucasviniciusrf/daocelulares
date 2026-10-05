import Reveal from './Reveal.jsx'

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contato">
      <div className="final-cta__gradient" />
      <div className="container position-relative">
        <Reveal>
          <div className="final-cta__content">
            <span className="section-kicker section-kicker--light">Pronto pra ter o seu iPhone?</span>
            <h2>Seja para comprar, trocar ou tirar uma dúvida, é só chamar.</h2>
            <p>A gente cuida do resto.</p>
            <a className="btn-dao btn-dao--light" href="https://wa.me/5583986604037?text=Ol%C3%A1%21%20Vim%20pelo%20novo%20site%20da%20D%C3%A3o%20Celulares%20e%20quero%20ver%20os%20iPhones%20dispon%C3%ADveis." target="_blank" rel="noreferrer">Ver disponibilidade no WhatsApp ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
