# 📸 Mini Feed do Instagram com React + Next.js + Tailwind CSS

Este projeto consiste em uma simulação de um feed de postagens do Instagram, desenvolvida com **Next.js**, **React**, **Tailwind CSS** e utilizando o **App Router**.

---

## 💡 Funcionalidades

- Componente `PostItem` reutilizável com layout responsivo.
- Estilização com Tailwind CSS.
- Feed dinâmico gerado a partir de um array.
- Uso de `Client Components` para interatividade.
- Estrutura baseada no `App Router` do Next.js (`src/app/`).

---

## 🗂️ Estrutura dos Componentes

```bash
src/
├── app/
│   └── layout.tsx
│   └── page.tsx
├── components/
│   ├── FeedInstagram.tsx
│   └── PostItem.tsx
public/
├── icons/
│   ├── heart.svg
│   ├── comment.svg
│   ├── share.svg
│   ├── bookmark.svg
│   └── more.svg
├── default-user.png
├── harley-davidson-v-rod-1250-muscle-vrscf.png
├── kawasaki-h2r.png
├── favicon.ico
