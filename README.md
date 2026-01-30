# ispman

This repository contains a static dashboard UI prototype for an ISP client management system.

Quick start

Open the HTML file in a browser:

```bash
xdg-open metialpha
```

Or serve the directory (recommended) and open http://localhost:8000:

```bash
python3 -m http.server 8000
```

What's changed

- Extracted inline CSS into `assets/css/styles.css`.
- Extracted inline JS into `assets/js/app.js`.
- Removed a duplicate Font Awesome link in the HTML.

Next steps

- Hook up a backend or replace `sampleData` with a fetch to an API.
- Rename `metialpha` to `index.html` if you want a conventional entrypoint.
