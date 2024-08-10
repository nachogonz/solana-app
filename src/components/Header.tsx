import Image from "next/image";
import WalletButtonConnect from "@/components/buttons/WalletButtonConnect";
import WalletBalance from "@/components/WalletBalance";

const Header = () => {
  return (
    <div className="fixed top-10 z-10 w-full px-24 items-center justify-between font-mono font-bold text-[14px] lg:flex">
      <div className="flex items-center justify-center">
        <Image
          className="relative drop-shadow-[0_0_0.7rem_#ffffff70] "
          src="/solana-logo.png"
          alt="solana-logo"
          width={65}
          height={37}
          priority
        />
      </div>
      <div className="flex items-center justify-center gap-10">
        <WalletBalance />
        <WalletButtonConnect />
      </div>
    </div>
  );
};

export default Header;
