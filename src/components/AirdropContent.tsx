"use client";

import AirdropButton from "./buttons/AirdropButton";
import useSolanaConnection from "@/hooks/useSolanaConnection";

const AirdropContent = () => {
  const { publicKey } = useSolanaConnection();
  return <div>{publicKey ? <AirdropButton /> : <h1 className="text-4xl">Connect Wallet To Start Airdrop</h1>}</div>;
};

export default AirdropContent;
