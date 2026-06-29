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

const CRYPTO_PAYMENTS_BASE =
  'BTC · BCH · LTC · ZEC · ETH · BSC · Base · Polygon · Arbitrum · SOL · USDT/USDC';

export function getSellerComparisonCryptoLabel(): string {
  if (isFiatPaymentVisible()) {
    return `${CRYPTO_PAYMENTS_BASE} + Stripe/PayPal`;
  }
  return CRYPTO_PAYMENTS_BASE;
}

export function getCryptoPaymentsFootnote(): string {
  if (isFiatPaymentVisible()) {
    return 'Available payment methods and any Mobazha, network, or third-party fees are shown before confirmation.';
  }
  return 'Network costs and any optional managed-service fees are separate and should be shown before confirmation.';
}

export function getDefaultSiteDescription(): string {
  if (isFiatPaymentVisible() && isTronPaymentVisible()) {
    return 'Create your own store in 30 seconds. Accept supported crypto and fiat payments. Self-host or choose managed services on clear terms.';
  }
  if (isFiatPaymentVisible()) {
    return 'Create your own store in 30 seconds. Accept supported crypto and fiat payments. Self-host or choose managed services on clear terms.';
  }
  if (isTronPaymentVisible()) {
    return 'Create your own store in 30 seconds. Accept supported crypto payments. Self-host or choose managed services on clear terms.';
  }
  return 'Create your own store in 30 seconds. Accept supported crypto payments. Self-host or choose managed services on clear terms.';
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

export function getCryptoRequiredFaqAnswer(): string {
  if (isFiatPaymentVisible()) {
    return 'No. When fiat methods are available, sellers can choose the payment methods that fit their customers. Payment-provider, network, and optional Mobazha service fees are disclosed separately.';
  }
  return 'Crypto is the primary checkout path today. Connect a supported receiving method in Admin → Payments, and review network, settlement, refund, and dispute terms for each order.';
}

export function getTermsProcessorFeeSentence(): string {
  if (isFiatPaymentVisible()) {
    return 'Third-party payment processors (Stripe, PayPal) may charge their own fees.';
  }
  return '';
}
