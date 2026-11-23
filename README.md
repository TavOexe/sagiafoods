# SagiaFoods Perú — landing page

Sitio estático hecho con [Astro](https://astro.build), publicado en GitHub Pages en **https://sagiafoods.pe**.

## Requisitos

- Node.js **22.23.4 o superior** (lo exige Astro 7). En CI se usa Node 24.
- npm

## Desarrollo

```bash
npm install        # instala dependencias
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera el sitio en dist/
npm run preview    # sirve dist/ localmente para revisarlo
```

## Estructura

```
public/
  CNAME                 # dominio propio (sagiafoods.pe), se copia tal cual a dist/
src/
  assets/images/        # imágenes procesadas por astro:assets (AVIF/WebP + tamaños responsive)
    cultivos/ ofertas/ productos/ iconos/
    extra/              # imágenes del sitio anterior que hoy no se usan (no se publican)
  components/
    Header.astro        # barra verde, menú y carrito (envuelve al Hero)
    Carrito.astro       # carrito en vanilla JS: agregar, quitar y vaciar
    Hero.astro          # texto principal y slider de cultivos
    Informacion.astro   # Atención 24/7, Precios justos, Envío rápido
    Ofertas.astro
    Productos.astro
    Cultivos.astro      # franja de 3 fotos de cultivos
    Contacto.astro
    Footer.astro
  layouts/BaseLayout.astro
  pages/index.astro
  styles/global.css
.github/workflows/deploy.yml
```

Solo se publican las imágenes que se importan en algún componente. Para agregar una, cópiala a
`src/assets/images/...`, impórtala en el componente y úsala con `<Picture>` o `<Image>`.

## Despliegue

Cada push a `main` (o un lanzamiento manual desde la pestaña **Actions** → *Deploy to GitHub Pages* →
*Run workflow*) compila con `withastro/action` y publica con `actions/deploy-pages`.

### Configuración manual (una sola vez)

1. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. En la misma página, **Custom domain**: comprueba que diga `sagiafoods.pe` y, cuando el certificado
   esté listo, activa **Enforce HTTPS**.
3. Si el entorno `github-pages` (Settings → Environments) tiene reglas de rama, permite `main`.
4. DNS (en tu proveedor del dominio), si no estaba ya configurado:
   - Registros `A` para `sagiafoods.pe`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Opcional) `CNAME` para `www` → `tavoexe.github.io`
