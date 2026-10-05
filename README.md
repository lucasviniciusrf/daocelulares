# Dão Celulares

Site da Dão Celulares em React, Vite, Bootstrap 5 e CSS próprio. A página mantém o Hero e a experiência 3D, a vitrine de produtos com modal, o simulador de troca e os links para WhatsApp.

## Executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Conteúdo e imagens

- Os produtos, acabamentos e capacidades exibidos ficam em `src/data/products.js`. A disponibilidade é consultada pelo WhatsApp; o site não publica preços ou estoque em tempo real.
- As imagens dos iPhones em `public/assets/products/*.webp` foram preparadas a partir das imagens de produto da [Apple Store](https://www.apple.com/br/shop/buy-iphone). As versões PNG anteriores foram mantidas como arquivos de origem, mas não são usadas na interface.
- A foto do fundador, as imagens e os vídeos da loja vieram do [site oficial da Dão Celulares](https://daocelulares.com.br/). Estão em `public/assets/people` e `public/assets/trust`.
- A logo transparente em `public/assets/brand/dao-logo-clean.png` foi preparada a partir da logo que já acompanhava o projeto. O arquivo original foi preservado.

Antes de publicar, confirme com a Dão as informações operacionais que podem mudar: modelos disponíveis, condições comerciais, horário de atendimento e regras da troca.
