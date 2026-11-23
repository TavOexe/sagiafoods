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
public/                 # se copia tal cual: CNAME, robots.txt, favicon, og-image.jpg
src/
  data/
    site.ts             # datos de la empresa (correo, teléfono, dirección, redes, formulario)
    productos.ts        # catálogo: nombre, características y color de cada producto
  assets/images/
    cultivos/           # fotos de las chacras
    productos/          # fotos de producto: <slug>.png (ver LEEME.md dentro)
  components/           # Header, Hero, Sellos, Productos, Proceso, Origen, Contacto, Footer
  layouts/BaseLayout.astro  # <head>: SEO, Open Graph, datos estructurados (schema.org)
  pages/index.astro
  styles/global.css
```

### Fotos de productos

Guarda cada foto en `src/assets/images/productos/` con el nombre del producto (`espinaca.png`,
`tomate-cherry.png`, …; la lista completa está en `LEEME.md` de esa carpeta). La web la detecta sola y
genera AVIF/WebP en varios tamaños. Si falta una foto, la card se muestra sin imagen.

### Formulario de contacto

GitHub Pages no ejecuta código de servidor, así que el formulario necesita un servicio externo para
enviar correos. Sin configurar nada, el botón **Enviar** abre el programa de correo del visitante con
el mensaje ya escrito para `site.email`.

Para que envíe directo (recomendado: [Web3Forms](https://web3forms.com) o [Formspree](https://formspree.io)):

1. Crea la cuenta con el correo donde quieres recibir los mensajes.
2. Define las variables al compilar (en un archivo `.env` local y/o en el workflow):
   - `PUBLIC_FORM_ENDPOINT` — Web3Forms: `https://api.web3forms.com/submit` · Formspree: `https://formspree.io/f/<id>`
   - `PUBLIC_FORM_ACCESS_KEY` — solo Web3Forms (es una clave pública, se puede ver en la web).

### SEO (pasos manuales recomendados)

- Registra `https://sagiafoods.pe` en [Google Search Console](https://search.google.com/search-console) y envía `https://sagiafoods.pe/sitemap-index.xml`.
- Crea o reclama el perfil de empresa en [Google Business Profile](https://business.google.com) con la misma dirección y teléfono que la web.

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
