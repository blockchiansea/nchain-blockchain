import { WalletType } from '@nchain-network/api';
import { useGetWalletBalanceQuery } from '@nchain-network/api-react';
import { mojoToCATLocaleString, mojoToChiaLocaleString, useLocale } from '@nchain-network/core';
import { useWallet } from '@nchain-network/wallets';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export type OfferBuilderWalletBalanceProps = {
  walletId: number;
};

export default function OfferBuilderWalletBalance(props: OfferBuilderWalletBalanceProps) {
  const { walletId } = props;
  const [locale] = useLocale();
  const { data: walletBalance, isLoading: isLoadingWalletBalance } = useGetWalletBalanceQuery({
    walletId,
  });

  const { unit, wallet, loading } = useWallet(walletId);

  const isLoading = isLoadingWalletBalance || loading;

  const nchBalance = useMemo(() => {
    if (isLoading || !wallet || !walletBalance || !('spendableBalance' in walletBalance)) {
      return undefined;
    }

    if (wallet.type === WalletType.STANDARD_WALLET) {
      return mojoToChiaLocaleString(walletBalance.spendableBalance, locale);
    }

    if ([WalletType.CAT, WalletType.CRCAT].includes(wallet.type)) {
      return mojoToCATLocaleString(walletBalance.spendableBalance, locale);
    }

    return undefined;
  }, [isLoading, wallet, walletBalance, locale]);

  if (!isLoading && nchBalance === undefined) {
    return null;
  }

  return (
    <Trans>
      Spendable Balance:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {xchBalance}
          &nbsp;
          {unit?.toUpperCase()}
        </>
      )}
    </Trans>
  );
}
