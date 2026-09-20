# djgreensatyr.live

DJ Green Satyr — Phoenix electronic music artist. Multi-page booking and performance site.

## Deploying
Netlify project: `djgreensatyrlive` (site id `ff6618b7-18dc-4be3-8611-c78399b61151`).
Publish directory is the repo root (`netlify.toml`). All files live at the root, no build step.

Until the repo is linked in Netlify (Site configuration > Build & deploy > Continuous deployment),
deploys are manual drag-and-drop of the folder contents. Once linked, pushing to the
production branch deploys automatically, with one-click rollback in Netlify.

## Files
- Pages: `index.html`, `booking.html`, `events.html`, `theatre.html`, `cratedetective.html`, `contact.html`
- Form success page `thanks.html` (every form posts to `/thanks`) and `404.html`
- `styles.css`, `main.js`, `robots.txt`, `sitemap.xml`
- `assets/` logos, hero video/posters, Theatre posters, share images (`og-*`), booking gallery photos (`live-1.jpg`, `live-2.jpg`; slots 3 and 4 are still empty and hide themselves)

## Notes
- Booking page "Listening Room" holds the Mixcloud players (account: mixcloud.com/GreenSatyr).
- Assets are cached for one day (`netlify.toml`), so replacing a same-named image shows up quickly.
- History: v1 was a single-page mirror of production seeded 2026-08-04.
