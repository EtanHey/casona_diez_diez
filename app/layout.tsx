import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MenuStateWrapper from "./components/stateful_wrapper/MenuStateWrapper";
import MediaFooter from "./components/sections/MediaFooter";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Casona Diez Diez",
  description: `Developed by Etan Joseph Heyman,
    initial design by Natalia Aguilera Meza,
    refined by Dor Zohar`,
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body
        className={`${poppins.className} scrollbar-none h-screen scroll-smooth`}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <MenuStateWrapper />
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
