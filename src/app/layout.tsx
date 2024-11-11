import "~/styles/globals.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { Toaster } from "~/shadcn/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "./header";

export const metadata: Metadata = {
  title: "CS2 Lineup Index",
  description: "Store and share your lineups for CS2",
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
          {modal}
          <Toaster />
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
