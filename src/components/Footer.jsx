export default function Footer() {
  return (
    <footer className="dao-footer">
      <div className="container">
        <div className="row g-4 align-items-end">
          <div className="col-lg-5"><div className="dao-footer__brand"><img src="/assets/brand/dao-logo-clean.png" alt="Logo Dão Celulares" loading="lazy" width="382" height="382" /><span>DÃO CELULARES</span></div><p>Seu próximo iPhone, do jeito certo de comprar.</p></div>
          <div className="col-6 col-lg-2"><strong>Navegue</strong><a href="#diferenciais">Diferenciais</a><a href="#confianca">Confiança</a><a href="#produtos">Produtos</a><a href="#trocas">Trocas</a></div>
          <div className="col-6 col-lg-2"><strong>Conecte</strong><a href="https://instagram.com/daocelulares" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://wa.me/5583986604037" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
          <div className="col-lg-3"><strong>Visite</strong><p>Rua José Bernardino, 97<br />Vila Cabral · Campina Grande — PB</p></div>
        </div>
        <div className="dao-footer__bottom"><span>© {new Date().getFullYear()} Dão Celulares</span><span>Campina Grande · PB</span></div>
      </div>
    </footer>
  )
}
