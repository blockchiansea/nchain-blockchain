import type { Wallet } from '@nchain-network/api';
import { WalletType } from '@nchain-network/api';
import { mojoToCATLocaleString, mojoToChiaLocaleString, useLocale } from '@nchain-network/core';
import BigNumber from 'bignumber.js';
import { useMemo } from 'react';

export default function useWalletHumanValue(
  wallet: Wallet,
  value?: string | number | BigNumber,
  unit?: string,
): string {
  const [locale] = useLocale();

  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = [WalletType.CAT, WalletType.CRCAT].includes(wallet.type)
        ? mojoToCATLocaleString(value, locale)
        : mojoToChiaLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
