import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { getOffer } from "@/lib/prisma";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { getPhotos } from "@/lib/helpers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ourFileRouter } from "./api/uploadthing/core";
import HeroImage from "./components/layouts/HeroImage";
import MediaFooter from "./components/layouts/MediaFooter";
import MenuStateWrapper from "./components/layouts/stateful_wrapper/MenuStateWrapper";
import { getDictionary } from "./dictionaries";

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
  const photos = await getPhotos();
  const offer = await getOffer(lang);
  const dict = await getDictionary(lang);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body
        className={`${poppins.className} scrollbar-none h-screen scroll-smooth`}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <MenuStateWrapper navDict={dict.nav} />
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
          <HeroImage offer={offer} photos={photos} dict={dict} />
          <div className="mb-8 mt-16 w-full px-0">{children}</div>
          {/* sm:px-12 md:px-24 lg:px-36 xl:px-48 */}
          <MediaFooter />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
