# Laurier Cricket Club - Link Page

Official link hub for Laurier Cricket Club, built with Next.js and hosted on Netlify/Vercel.

## Setup

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Edit Content

* `data/BioData.js` → basic info
* `data/LinksData.js` → all links and socials

Example:

```js
{
  title: 'Instagram',
  url: 'https://instagram.com/lauriercricketclub',
  type: 'social',
  on: true
}
```

Set `on: true` to show, `false` to hide.

## Images

Replace files in `/public`:

* `avatar.png` (200x200)
* `title.svg` (logo)

## Customize

Edit layout in `components/WebLinks.js`.
Add new link types by adding a new `type` in `LinksData.js` and matching section in `WebLinks.js`.

## SEO & Domain

* Update `next-seo.config.js` for title and image
* Add Google Analytics ID in Vercel
* Set custom domain in Vercel project settings
