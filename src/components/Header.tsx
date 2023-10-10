'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import Link from 'next/link';
export const Header = () => {
  const { open } = useWeb3Modal();

  return (
    <div className="flex flex-col gap-5">
      <button onClick={() => open()}>Open Connect Modal</button>
      <Link href="/">Home</Link>
      <Link href="/other">Other</Link>
    </div>
  );
};
