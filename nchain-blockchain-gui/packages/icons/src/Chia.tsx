import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

import ChiaBlackIcon from './images/nchain-black.svg';
import ChiaIcon from './images/nchain.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={ChiaIcon} viewBox="0 0 100 29" {...props} />;
}

export function ChiaBlack(props: SvgIconProps) {
  return <SvgIcon component={ChiaBlackIcon} viewBox="0 0 100 29" sx={{ width: '100px', height: '29px' }} {...props} />;
}
