'use client';

import { useAccount } from 'wagmi';

export const WagmiExample = () => {
  const { address } = useAccount();

  return <div>The connected wallet is {address}</div>;
};
