import Reveal from './Reveal.jsx'

const reasons = [
  {
    title: '1 ano de garantia em todo seminovo.',
    text: 'A Dão oferece 1 ano de garantia nos iPhones seminovos, trazendo mais segurança para quem compra.',
  },
  {
    title: 'Aceitamos seu iPhone na troca.',
    text: 'Quer fazer upgrade? Seu aparelho pode entrar na negociação e você paga apenas a diferença.',
  },
  {
    title: 'Testado na sua frente.',
    text: 'Cada aparelho é conferido junto com o cliente antes da compra.',
  },
  {
    title: 'Suporte que não some.',
    text: 'Atendimento próximo antes, durante e depois da venda.',
  },
  {
    title: 'Loja física em Campina Grande.',
    text: 'Você pode conhecer os aparelhos pessoalmente e comprar com mais segurança.',
  },
]

export default function WhyBuy() {
  return (
    <section className="why-dao section-space" id="por-que-dao">
      <div className="container">
        <Reveal>
          <div className="why-dao__intro">
            <span className="section-kicker">Por que comprar na Dão Celulares?</span>
            <h2>Comprar um iPhone é fácil.<br /><em>Comprar com confiança</em> é outra história.</h2>
            <p>Uma experiência que continua muito depois da escolha do aparelho.</p>
          </div>
        </Reveal>
        <div className="why-dao__grid">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 70} className={index === 0 ? 'why-dao__feature' : ''}>
              <article className="why-card">
                <span className="why-card__index">0{index + 1}</span>
                <div className="why-card__body">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
                <span className="why-card__arrow" aria-hidden="true">↗</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
