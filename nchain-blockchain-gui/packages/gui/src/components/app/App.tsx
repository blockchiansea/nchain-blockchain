import { ModeProvider, Persist } from '@nchain-network/core';
import React from 'react';

import AppRouter from './AppRouter';

export default function App() {
  return (
    <ModeProvider persist>
      <Persist namespace="root">
        <AppRouter />
      </Persist>
    </ModeProvider>
  );
}
