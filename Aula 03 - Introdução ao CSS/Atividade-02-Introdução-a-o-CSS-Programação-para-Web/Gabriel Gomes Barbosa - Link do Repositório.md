# 🧩 Atividade 02 – Layout com Flexbox e Grid + Flexbox

## 📚 Disciplina: Programação IV
**Professor:** Augusto César Oliveira  
**Aluno:** Gabriel Gomes Barbosa
- 🔗 [Link do Repositório](https://github.com/GabrielBarbosa0/PROGRAMACAO-IV/tree/8e26ba2fda49564ea3a8e87f18dc31d0cbc18e7f/Introdu%C3%A7%C3%A3o-ao-CSS/Atividade-02-Introduc%CC%A7a%CC%83o-a-o-CSS-Programac%CC%A7a%CC%83o-para-Web)

## 📌 Descrição

Este repositório contém dois projetos distintos desenvolvidos como parte da Atividade 02 da disciplina de Programação para Web. Ambos os projetos reproduzem o mesmo layout base, porém com diferentes abordagens de estilização utilizando CSS:

- ✅ **Projeto 1:** Utiliza **apenas Flexbox** para estruturar o layout.
- ✅ **Projeto 2:** Utiliza uma **combinação de CSS Grid com Flexbox**, respeitando a divisão semântica e responsiva proposta.

---

## 🛠️ Tecnologias utilizadas

- HTML5 (estrutura semântica com `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- CSS3 (Flexbox, Grid, Media Queries)
- Responsividade com `@media` para tablets e celulares

---

## 🧱 Estrutura dos Projetos

### 📁 Projeto Flexbox

- Layout principal com Flexbox (`display: flex`)
- Elementos alinhados com `flex-direction`, `justify-content`, `align-items`
- Adaptação do layout para telas menores com `@media`

### 📁 Projeto Grid + Flexbox

- Layout principal com CSS Grid (`display: grid` no `<main>`)
- Estrutura interna com Flexbox para alinhar conteúdo verticalmente (`display: flex` em seções, aside e footer)
- Melhor separação de áreas principais com `grid-template-columns` e `gap`

---

## 🔍 Principais Diferenças Percebidas

| Aspecto                         | Flexbox                         | Grid + Flexbox                                        |
|----------------------------------|----------------------------------|--------------------------------------------------------|
| Estrutura de layout             | Linear (um eixo por vez)         | Bidimensional (linhas e colunas ao mesmo tempo)        |
| Controle de colunas e áreas     | Limitado                         | Flexível e visualmente mais organizado                 |
| Responsividade                  | Requer mais lógica manual        | Simplifica divisões em breakpoints                     |
| Código mais limpo               | Mais verboso em layouts grandes  | Menor complexidade para layout geral                   |
| Organização                     | Útil para componentes            | Ideal para estrutura geral da página                   |

---

## 🌐 Deploy

Você pode acessar a versão publicada dos dois projetos através do GitHub Pages:

- 🔗 [Versão Flexbox](https://gabrielbarbosa0.github.io/PROGRAMACAO-IV/Introdu%C3%A7%C3%A3o-ao-CSS/Atividade-02-Introduc%CC%A7a%CC%83o-a-o-CSS-Programac%CC%A7a%CC%83o-para-Web/Layout-Flexbox/index.html)
- 🔗 [Versão Grid + Flexbox](https://gabrielbarbosa0.github.io/PROGRAMACAO-IV/Introdu%C3%A7%C3%A3o-ao-CSS/Atividade-02-Introduc%CC%A7a%CC%83o-a-o-CSS-Programac%CC%A7a%CC%83o-para-Web/Layout-Flexbox-e-Grid/index.html)

---

## ✅ Conclusão

A atividade demonstrou na prática as diferenças entre as abordagens de layout com Flexbox e Grid. Enquanto Flexbox é mais útil para componentes e alinhamentos simples, o CSS Grid oferece maior controle estrutural, especialmente quando combinado com Flexbox para seções internas. A combinação das duas técnicas proporciona um layout mais limpo, organizado e adaptável.

---
