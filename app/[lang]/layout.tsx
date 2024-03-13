import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { getOffers } from "@/lib/prisma";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeroImage from "./components/layouts/HeroImage";
import MediaFooter from "./components/layouts/MediaFooter";
import MenuStateWrapper from "./components/layouts/stateful_wrapper/MenuStateWrapper";
import { getDictionary } from "./dictionaries";
import { ourFileRouter } from "./api/uploadthing/core";
import { getPhotos } from "@/lib/actions";
import { Offer } from "@prisma/client";
import { Toaster } from "@/components/ui/toaster";

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
  manifest: "/../site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 10,
  userScalable: true,
  themeColor: "#fff",
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  let admin = false;
  if (lang !== "en" && lang !== "es") admin = true;
  const photos = await getPhotos();
  const { offers, error }: { offers: Offer[]; error?: any } = await getOffers();
  const currentOffer = offers.findIndex((predicate) =>
    predicate.lang.startsWith(lang),
  );
  const offer = offers[currentOffer];
  const dict = await getDictionary(lang, admin);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="robots" content="all" />
      </head>
      <body
        className={`${poppins.className} scrollbar-none h-screen scroll-smooth`}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <MenuStateWrapper navDict={dict.nav} />
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
          <HeroImage offer={{ offer, error }} photos={photos} dict={dict} />
          <div className="mb-8 mt-16 w-full px-0">{children}</div>
          <Toaster />
          {/* sm:px-12 md:px-24 lg:px-36 xl:px-48 */}
          <MediaFooter />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
