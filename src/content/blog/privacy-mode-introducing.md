---
title: "Two Paths to Privacy on Mobazha"
description: "Some commerce shouldn't leave a trail. We're shipping two complementary privacy features — network-layer anonymity with Tor and Lokinet, and payment-layer privacy with Guest Checkout."
date: "2099-12-31"
author: "Mobazha Team"
draft: true
---

Commerce on the internet has always come with a trail. Your IP, your wallet address, your email, your shipping details — all recorded, often shared, rarely forgotten.

For most transactions that's fine. But some aren't. Whistleblowers buying privacy tools. Journalists ordering equipment in restrictive regions. Collectors trading items they'd rather not discuss publicly. Small sellers in countries where commerce itself can be dangerous.

Mobazha was always built to support these cases. Today, we're explaining how — and what's shipping next.

## Privacy is a stack, not a switch

"Private" gets used loosely. On most platforms, it just means "we promise not to look too closely." That's not a technical guarantee. It's a pinky swear.

Real privacy requires separate protections at separate layers:

- **Network layer** — who is talking to whom
- **Payment layer** — who paid how much to whom
- **Identity layer** — who holds the account

Mobazha's Privacy Mode addresses the first two. (The third is an active area — we'll get there.)

## Path 1: Tor and Lokinet (network-layer)

Mobazha nodes have had optional Tor support for a while. We've now extended this with first-class [Lokinet](https://lokinet.org/) support and a proper privacy-mode flag that routes everything — libp2p traffic, blockchain RPC calls, external HTTP — through the configured overlay.

**What this gives you:**

- A `.onion` or `.loki` address for your store that works without revealing your server's IP
- Buyers can browse and order without leaking their location to you or to intermediaries
- Your store stays reachable even when clearnet access is blocked or throttled

**What this doesn't give you:** the payment layer. If your store accepts USDT on Ethereum and a buyer pays from a known exchange address, that transaction is still public on-chain. Network anonymity alone isn't enough.

This is already in the codebase and usable for self-hosted stores. See the `--socksproxy` and `--privacy-mode` flags in the [self-host guide](/self-host).

## Path 2: Guest Checkout (payment-layer)

Guest Checkout is the piece most marketplaces are missing. It solves a practical problem: **most buyers don't have crypto wallets.**

Today, to pay with crypto on almost any platform, a buyer needs to install MetaMask, fund it, hold the right token on the right chain, understand gas, sign messages. That's a wall. Most shoppers never make it over.

Guest Checkout removes the wall:

1. Buyer adds items to cart and hits checkout
2. Store generates a unique payment address and a private tracking URL
3. Buyer sends the exact amount from **any** wallet — a custodial exchange, a hardware wallet, a friend's account, anything
4. Store auto-detects the payment and fulfils the order
5. Buyer bookmarks the URL to check status, get shipping updates, and contact support anonymously

No account. No signup. No wallet connection. No extension.

**What this gives you:**

- Buyers who never heard of "non-custodial" can now pay in crypto
- No email, no phone number, no KYC on the buyer side
- Each order gets its own payment address, derived on-node with no reuse
- Funds sweep to your main wallet automatically after confirmation

**Known trade-offs** we've chosen on purpose:

- No marketplace-level dispute resolution on guest orders (there's no account to mediate with). Sellers can still refund manually. Best for low-to-mid value items and digital goods.
- Payment address is bound to the exact coin and network the buyer picks. If they send the wrong token or the wrong chain, funds may be unrecoverable — same as any crypto transfer, we just surface this clearly.
- Exchange rate is quoted at order time and honoured for a fixed window. If the window expires, the order expires too.

Guest Checkout ships next. We'll post a full announcement when it's available in production.

## Who this is for

Privacy Mode isn't for everyone, and we're not pretending otherwise. If you're running a general-purpose store selling consumer goods, you probably want the standard experience — accounts, returns, loyalty, the full surface.

Privacy Mode is for the sellers and buyers who need the opposite. Smaller audience, sharper requirements:

- **Digital goods and services** where shipping addresses don't matter
- **Regions** where traditional payment processors are restricted or surveilled
- **Communities** where buyers want a clean separation between their browsing identity and their payment identity
- **One-off transactions** where a full account relationship is overkill

## What comes after this

- Unified order view in the seller admin — standard and guest orders side by side
- Guest-side encrypted messaging — so buyers and sellers can still communicate without accounts
- Payment Links — share a one-click buy URL outside the store
- Optional time-locked escrow for higher-value guest orders
- More overlay networks as they mature

We'll ship these incrementally. Each one is a separate post.

## When

Tor and Lokinet support is available for self-hosted stores today. Guest Checkout is in final testing and ships within weeks — we'll link the setup guide from this post when it lands.

If you want early access to Guest Checkout as a seller, reach out on [Telegram](https://t.me/MobazhaHQ) or [Discord](https://discord.gg/3KCPBYxXgb).

---

*Questions about Privacy Mode? We're on [Telegram](https://t.me/MobazhaHQ) and [Discord](https://discord.gg/3KCPBYxXgb). For technical depth, the design notes are [open-source](https://github.com/mobazha).*
