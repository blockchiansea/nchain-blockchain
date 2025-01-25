import { type NFTInfo } from '@nchain-network/api';

type NFTOnDemand = {
  nft?: NFTInfo;
  error?: Error;
  promise?: Promise<NFTInfo>;
};

export default NFTOnDemand;
