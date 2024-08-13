import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Valorant Lineup Index",
  description: "Store and share your lineups for Valorant",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};




export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex-col gap-4">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
