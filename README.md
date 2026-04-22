# Chile House — Mockup

Maqueta interactiva del sitio web de Chile House: empresa chilena de manufactura avanzada en madera con foco en digitalización y maquinaria CNC.

**Demo en vivo:** https://rickyoncode.github.io/chilehaus-mockup/

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- GitHub Pages (GitHub Actions)

## Desarrollo

```bash
npm install
npm run dev        # desarrollo
npm run build      # build producción
npm run preview    # preview del build
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
├── components/        # Nav, Counter, Reveal, CircuitLines
└── pages/
    └── Shop.tsx       # placeholder "Tienda próximamente"
```

## Paleta

| Uso | Hex |
|---|---|
| Fondo | `#0A0A0A` |
| Acento | `#00E5FF` (cian eléctrico) |
| Madera | `#A07040` / `#D4A06A` |
| Texto | `#F5F5F0` |

Estética retrofuturista: TRON legado + madera como tecnología natural.
