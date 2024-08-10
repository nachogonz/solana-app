"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletButtonConnect = () => {
  return (
    <WalletMultiButton
      style={{
        backgroundColor: "#10141f",
        borderRadius: "10px",
        padding: "30px",
      }}
    />
  );
};

export default WalletButtonConnect;
