import { Button, Flex, CardStep, useCurrencyCode } from '@nchain-network/core';
import { Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import React from 'react';

import useOpenExternal from '../../../hooks/useOpenExternal';

type Props = {
  step?: number;
  onCancel?: () => void;
};

export default function PlotNFTSelectFaucet(props: Props) {
  const { step, onCancel } = props;
  const currencyCode = useCurrencyCode();
  const openExternal = useOpenExternal();

  const handleClick = React.useCallback(() => {
    if (currencyCode === 'TNCH') {
      openExternal('https://testnet0-faucet.ext9.org/');
    } else {
      openExternal('https://faucet.ext9.org/');
    }
  }, [currencyCode, openExternal]);

  return (
    <CardStep
      step={step}
      title={
        <Flex gap={1} alignItems="center">
          <Flex flexGrow={1}>Want to Join a Pool?</Flex>
          {onCancel && (
            <Button onClick={onCancel}>
              <Trans>Cancel</Trans>
            </Button>
          )}
        </Flex>
      }
    >
      <Typography variant="subtitle1">
        <Trans>You need {currencyCode} to join a pool.</Trans>
      </Typography>

      <Box>
        <Button onClick={handleClick} color="primary" variant="contained">
          <Trans>Add {currencyCode} from the Faucet</Trans>
        </Button>
      </Box>
    </CardStep>
  );
}
