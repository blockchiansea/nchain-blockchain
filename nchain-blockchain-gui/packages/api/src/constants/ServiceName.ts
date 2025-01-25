const ServiceName = {
  WALLET: 'nchain_wallet',
  FULL_NODE: 'nchain_full_node',
  FARMER: 'nchain_farmer',
  HARVESTER: 'nchain_harvester',
  SIMULATOR: 'nchain_full_node_simulator',
  DAEMON: 'daemon',
  PLOTTER: 'nchain_plotter',
  TIMELORD: 'nchain_timelord',
  INTRODUCER: 'nchain_introducer',
  EVENTS: 'wallet_ui',
  DATALAYER: 'nchain_data_layer',
  DATALAYER_SERVER: 'nchain_data_layer_http',
} as const;

type ObjectValues<T> = T[keyof T];

export type ServiceNameValue = ObjectValues<typeof ServiceName>;

export default ServiceName;
