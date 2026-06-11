/**
 * Marketing-site payment visibility — keep in sync with mobazha-unified
 * packages/core/config/paymentMethodVisibility.ts until fiat/TRON GA.
 */
export const PAYMENT_METHOD_VISIBILITY = {
  tron: false,
  fiat: false,
} as const;

export function isFiatPaymentVisible(): boolean {
  return PAYMENT_METHOD_VISIBILITY.fiat;
}

export function isTronPaymentVisible(): boolean {
  return PAYMENT_METHOD_VISIBILITY.tron;
}

const CRYPTO_PAYMENTS_BASE = 'BTC · BCH · LTC · ZEC · ETH · SOL · USDT/USDC';

export function getSellerComparisonCryptoLabel(): string {
  if (isFiatPaymentVisible()) {
    return `${CRYPTO_PAYMENTS_BASE} + Stripe/PayPal`;
  }
  return CRYPTO_PAYMENTS_BASE;
}

export function getCryptoPaymentsFootnote(): string {
  if (isFiatPaymentVisible()) {
    return 'Crypto payments settle with zero platform fees. Fiat payments still incur third-party processor fees (Stripe / PayPal).';
  }
  return 'Crypto payments settle with zero platform fees on Mobazha.';
}

export function getDefaultSiteDescription(): string {
  if (isFiatPaymentVisible() && isTronPaymentVisible()) {
    return 'Create your own store in 30 seconds. Accept USDT & USDC on multiple chains (incl. TRON), plus crypto & fiat. Zero commissions. Your data, your rules.';
  }
  if (isFiatPaymentVisible()) {
    return 'Create your own store in 30 seconds. Accept USDT & USDC on multiple chains, plus crypto & fiat. Zero commissions. Your data, your rules.';
  }
  if (isTronPaymentVisible()) {
    return 'Create your own store in 30 seconds. Accept USDT & USDC on multiple chains (incl. TRON), plus native crypto. Zero commissions. Your data, your rules.';
  }
  return 'Create your own store in 30 seconds. Accept USDT & USDC on multiple chains, plus native crypto. Zero commissions. Your data, your rules.';
}

export function getTrustBarPaymentItem(): { label: string; labelShort: string } {
  if (isFiatPaymentVisible()) {
    return {
      label: 'Crypto + Stripe/PayPal — Privacy-First Payments',
      labelShort: 'Crypto · Stripe · PayPal',
    };
  }
  return {
    label: 'Crypto — Privacy-First Payments',
    labelShort: 'Crypto payments',
  };
}

export function filterPricingFeatures(features: string[]): string[] {
  if (isFiatPaymentVisible()) return features;
  return features
    .filter(f => !/stripe|paypal|fiat payments/i.test(f))
    .map(f => (f === 'All payment channels' ? 'All supported crypto chains' : f));
}

export function getCryptoRequiredFaqAnswer(): string {
  if (isFiatPaymentVisible()) {
    return "No. You can sell with Stripe or PayPal alone (paid plans). But crypto is where the zero-commission advantage is largest — and it's always available on the free tier. Most sellers enable both.";
  }
  return "Crypto is the primary checkout path today — zero platform fees and no chargebacks. Connect your receiving addresses in Admin → Payments and you're ready to sell.";
}

export function getTermsProcessorFeeSentence(): string {
  if (isFiatPaymentVisible()) {
    return 'Third-party payment processors (Stripe, PayPal) may charge their own fees.';
  }
  return '';
}
