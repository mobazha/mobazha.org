export const economicsPolicy = {
  stage: 'Beta',
  effectiveDate: '2026-06-29',
  feesPath: '/fees',
  communityPolicyUrl: '/fees#community-boundary',
  currentStatus: {
    community:
      'Self-hosted Community software has no mandatory central Mobazha transaction fee. Operators pay their own infrastructure, network, and third-party costs.',
    cloud:
      'Mobazha Cloud has no subscription charge during the current Beta. Future plans will be published with an effective date before they apply.',
    managedTransactions:
      'Managed transaction and distribution services are pilots. Any applicable Mobazha fee must be shown before confirmation.',
  },
} as const;
