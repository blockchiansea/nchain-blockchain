import { usePrefs } from '@nchain-network/api-react';

export default function useHideObjectionableContent() {
  return usePrefs<boolean>('hideObjectionableContent', true);
}
