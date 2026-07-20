# CLIENT: Baker Air

_Last updated: 2026-04-17_

---

## Business Overview
- **Legal / business name:** Baker Air Inc.
- **DBA (if different):** None (uses legal name)
- **Slug (folder name):** baker-air
- **Industry / vertical:** HVAC contractor
- **Location (city, state):** Winchester, CA 92596
- **Address:** 32675 Ashford Ln, Winchester, CA 92596
- **Service area:** Temecula, Menifee, Wildomar, Winchester, Murrieta, Lake Elsinore (Temecula Valley / Riverside County)
- **Services offered:** Installation & Upgrades (central AC, mini-splits, furnaces, smart thermostats), Repair (emergency + same-day), Preventative Maintenance (via "Comfy Club" membership program), Indoor Air Quality (purifiers, UV, filtration)
- **Target customer:** Homeowners in Temecula Valley
- **Unique selling points (as claimed on current site):** Family-owned since day one, 15+ years in business, licensed & insured, same-day service, honest upfront pricing, 4.9★ / 500+ homeowners, 24/7 support
- **Years in business:** 15+
- **Brand program:** "Comfy Club" (maintenance membership — diagnostic fee waived for members, currently $97 for non-members)
- **License:** California Contractor License #1098493

## Primary Contact
- **Name:** TBD (not exposed on current site — need real person + role)
- **Role:** TBD
- **Email:** office.bakerair@gmail.com (generic office inbox)
- **Phone:** (951) 348-0686
- **Preferred communication:** TBD
- **Time zone:** Pacific (California)
- **Decision-maker (if different):** TBD

## Brand
- **Voice notes:** Warm, approachable, "family-first." Emphasis on trust and transparency ("No surprises, just honest service"). Professional but personable. Benefit-driven (efficiency, reliability, comfort). _(Formalize further in `house-style.md` if we're refining for the rebuild.)_
- **Logo/assets location:** `public/` in current repo (`baker.logo.webp`)
- **Primary color:** Coral `#F47B52`
- **Secondary:** Navy scale (`#0A2D4A` → `#E8EEF3`)
- **Accents:** Warm amber/gold, slate neutrals
- **Fonts:** Inter (Google Fonts, system fallback to SF Pro Display / -apple-system) — no custom typeface
- **Photography preferences:** TBD — current site uses stock product shots + a cartoon mascot that reads amateurish. For rebuild: real team photos, real jobsite/van photos, real before/after shots (flagged as premium gap).
- **Mascot:** Present on current site — **flagged for removal or premium redesign in rebuild**

## Website
- **Domain:** bakerairinc.com
- **Local repo path (current live site):** `C:\Users\Owner\agency\clients\baker-air`
- **Local repo path (rebuild):** `C:\Users\Owner\agency\clients\baker-air-revised` (pending scaffold)
- **GitHub URL:** https://github.com/tdmgmrkt-arch/baker-air-inc
- **Vercel project URL:** TBD
- **Production URL:** https://bakerairinc.com
- **Staging URL:** TBD
- **CMS used:** None (static Next.js)
- **Current status:** Live — rebuild in progress (new folder `baker-air-revised`, current site untouched)
- **Stack (current):** Next.js 14.2, React 18.2, Tailwind 3.4, Radix UI, Framer Motion 11, TypeScript 5 strict
- **Stack (rebuild target):** Next.js 15 (App Router) + TS + Tailwind + shadcn/ui + Framer Motion

## Social Media
- **Facebook:** https://www.facebook.com/profile.php?id=61562574151435
- **Instagram:** @bakerairinc
- **Yelp:** baker-air-winchester-3

## Go High Level
- **Sub-account name:** TBD
- **Sub-account URL:** TBD
- **Pipelines (names):** TBD
- **Tag conventions:** TBD
- **Webhook endpoint:** `https://services.leadconnectorhq.com/hooks/uNCrqtS37L3JzXaOl45U/webhook-trigger/5265d58f-2e7c-4541-b745-f94f3dea32b1` (hardcoded in `contact-us/page.tsx`)
- **Form fields sent:** firstName, lastName, phone, email, address1, city, state, zip, services (multi-select), message
- **Spam protection in place:** Honeypot + 3-second submission timer
- **Standard automations active:** TBD
- **Client-specific automations:** TBD

## Google Business Profile
- **GBP share URL:** https://maps.app.goo.gl/wdmH7LGA8fwXCSgJ8
- **Google Place ID (hex):** `0x2512cc1cbb5bac77:0x5d0ccd34d3a77163`
- **Coordinates:** 33.5949574, -117.1594515
- **Verification status:** Verified (listed publicly on Maps)
- **Primary category:** HVAC contractor (confirmed from GBP URL data)
- **Secondary categories:** TBD
- **Current star rating:** 4.8 ★ (confirmed 2026-04-17)
- **Current review count:** 25 reviews (confirmed 2026-04-17)
- **⚠️ Live site claim mismatch:** Current live site's LocalBusiness schema publishes `aggregateRating: 4.9 / 500 reviews`. Actual GBP is 4.8 / 25. **This is a false structured-data claim to Google and should be corrected on the live site ASAP — compliance risk.**
- **"500+ homeowners" hero claim:** May still be valid if intended as "lifetime customers served over 15 years" (different from review count). Needs client confirmation before republishing on rebuild.
- **GBP Manager `locations/XXXX` ID (needed for auto-poster):** TBD (pull from GBP Manager URL when onboarding to auto-poster)
- **Post automation cadence:** Not on auto-poster yet
- **Review request flow:** TBD

## Paid Ads
- **Google Ads account ID:** TBD
- **LSA enrolled:** TBD
- **Meta Ads account ID:** TBD (Meta Pixel NOT implemented on current site)
- **Monthly ad budget:** TBD
- **Who manages ad creative / optimization:** TBD

## Analytics
- **GA4 property ID:** Configured via `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var (value in Vercel)
- **GTM container ID:** Configured via `NEXT_PUBLIC_GTM_ID` env var (value in Vercel)
- **Search Console property:** TBD
- **Meta Pixel ID:** Not installed
- **Event tracking helpers present:** `trackEvent`, `trackContactFormSubmission`, `trackPhoneCall` in `analytics.tsx`

## Current Engagement
- **Phase:** Live; rebuild in progress
- **Start date:** TBD
- **Go-live date (current site):** TBD
- **Go-live date (rebuild):** TBD — gated by `qa-launch`
- **Retainer / billing cadence:** TBD
- **Monthly scope summary:** TBD

## Notes / Quirks
- Repo was moved from `C:\Users\Owner\baker-air` to `C:\Users\Owner\agency\clients\baker-air` on 2026-04-17. Move verified via clean `npm install` + `npm run build`.
- `.gitignore` only contains `node_modules` — `.next` build artifacts are being committed. Known issue — will be fixed in rebuild; current site fix still open in ACTIVE_WORK.
- OG image referenced in `layout.tsx` (`/og-image.png`) but file is missing from `public/` — social shares break. Carry forward into rebuild.
- Mascot PNGs (`baker.air.mascot.png`, `bakermascottaking calls.png`, `bakerairmascotinspection.webp`) appear across pages — flagged as anti-premium for rebuild.
- FAQ schema is only present on the repair-service page. Rebuild: add FAQs to every service page.
- No blog, no case studies, no named team bios on current site.
- Rating/review claim (4.9 / 500+) must be verified against actual GBP before publishing on rebuild.

## TBDs Still Needed from Client
_These are the gaps that'll block premium rebuild work. Ask user as they come up:_
- Real owner/founder name + role + photo (for premium trust signals)
- Team member names + bios + photos (3–6 people ideal)
- Real jobsite / van / equipment photos (for hero + case studies)
- Before/after project examples (3–5 case studies)
- Voice preferences beyond inferred warm-family tone (any words to love/avoid?)
- GBP URL + verified review count (to avoid overclaiming on the rebuild)
- GHL sub-account details (for `ghl-engineer` to wire up forms correctly)
- Whether rebuild replaces current site on bakerairinc.com (domain swap) or stages elsewhere first
