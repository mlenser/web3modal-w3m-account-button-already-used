'use client';

import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';

const projectId = '43afef0ff5a5a083bc3df1ad988a021e';

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

const queryClient = new QueryClient({});

createWeb3Modal({ wagmiConfig, projectId, chains });

export const Providers = ({ children }: { children: ReactNode }) => (
  <WagmiConfig config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiConfig>
);
