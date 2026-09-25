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

## Paleta (manual de marca v1.0 · septiembre 2026)

| Uso | Hex |
|---|---|
| Grafito (primario / texto / fondos oscuros) | `#2E2E2E` |
| Grafito profundo | `#1A1A1A` |
| Madera (acento) | `#C9A27E` |
| Madera clara | `#D9BB94` |
| Hueso (base) | `#F6F3ED` |
| Tierra (acento secundario) | `#8C6F56` |

## Tipografía

- Títulos: **Manrope**
- Textos e interfaz: **Space Grotesk**

## Concepto

Naturaleza ↔ tecnología. La madera como **tecnología natural**. Anillos de
crecimiento y ramificaciones orgánicas como lenguaje visual, sobre un
logotipo puramente tipográfico (sin isologo autónomo).
