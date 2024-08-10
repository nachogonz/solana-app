"use client";

import { ReactNode, useEffect, useState } from "react";
import AppWalletProvider from "./AppWalletProvider";

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <AppWalletProvider>{children}</AppWalletProvider>;
}
