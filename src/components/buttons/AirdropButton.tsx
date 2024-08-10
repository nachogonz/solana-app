import useSolanaConnection from "@/hooks/useSolanaConnection";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { Input } from "../ui/input";

const AirdropButton = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const { connection, publicKey } = useSolanaConnection();
  const noAmount = amount === 0;

  const getAirdropOnClick = async () => {
    setIsLoading(true);
    try {
      if (!publicKey) throw new Error("Wallet is not Connected");

      const [lastestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL),
      ]);

      const signatureRes = await connection.confirmTransaction({
        signature,
        ...lastestBlockhash,
      });

      if (signatureRes) {
        alert("Airdrop Success");
      }
    } catch (error) {
      console.log(error);
      alert("You are Rate limited for Airdrop");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center gap-12 relative z-200">
      <Input
        className="text-white text-lg h-16"
        type="number"
        value={noAmount ? "" : amount}
        placeholder="Enter airdrop amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        className={`${
          noAmount
            ? "bg-gray-800 drop-shadow-[none]"
            : "hover:scale-105 hover:drop-shadow-[0_0_0.5rem_#ffffff70]"
        } bg-[#10141f] text-2xl text-white min-w-[300px] py-4 rounded-3xl drop-shadow-[0_0_0.3rem_#ffffff70] `}
        onClick={getAirdropOnClick}
        disabled={isLoading || noAmount}
      >
        {isLoading ? <PulseLoader size={10} color="white" /> : "Airdrop Button"}
      </button>
    </div>
  );
};

export default AirdropButton;
