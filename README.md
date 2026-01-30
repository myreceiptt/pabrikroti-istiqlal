# PABRIK ROTI [![version](https://img.shields.io/badge/version-2.2.22-blue)](https://github.com/myreceiptt/pabrikroti-master/releases/tag/v.2.2.22-istiqlal)

> "This is not just a factory. This is a rehearsal of freedom—kneaded with code, fermented by its community, and baked through the heat of shared struggles."
>
> — Prof. NOTA

## PABRIK ROTI v.2.2.22: Staging Istiqlal Digital Legacy by NFT Indonesia

Link #1: [nft.istiqlal.or.id](https://nft.istiqlal.or.id/)  
Link #2: [leminerale.istiqlal.or.id](https://leminerale.istiqlal.or.id/)  
Link #3: [login.istiqlal.or.id](https://login.istiqlal.or.id/)  
Link #4: [istiqlal.endhonesa.com](https://istiqlal.endhonesa.com/)

## About This Repo

This repo is a prototype web app built for **NFT Indonesia** in collaboration with the management of **Istiqlal Mosque** (Indonesia’s national mosque). The app supports Ramadhan programs and community activities by bringing cultural participation onchain in a way that remains accessible to the broader Istiqlal community.

### What it does

- Publishes curated digital artworks from Indonesian NFT artists for the community to collect.
- Uses **NFTs** as proof of ownership/collection for the artworks.
- Uses a fungible token (**Istiqlal Digital Legacy / IDL**) as a loyalty proof for community participation (attending activities, collecting artworks, and engaging with the program).

### Blockchain

- Built on the **Base** blockchain and designed to scale across future programs beyond Ramadhan, as long as the cultural intent remains rooted in preserving Islamic culture and community practices.

### Technology

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- thirdweb (EVM wallet + contract integrations)
- Vercel deployment

### How we build (quality + workflow)

- We ship production-safe changes and keep the codebase buildable and deployable on Node / Vercel.
- We run controlled dependency upgrades and always verify with audit/lint/build.
- We treat this repo as a living record of cross-organization collaboration (community, venue, and Web3 builders) with clear documentation and repeatable operations.

## 📜 License

This project is licensed under a [**Custom Limited License**](./LICENSE) by [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/).

- 🏛️ [English (UK)](./licenses/LICENSE_en-GB.md)
- 🇮🇩 [Bahasa Indonesia](./licenses/LICENSE_ID.md)
- 🇺🇿 [Oʻzbekcha](./licenses/LICENSE_uz-Latn.md)
- 🇭🇰 [Cantonese – Hong Kong](./licenses/LICENSE_yue-Hant-HK.md)
- 🇲🇾 [Bahasa Malaysia](./licenses/LICENSE_ms-MY.md)
- 🇦🇪 [العربية – الإمارات](./licenses/LICENSE_ar-AE.md)

> 📩 For permission or inquiries, contact: [nota@endhonesa.com](mailto:nota@endhonesa.com)

## Usage

### Install dependencies

```bash
yarn install
```

### Review dependency updates (interactive)

```bash
yarn up -i
```

### Upgrade dependencies

```bash
yarn up -R "*"
```

### Start development server

```bash
yarn dev
```

### Check all the code

```bash
yarn lint
```

### Create a production build

```bash
yarn build
```

### Preview the production build

```bash
yarn start
```

## Resources

- [Prof. NOTA Inc.](https://nota.endhonesa.com/)
- [Prof. NOTA Console](https://prompt.endhonesa.com/)
- [Prof. NOTA Tutor](https://baca.endhonesa.com/)

## Join Prof. NOTA Discord

For questions or suggestions, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is a **Live Artefact App**: the user-facing UX is intentionally frozen
("MINT CLOSED", no wallet prompts), while the codebase remains buildable and
production-safe on Vercel.

### Runtime

- Node: **24.x** (local + Vercel)
- Package manager: **Yarn 4.12.0** (lockfile: `yarn.lock`)
- `@types/node`: **24.10.7** (pinned to match Node 24; 25.x intentionally deferred)
- Deploy target: **Vercel**

### Build System

- Next.js **16.1.4** (Turbopack)

### Monthly Safe Updates (recommended)

Monthly is **monitor + verify**, not modernization.

1. Check what’s outdated (report only):

   - `yarn outdated`

2. Security report (report only unless explicitly approved):

   - `yarn npm audit --severity moderate`

3. Verify build reproducibility:

   - `yarn lint`
   - `yarn build`

4. Verify production sanity:

   - Confirm "MINT CLOSED"
   - Confirm no wallet prompts / connect flows
   - Confirm no critical console errors

### Major Updates (quarterly / scheduled)

Major upgrades must be done **one at a time**, with a dedicated PR and full testing.
Artefact UX must remain unchanged.

Examples:

- React major version upgrade
- Web3 stack upgrade (e.g., web3 v1 → v4)
- Toolchain changes
- Node major policy change

### Artefact UX Policy (Frozen)

- Minting must remain **disabled**
- Wallet connect must remain **disabled**
- Any functional change requires a versioned successor (new tag/release)

---

---
