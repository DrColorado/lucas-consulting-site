# Lucas Consultant Services — Website

A simple, free-to-host website built with Jekyll (a static site generator GitHub Pages runs natively, at no cost).

## Structure

- `index.md` — home page
- `products/` — Products tab (Under Development, Available for Purchase, Free Digital Downloads)
- `services/` — Services tab (Project Management, Strategic Management, Business Development Services, Systems Design and Development, Business Intelligence and Analytics)
- `about/` — About Us tab (Overview, Contact Us, Guestbook)
- `_data/nav.yml` — controls every dropdown menu in the top navigation
- `_layouts/default.html` — the shared page template (header, nav, footer)
- `assets/` — CSS and JS

## Publish it for free with GitHub Pages

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. `lucas-consulting-site`).
3. Upload all files in this folder to that repository (drag-and-drop works on github.com, or use `git push` if you're comfortable with git).
4. In the repository, go to **Settings > Pages**, set the source branch to `main` and folder to `/ (root)`, then save.
5. GitHub will build the site automatically and give you a live URL like `https://yourusername.github.io/lucas-consulting-site/`.
6. If your site is not at the root of a github.io domain, open `_config.yml` and set `baseurl: "/lucas-consulting-site"` (matching your repo name) so links resolve correctly, then commit the change.
7. Optional: add a custom domain (e.g. lucasconsultantservices.com) later under **Settings > Pages > Custom domain** — this can also be done for free if you already own the domain, or for a small annual registration fee (~$10-15/yr) if not.

## How to add a new dropdown item later

1. Add a new Markdown file in the relevant folder (`products/`, `services/`, or `about/`) with front matter like:
   ```
   ---
   layout: default
   title: New Item
   permalink: /services/new-item/
   ---
   Your content here.
   ```
2. Add a matching entry to `_data/nav.yml` under the right tab's `children` list.
3. Commit and push — GitHub Pages rebuilds automatically within a minute or two.

## Editing content

Every page is a plain Markdown (`.md`) file — no coding needed to update text. Edit directly on github.com (pencil icon on any file) or on your computer with any text editor.

## Alternative hosting (if you'd rather not use GitHub)

- **Netlify** (free tier): drag-and-drop the built site folder, or connect the GitHub repo for automatic deploys.
- **Cloudflare Pages** (free tier): similar to Netlify, connects directly to GitHub.

Both support Jekyll and custom domains at no cost for a site this size.
