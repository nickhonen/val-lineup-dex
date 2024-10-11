import "~/styles/globals.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "./header";

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
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <body className="flex-col gap-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
