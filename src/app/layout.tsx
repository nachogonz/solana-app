import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/providers/Providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Solana App",
  description: "Solana Testing Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-[#09090b] text-white"}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
