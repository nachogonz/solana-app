import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const useSolanaConnection = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  return { connection, publicKey };
};

export default useSolanaConnection;
