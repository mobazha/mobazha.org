---
title: "Buy With Crypto Without a Wallet"
description: "You don't need MetaMask to pay with crypto on Mobazha. Guest Checkout lets you pay from any exchange, any wallet — no account, no setup."
date: "2099-12-31"
author: "Mobazha Team"
draft: true
---

If you've ever tried to buy something with crypto and bounced off the "connect wallet" step, this post is for you.

## The problem in one sentence

Crypto checkout usually starts with "install this extension, create a seed phrase, buy some ETH to cover gas, then come back." For a one-off purchase that's absurd — nobody makes you install a new bank before you use a new website.

## What Guest Checkout does

It shortens the whole thing to three steps:

1. **Pick items and hit checkout.** Enter a shipping address if the item needs shipping. No account, no signup.
2. **Pick a coin.** We show you an address and the exact amount. You get a private tracking link that acts as your receipt.
3. **Send payment from anywhere.** Your Coinbase or Binance account, a hardware wallet, MetaMask, a friend's wallet — anything that can send the coin on the right network works.

The store's system watches for the payment on-chain. As soon as it confirms, your order moves to the next step automatically.

## Three things to know before you pay

These are the same rules that apply to any crypto payment, but they matter a bit more here because there's no wallet popup to catch mistakes for you.

1. **Send the exact amount, the exact coin, on the exact network shown.**
   If the page says "USDT on TRON," sending USDT on Ethereum will lose the funds. This isn't a Mobazha rule — it's how blockchains work. Double-check the coin and network on your sending app before you confirm.

2. **Save the tracking URL. It's your receipt.**
   Bookmark it, email it to yourself, screenshot the QR code — whatever you'd do with an order number elsewhere. It's the only way back to your order. No email means no password reset option, so don't close the tab until you've saved it somewhere.

3. **There's a 24-hour payment window.**
   After 24 hours with no payment, the order expires and the items go back into the seller's inventory. If you need more time than that, just start a new order when you're ready — nothing is locked in before you pay.

## What you get

- **A live-updating status page.** The same tracking URL shows "Awaiting payment" → "Payment detected" → "Shipped" → "Delivered." Refresh anytime.
- **Anonymous messaging with the seller.** Ask about shipping, sizing, delivery — no account required. The seller replies through the same order page.
- **A clean paper trail.** Transaction hash, payment address, coin, amount, seller response times — all visible from the tracking URL, forever.

## What you give up compared to a standard account

We'd rather be up front about this than have you discover it later.

- **No dispute arbitration.** Standard Mobazha orders can open a dispute and get a neutral moderator involved if something goes wrong. Guest orders can't. The seller can still refund you voluntarily — and most will for legitimate issues — but there's no escalation path.
- **No order history across purchases.** Each guest order has its own tracking URL. Three orders from three stores = three URLs to keep. A regular account would bundle them under one login.
- **No returning-customer perks.** Loyalty discounts, saved addresses, subscriptions, "buy again" — those need an account. Guest checkout is for the one-time case.

If any of that bothers you, create a regular account instead — it's a one-minute flow and doesn't require a crypto wallet either. Guest Checkout is there specifically for the "I just want to buy this thing and move on" case.

## Try it

<!-- TODO at GA: replace with a link to a showcase store accepting Guest Checkout. -->

We'll link to a live store here once the first ones go live. In the meantime, if you're a seller who wants to turn this on for your shop, see [Guest Checkout for Sellers](/blog/guest-checkout-for-sellers/).

If a payment doesn't show up after you sent it, head to the tracking URL first — it's almost always either a network mismatch or just slow confirmations. The page will tell you which.

---

*Questions? Ask in [Telegram](https://t.me/MobazhaHQ) or [Discord](https://discord.gg/3KCPBYxXgb). We keep an eye on both.*
