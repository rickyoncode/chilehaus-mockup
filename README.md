# CHILEHAUS — Mockup

Maqueta interactiva del sitio web de **CHILEHAUS** (Chile Haus Ltda.):
arquitectura e ingeniería en madera, manufactura avanzada CNC y digitalización
de procesos constructivos. Desde Paillaco al sur de Chile.

**Demo en vivo:** https://rickyoncode.github.io/chilehaus-mockup/

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- GitHub Pages (GitHub Actions)

## Desarrollo

```bash
yarn install
yarn dev        # desarrollo
yarn build      # build producción
yarn preview    # preview del build
```

## Deploy

El deploy a GitHub Pages se ejecuta automáticamente al hacer `push` a `main`.

## Estructura

```
src/
├── App.tsx
├── main.tsx
├── index.css          # theme Tailwind v4 + tipografías + animaciones
├── sections/          # las 9 secciones del one-pager
├── components/
│   ├── Nav.tsx
│   ├── NaturalMotif.tsx   # anillos de crecimiento + ramificaciones
│   ├── Counter.tsx
│   └── Reveal.tsx
└── pages/
    └── Shop.tsx       # placeholder "Tienda próximamente"
```

## Paleta (brandboard CHILEHAUS)

| Uso | Hex |
|---|---|
| Bosque (primario) | `#14311F` |
| Bosque profundo | `#0C1F13` |
| Dorado (acento) | `#BCA36C` |
| Dorado brillante | `#D8BD83` |
| Hueso | `#F5F0E4` |
| Café (complementario) | `#685642` |
| Verde claro | `#B7C68B` |
| Beige | `#DED29E` |

## Tipografía

- Títulos: **Cormorant Garamond** (serif clásica)
- Textos: **Inter** (sans-serif geométrica)

## Concepto

Naturaleza ↔ tecnología. La madera como **tecnología natural**. Anillos de
crecimiento, ramificaciones orgánicas y entramado tipo Fachwerkhaus como
lenguaje visual.
