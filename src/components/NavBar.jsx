import { useEffect, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/5583986604037?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20D%C3%A3o%20Celulares.'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`dao-nav ${scrolled ? 'dao-nav--scrolled' : ''}`}>
      <div className="container-fluid dao-nav__inner">
        <a className="dao-brand" href="#top" aria-label="Dão Celulares">
          <img className="dao-brand__logo" src="/assets/brand/dao-logo-clean.png" alt="Logo Dão Celulares" width="54" height="54" />
          <span className="dao-brand__text">DÃO CELULARES</span>
        </a>

        <button className="dao-menu d-lg-none" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="dao-navigation">
          <span /> <span />
        </button>

        <nav id="dao-navigation" className={`dao-nav__links ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a>
          <a href="#confianca" onClick={() => setOpen(false)}>Confiança</a>
          <a href="#produtos" onClick={() => setOpen(false)}>Produtos</a>
          <a href="#trocas" onClick={() => setOpen(false)}>Trocas</a>
          <a href="#onde-estamos" onClick={() => setOpen(false)}>Onde estamos</a>
          <a className="dao-nav__cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar no WhatsApp ↗</a>
        </nav>
      </div>
    </header>
  )
}
