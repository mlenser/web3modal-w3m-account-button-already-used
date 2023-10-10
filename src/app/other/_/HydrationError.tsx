'use client';

import { useAccount } from 'wagmi';

export const HydrationError = () => {
  const { isConnected } = useAccount();
  return (
    <div>{isConnected ? <p>Connected</p> : <span>Not connected</span>}</div>
  );
};
