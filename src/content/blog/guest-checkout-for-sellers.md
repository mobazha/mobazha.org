---
title: "Guest Checkout: Accept Crypto From Buyers Who Don't Have a Wallet"
description: "Most shoppers don't have a crypto wallet. Guest Checkout lets them pay anyway — from any exchange, any wallet, no account required. Here's how to turn it on and what changes in your admin."
date: "2099-12-31"
author: "Mobazha Team"
draft: true
---

If you sell on Mobazha today, your buyers need a connected wallet to pay. MetaMask, WalletConnect, something. That covers the crypto-native crowd, but it's a wall for everyone else.

Guest Checkout knocks the wall down. Buyers without wallets — or without the *specific* token on the *specific* chain you accept — can now pay from wherever they hold crypto, including centralised exchanges. No signup, no connection, no extension.

For sellers, this means a larger addressable market. For buyers, it means commerce that feels closer to a bank transfer than to DeFi.

<!-- TODO: Add a 1-paragraph quote from an early-access seller once we have one. -->

## Who should turn this on

Guest Checkout is a deliberate trade-off, not a drop-in upgrade. Enable it when:

- You sell **digital goods or services** that don't require shipping addresses
- Your average order is **low to mid value** (trade-off: no marketplace dispute arbitration on guest orders)
- You want to reach **buyers outside the crypto-native bubble** who still prefer to pay in crypto
- You're running in **privacy-first contexts** where account relationships aren't wanted

Stay with standard checkout when:

- You need account-based features (subscriptions, loyalty, repeat-buyer discounts)
- Your orders are high-value and depend on marketplace dispute resolution
- You want rich buyer profiles for marketing

Both modes coexist — the setting is per store, and you can have both flows enabled at once. Buyers pick at checkout.

<!-- TODO: Link to an FAQ doc section explaining the dispute-arbitration trade-off in more depth. -->

## Turning it on

Guest Checkout lives in **Admin → Settings → Guest Checkout**. Three toggles:

1. **Enable Guest Checkout** — master switch
2. **Accepted coins** — pick which cryptocurrencies buyers can use (must have a bound receiving account for each)
3. **Payment window** — how long a guest order stays open before it expires (default: 30 minutes)

![Guest Checkout admin settings](/blog/guest-checkout/admin-settings-enabled.png)

Once enabled, the guest flow becomes available at `/guest-checkout` on your storefront. Standard wallet checkout stays untouched.

<!-- TODO: Confirm final admin path after any last-minute copy changes before publish. -->

## What buyers see

The buyer journey is four steps, designed to look nothing like a crypto tutorial.

**Step 1 — Review cart.** Same cart component as the standard flow, no surprises.

![Guest Checkout step 1 — review cart](/blog/guest-checkout/cart-review.png)

**Step 2 — Shipping (if needed).** Collected only for physical goods. Stored on-order, not on any buyer profile.

![Guest Checkout step 2 — shipping form](/blog/guest-checkout/shipping-filled.png)

**Step 3 — Pick a coin.** Only the ones you accepted and have receiving accounts for.

![Guest Checkout step 3 — coin selection](/blog/guest-checkout/coin-selection.png)

**Step 4 — Pay.** The buyer gets a one-time payment address, the exact amount, a QR code, and a private tracking URL.

![Guest Checkout step 4 — payment instructions](/blog/guest-checkout/payment-instructions.png)

The tracking URL is the buyer's receipt. It updates live as the payment confirms, the order is fulfilled, or (if they don't pay in time) expires.

![Guest order status — awaiting payment](/blog/guest-checkout/order-awaiting-payment.png)

## What you see

Guest orders appear in your admin **alongside** standard orders. One list, one workflow.

<!-- TODO: Add a screenshot of the Unified Orders list showing a mix of standard and guest orders. -->

The differences are small and visible at a glance:

- A **Guest** badge on the order row
- No buyer profile link (there isn't one)
- An anonymous messaging thread instead of an account-linked chat
- Fulfilment, refund, and order-complete actions work the same

Funds from guest orders auto-sweep to your main wallet once the payment confirms. You don't need to track payment addresses manually.

<!-- TODO: Expand this section with 2-3 screenshots once we finalise the unified order view UX. -->

## Where this is going

This is the first release. On deck:

- **Encrypted guest messaging** — so you can still communicate with the buyer even without an account
- **Payment Links** — generate a one-click buy URL for a specific product to share outside the store
- **Auto-sweep policies** — configure when and how often guest funds consolidate to your main wallet
- **Optional time-locked escrow** — for higher-value guest orders that want a cooling-off window without marketplace mediation

## Getting started

<!-- TODO: Replace placeholder links with final documentation URLs at publish time. -->

1. Bind at least one receiving account per coin you want to accept — **Admin → Wallet → Receiving Accounts**
2. Enable Guest Checkout — **Admin → Settings → Guest Checkout**
3. Test with a small order on testnet before announcing it to your buyers
4. Add a mention of "no wallet? pay from any exchange" to your store description

Full seller guide: [Guest Checkout for Sellers](/docs/guest-checkout/sellers) <!-- TODO: confirm URL -->
Operational details and FAQ: [Guest Checkout Setup Guide](/docs/guest-checkout/setup) <!-- TODO: confirm URL -->

---

*Running into issues or have suggestions? We're on [Telegram](https://t.me/MobazhaHQ) and [Discord](https://discord.gg/3KCPBYxXgb). Guest Checkout is still hot off the press — every early-seller report helps.*
