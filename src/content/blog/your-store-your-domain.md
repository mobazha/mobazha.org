---
title: "Your Store, Your Domain: Branded Stores and Self-Hosting Are Here"
description: "Every Mobazha store can now have its own branded web address and Telegram Bot. Or go fully independent — deploy your store on your own server with one command."
date: "2026-04-03"
author: "Mobazha Team"
image: "/blog/your-store-your-domain.svg"
---

Two weeks ago, when we [launched Open Beta](/blog/introducing-mobazha), we listed three things under "What's Coming": self-hosted stores, custom domains, and AI tools.

Today, two of those three are live.

## Branded store addresses

Every SaaS store on Mobazha can now claim a branded web address like `alice-shop.mymbz.org`. No DNS setup, no certificates to manage, no waiting — just pick a name in **Admin → Sales Channels** and your store is live at that URL in seconds.

Your customers see *your* brand, not ours. The header, hero section, and footer all reflect your store identity. It works exactly like a standalone storefront, but hosted on our infrastructure.

**What you get:**

- A dedicated URL that you can share anywhere
- Branded Telegram Bot — customers interact with *your* bot, not the Mobazha marketplace bot
- Full storefront experience — product browsing, checkout, and order tracking under your brand
- Cross-domain login — buyers sign in once and shop across branded stores seamlessly

If you already have a store, go to **Admin → Sales Channels** to set up your branded address now.

## Self-hosted standalone stores

For sellers who want complete independence, you can now run a full Mobazha store on your own server:

```
curl -sSL https://get.mobazha.org/standalone | sudo bash
```

One command. Two minutes. Your store is running on your hardware, under your control. Data never leaves your server.

**What's included:**

- Full store with product management, orders, payments, and encrypted chat
- USDT & USDC (multi-chain, incl. TRON) + other native assets + Stripe + PayPal out of the box
- Smart contract buyer protection on every crypto transaction
- Automatic Docker updates — stay current without manual intervention
- Optional Tor or Lokinet privacy overlay for censorship-resistant access
- Custom domain support with automatic Let's Encrypt TLS

Works on any VPS with 2 CPU cores and 2 GB RAM (Ubuntu 22.04+ or Debian 12+). Hetzner, DigitalOcean, Vultr, Contabo — or your home server.

See the full details on our [Self-Host page](/self-host).

## Same product, your choice

The key idea: SaaS branded stores and self-hosted stores run the same software and the same business logic. Your products, orders, and customer data are fully portable between modes.

Start with a branded SaaS store today. Move to self-hosted when you're ready. Or do both — the marketplace connects everything.

## What's next

AI-powered selling tools are in active development. Product descriptions, pricing suggestions, inventory management — all built to help independent sellers compete without a team.

We'll share more soon. In the meantime:

- [Claim your branded store address →](https://app.mobazha.org)
- [Deploy your own store →](/self-host)

---

*Questions? Join us on [Telegram](https://t.me/MobazhaHQ) or [Discord](https://discord.gg/3KCPBYxXgb).*
