import { usePrefs } from '@nchain-network/api-react';

export default function useEnableFilePropagationServer() {
  return usePrefs<boolean>('enableFilePropagationServer', false);
}
