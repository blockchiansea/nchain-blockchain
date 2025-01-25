import { WalletType } from '@nchain-network/api';
import type { Wallet } from '@nchain-network/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'NChain';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
