import { toBech32m } from '@nchain-network/api';
import { useCurrencyCode } from '@nchain-network/core';
import { useMemo } from 'react';

export default function useBurnAddress(): string | undefined {
  const feeUnit = useCurrencyCode();

  const retireAddress = useMemo(() => {
    if (!feeUnit) {
      return undefined;
    }

    return toBech32m('000000000000000000000000000000000000000000000000000000000000dead', feeUnit);
  }, [feeUnit]);

  return retireAddress;
}
