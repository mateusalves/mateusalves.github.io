# mateusalves.dev

Static portfolio built with [Astro](https://astro.build/).

## Local development

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

The static output is generated in `dist/` and can be deployed directly by Vercel.

## Content

- Site links and contact details: `src/data/site.ts`
- Experience: `src/data/experience.ts`
- Engineering work: `src/content/work/*.md`
- Design tokens: `src/styles/tokens.css`

Case studies use Astro content collections. Set `published: true` and add a matching route when a full case page is ready.
