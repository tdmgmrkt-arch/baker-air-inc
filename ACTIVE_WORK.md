# Active Work — Baker Air

_Last updated: 2026-04-17 (Phase 3 content push complete)_

---

## 🔥 In Progress
_Currently being worked on. One line each: what / who (agent) / status / notes._

- **Premium rebuild in `~/agency/clients/baker-air-revised`** — Phase 2 infrastructure sweep shipped (2026-04-17). 3 blockers fixed (SSR opacity, HVACBusiness JSON-LD with honest 4.8/25 rating, OG image via ImageResponse). All 11 quick wins landed (favicon set, robots.ts, sitemap.ts, Nav label fix, TrustBar coral→navy, hero H1 → text-8xl, review quote styling, Services card priority, float keyframe deleted). Contact page wired to existing GHL webhook. Privacy/Terms skeletons + `generateMetadata` on every stub page. `npm run build` clean: 18 routes, zero errors. Visual verification via Playwright confirms all sections render on initial paint. Working tree uncommitted in rebuild repo — awaiting user review before commit. Dev server on `http://localhost:3002`.
- **Service page copy decks** — seo-writer drafted all 4 (Installation, Repair, Comfy Club, IAQ) at `baker-air-revised/docs/content-drafts/*.md`, ~1100-1200 words each. Ready to drop into the scaffolded service pages next round.
- **Phase 3 content push — COMPLETE** — seo-writer delivered 6 city decks, 2 blog seeds, About placeholder. web-developer rendered all into real routes: 4 service pages (Installation, Repair, Preventative Maintenance/Comfy Club, IAQ) with Service + FAQPage JSON-LD; 6 city pages via dynamic `[city]` route with per-city Service schema; blog index + 2 post routes with BlogPosting schema; About page with AboutPage schema; Service Area hub. Services section stock photography replaced with navy cards + Lucide line icons + SVG air-wave motif. Hero polished (overline contrast, map dots enlarged with coral glow, gradient bg, tightened padding). New TrustRow section with 4 badges (License CA #1098493 / 4.8★ Google / Since 2011 / Same-Day). `/comfy-club` → `/preventative-maintenance` 301 redirect added. Build clean (26 static pages). Hero SSR opacity regression fixed (motion elements no longer use `initial={{opacity:0}}` — y-offset-only reveal). Verified visually via Playwright: homepage, repair service page, Lake Elsinore city page, blog index — all clean, 0 console errors. Screenshots at `baker-air-revised/docs/review-2026-04-17/phase3-*.png`.

---

## ⏭ Up Next
_Queued — agreed but not started._

- **🚨 Live-site compliance fix staged, awaiting user deploy approval** — `src/components/structured-data.tsx` in the live repo (`~/agency/clients/baker-air/`) has the 2-line fix applied (4.9→4.8, 500→25). `git diff` verified clean. NOT committed, NOT pushed. User needs to approve commit + push-to-main (auto-deploys to Vercel).
- Fix `.gitignore` on live site: add `.next`, `.env*.local`, `.vercel`, `*.log`; untrack committed `.next/` content (web-developer).
- Confirm with client: is "500+ homeowners" a legitimate lifetime customer-count claim (not review count)?
- **Rebuild Phase 4 queue (mostly blocked on client deliverables):**
  - BLOCKED on client: founder name + 30-min intro call → unlocks humanized About page (swap `FOUNDER_NAME_INSERT` marker), The Split hero, Team page.
  - BLOCKED on client: real photo shoot (founder, team, van, jobsite, before/after) → unlocks The Split hero, Team page, Case Studies, homepage imagery upgrade, blog featured images.
  - BLOCKED on client: 5-6 real GBP review quotes copy-pasted from their GBP Manager → unlocks Reviews.tsx placeholder replacement (`local-seo` tried automated scraping; Google blocks it; client paste is the fastest path).
  - BLOCKED on client: Comfy Club membership pricing decision → sharpens Comfy Club page CTA.
  - BLOCKED on client: confirm "500+ homeowners" is a legit lifetime-customer count (not review count).
  - BLOCKED on client: logo vector (.ai / .svg) → replaces raster webp in Nav, Footer, OG image.
  - NOT BLOCKED: add `GHL_WEBHOOK_URL` to Vercel env before contact form goes live; Case Study template + hub (can build with placeholder content); creative-director blog featured image generation; `qa-launch` pre-launch audit; domain swap / redirect plan decision.

---

## 🚫 Blocked
_Waiting on something or someone. List the blocker._

- (Nothing blocked)

---

## ✅ Recently Completed
_Last 5–10 items. Prune older stuff periodically._

- 2026-04-17 — Phase 1 visual review via Playwright MCP (desktop 1440×900 + mobile 390×844, pre- and post-scroll). 3 screenshots archived at `baker-air-revised/docs/review-2026-04-17/`. web-developer self-review produced 19-item punch list with severity ratings.
- 2026-04-17 — Moved repo from `C:\Users\Owner\baker-air` → `C:\Users\Owner\agency\clients\baker-air`. Verified with clean `npm install` + `npm run build`.

---

## 📌 Decisions Log
_Important decisions made for this client and why. Prevents re-litigating later._

- 2026-04-17 — Consolidating all client website repos under `~/agency/clients/<slug>/` so Chief of Staff has a single source of truth. Baker Air is the pilot test for the move procedure before migrating the other 4 sites.
