import "~/styles/globals.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { Toaster } from "~/components/ui/sonner";
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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <body className={`flex-col gap-4 font-sans`}>
        <div className="grid h-screen grid-rows-[auto,1fr]">
          <Header />
          <main className="overflow-y-scroll">{children}</main>
          <Toaster />
        </div>
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
