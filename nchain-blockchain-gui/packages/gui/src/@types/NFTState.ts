import { type NFTInfo } from '@nchain-network/api';

type NFTState = {
  nft?: NFTInfo;
  isLoading: boolean;
  error?: Error;
};

export default NFTState;
