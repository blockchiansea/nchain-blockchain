import { useEffect, useCallback, useRef } from 'react';

import type Notification from '../@types/Notification';
import { disconnectPair, bindEvents, cleanupPairings } from '../util/walletConnect';

import useWalletConnectClient from './useWalletConnectClient';
import useWalletConnectCommand from './useWalletConnectCommand';
import useWalletConnectPairs from './useWalletConnectPairs';
import useWalletConnectPreferences from './useWalletConnectPreferences';

export type UseWalletConnectConfig = {
  projectId: string;
  relayUrl?: string;
  metadata?: {
    name: string;
    description: string;
    url: string;
    icons: string[];
  };
  debug?: boolean;
  onNotification?: (notification: Notification) => void;
};

export default function useWalletConnect(config: UseWalletConnectConfig) {
  const { projectId, relayUrl, metadata, debug, onNotification } = config;

  const pairs = useWalletConnectPairs();
  const { client, isLoading, error } = useWalletConnectClient({
    projectId,
    relayUrl,
    metadata,
    debug,
  });

  const { process, isLoading: isLoadingWalletConnectCommand } = useWalletConnectCommand({
    onNotification,
  });
  const { enabled } = useWalletConnectPreferences();

  const processRef = useRef(process);
  processRef.current = process;

  const isLoadingData = isLoading || isLoadingWalletConnectCommand;

  useEffect(() => {
    if (!client) {
      return undefined;
    }

    cleanupPairings(client, pairs);

    return bindEvents(client, pairs, () => processRef.current);
  }, [client, pairs]);

  const handlePair = useCallback(
    async (uri: string, fingerprints: number[], ext9 = false) => {
      if (!client) {
        throw new Error('Client is not defined');
      }

      const { topic } = await client.core.pairing.pair({ uri });
      if (!topic) {
        throw new Error('Pairing failed');
      }

      pairs.addPair({
        topic,
        fingerprints,
        ext9,
        sessions: [],
      });

      return topic;
    },
    [client, pairs],
  );

  const handleDisconnect = useCallback(
    (topic: string) => {
      if (!client) {
        throw new Error('Client is not defined');
      }

      return disconnectPair(client, pairs, topic);
    },
    [client, pairs],
  );

  return {
    enabled,
    isLoading: isLoadingData,
    error,

    pair: handlePair,
    disconnect: handleDisconnect,

    pairs,
  };
}
