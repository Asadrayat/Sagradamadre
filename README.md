# Sagradamadre

[Live store](https://sagradamadrestore.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVJ6WVdkeVlXUmhiV0ZrY21WemRHOXlaUzV0ZVhOb2IzQnBabmt1WTI5dEJqb0dSVlE9IiwiZXhwIjoiMjAyNi0wMi0wMlQxMjo0MDo0MC40NzNaI... )

Sagradamadre is a Shopify storefront showcasing [your brand / product line]. This repository stores the theme and related configuration, documentation, and development guidance for customizing and maintaining the store.

---

## Table of contents

- [About](#about)
- [Live demo](#live-demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started (local development)](#getting-started-local-development)
- [Working with the theme](#working-with-the-theme)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

Short elevator pitch for Sagradamadre — what it sells, the target audience, and the brand values. Example:

> Sagradamadre blends artisanal craft with modern design to offer curated home and lifestyle products. We focus on sustainable materials, limited runs, and beautifully-packaged goods.

Update this section to describe your actual products, shipping regions, and unique selling points.

---

## Live demo

Visit the live storefront: https://sagradamadrestore.myshopify.com/

---

## Features

- Clean, mobile-first Shopify theme
- Product collections and filters
- Responsive product pages and cart UX
- SEO-friendly markup and meta tags
- Configurable home page sections (slideshow, featured collections, testimonials)
- Simple analytics and marketing snippet placeholders

Customize this list to match implemented features.

---

## Tech stack

- Shopify (Liquid) — theme templating
- HTML, CSS (Sass/SCSS optional)
- JavaScript (vanilla or framework, if used)
- Shopify CLI for local development and theme deployment
- Optional: GitHub for version control, CI for deployment

---

## Getting started (local development)

Prerequisites:
- Node.js (if you use npm scripts)
- Shopify account with access to the store
- Shopify CLI installed: https://shopify.dev/docs/themes/tools/cli

Quick start (theme development):

```bash
# 1. Login to Shopify with CLI
shopify login --store your-store.myshopify.com

# 2. Clone this repo (if not already cloned)
git clone https://github.com/Asadrayat/Sagradamadre.git
cd Sagradamadre

# 3. Start theme development (newer Shopify CLI)
shopify theme dev

# Alternative (older CLI):
# shopify theme serve
```

Notes:
- Replace `your-store.myshopify.com` with your store hostname.
- The CLI will sync theme changes and provide a preview URL.

---

## Working with the theme

- Theme files live under the `theme/` (or root) directory — templates, sections, snippets, assets, config.
- Common Liquid files to edit:
  - `templates/product.liquid`
  - `sections/header.liquid`
  - `sections/footer.liquid`
  - `snippets/product-card.liquid`
- Keep translations and theme settings in `config/` (e.g., `settings_schema.json`) for customizable sections.

Add more detailed paths if your repo has a specific layout.

---

## Deployment

Use Shopify CLI or the Shopify admin to publish the theme.

Example (publish a theme with CLI):
```bash
# create/upload the theme and get theme id
shopify theme push --theme [THEME_FOLDER]

# publish by theme id through the admin or the CLI:
shopify theme publish --theme-id=123456789
```

Always test changes on a draft theme before publishing to production.

---

## Screenshots

Add screenshots to /docs or /assets and reference them here.

![Home page screenshot](docs/homepage.png)
![Product page screenshot](docs/product.png)

(Replace images with real screenshots; remove placeholders if not used.)

---

## Contributing

Contributions welcome — especially theme improvements, accessibility fixes, and performance optimizations.

Suggested workflow:
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-change`
3. Make changes and test locally (`shopify theme dev`)
4. Commit and push: `git push origin feat/your-change`
5. Open a pull request describing your change

Please include screenshots and testing notes in PR descriptions.

---

## License

Specify your license here (e.g., MIT). If you are unsure, add a LICENSE file in the repo and reference it.

---

## Contact

Project owner: Asadrayat  
Store email / contact form: [add contact method]  
Repo: https://github.com/Asadrayat/Sagradamadre

---

If you'd like, I can:
- add a logo and polished badges,
- generate a short project description for the About section,
- create screenshot images and optimized social preview metadata,
- or commit this README directly to the repo (I can prepare a PR or push if you want).
```
