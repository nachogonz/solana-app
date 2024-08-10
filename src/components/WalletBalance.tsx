"use client";

import useSolanaConnection from "@/hooks/useSolanaConnection";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

const WalletBalance = () => {
  const { connection, publicKey } = useSolanaConnection();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery2Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery2Seconds, 2000);
      })();
    }
  }, [publicKey, connection, balance]);

  return (
    <p>
      {publicKey ? (
        <>
          Wallet Balance: <span className="text-[green]">{balance} SOL</span>
        </>
      ) : null}
    </p>
  );
};

export default WalletBalance;
