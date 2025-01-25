import { usePrefs } from '@nchain-network/api-react';

export default function useEnableDataLayerService() {
  return usePrefs<boolean>('enableDataLayerService', false);
}
