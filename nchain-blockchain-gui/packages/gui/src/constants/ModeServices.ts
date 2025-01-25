import { ServiceName } from '@nchain-network/api';
import { Mode } from '@nchain-network/core';

export default {
  [Mode.WALLET]: [ServiceName.WALLET],
  [Mode.FARMING]: [ServiceName.WALLET, ServiceName.FULL_NODE, ServiceName.FARMER, ServiceName.HARVESTER],
};

export const SimulatorServices = [ServiceName.WALLET, ServiceName.SIMULATOR];
