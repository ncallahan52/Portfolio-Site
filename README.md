# Nicholas Callahan — Portfolio Site

A static personal portfolio site built with plain HTML, CSS, and a small amount
of vanilla JavaScript. No build step, no framework, no dependencies — just open
`index.html` in a browser.

---

## How to view locally

**Option A — simplest:** double-click `index.html`. The site will open in your
default browser using the `file://` protocol. Everything works except a couple
of browser features (most notably some console security warnings on `file://`),
which is fine for local review.

**Option B — recommended for a proper preview:** serve the folder with a tiny
local server so links behave exactly like they will on the web.

```bash
# from the project root
python -m http.server 8000
# then visit http://localhost:8000 in your browser
```

---

## Folder map

```
Portfolio Site/
├── index.html                       # Single-page home (hero, about, skills, projects, experience, honors, contact)
├── projects.html                    # Projects index — grid of every project
├── projects/
│   ├── connect4-ai.html             # Connect 4 AI case study
│   ├── nn-dataflow.html             # nn_dataflow Tools case study
│   └── bandcamp-checkout.html       # Bandcamp Auto-Checkout case study
├── css/
│   ├── style.css                    # Global styles + design tokens
│   └── project.css                  # Case-study page styles
├── js/
│   └── main.js                      # Mobile nav toggle + active-section highlight
├── assets/
│   ├── images/projects/<slug>/      # Project screenshots & thumbnails
│   ├── videos/projects/<slug>/      # Project demo videos
│   ├── icons/                       # SVG icons (github, linkedin, email, external-link)
│   ├── resume.pdf                   # Downloadable resume
│   └── favicon.svg                  # Site favicon (orange "N" monogram)
└── README.md                        # You are here
```

---

## Design tokens

All colors, spacing, and typography live in `:root` at the top of
`css/style.css`. Tweak a token there to ripple the change through the whole
site.

| Token              | Value     | Use                            |
| ------------------ | --------- | ------------------------------ |
| `--bg`             | `#FAFAF7` | Page background (warm off-white) |
| `--surface`        | `#FFFFFF` | Cards, nav background          |
| `--text`           | `#1F2937` | Primary text                   |
| `--muted`          | `#6B7280` | Secondary text                 |
| `--border`         | `#E5E7EB` | Hairline dividers              |
| `--accent`         | `#E85D04` | Orange accent                  |
| `--accent-hover`   | `#C44A03` | Darker accent for hover        |
| `--accent-soft`    | `#FFE9D6` | Tinted backgrounds             |

---

## Adding a new project

1. **Copy** an existing case-study page in `projects/` — e.g.
   `projects/connect4-ai.html` — and rename it to `projects/<slug>.html`.
2. **Edit** the title, eyebrow, tags, prose, and external links on the new page.
3. **Add a card** to both `index.html` (Featured Projects, if it's a headliner)
   and `projects.html`, pointing the `View case study` link at the new file.
4. **Drop media** into `assets/images/projects/<slug>/` and
   `assets/videos/projects/<slug>/`, then replace the placeholder
   `<div class="gallery__item">…</div>` blocks with the actual `<img>` /
   `<video>` elements (commented examples are inlined in each case-study page).

---

## Adding media to an existing project

- **Thumbnail for a card:** add `<img src="…" alt="…">` inside
  `<div class="card__media">` to override the placeholder text.
- **Hero media on a case-study page:** swap the inner `<span>` of
  `.project-hero-media` for an `<img>` or `<video controls preload="metadata">`.
- **Gallery items:** put `<img>` or `<video>` directly inside any
  `<div class="gallery__item">`.

Images: prefer JPEG for photos, PNG for screenshots, and WebP if you want to be
extra space-efficient. Always include a descriptive `alt`.

Videos: mp4 (`H.264 + AAC`) is the broadest-compatibility default. Use
`preload="metadata"` so the page doesn't fetch the full video until the user
hits play.

---

## Future ideas

Intentionally out of scope for the first build, but ready to slot in:

- Dark-mode toggle (the design tokens already isolate every color).
- Move to a static-site generator (Astro / Eleventy) once the content stabilizes.
- A real contact form (Formspree or a tiny serverless endpoint).
- Light scroll-triggered fade-ins on section enter.
- A `/blog/` directory for write-ups beyond projects.
