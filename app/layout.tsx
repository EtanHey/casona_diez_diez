import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MenuStateWrapper from "./components/stateful_wrapper/MenuStateWrapper";
import HeroImage from "./components/HeroImage";
import MediaFooter from "./components/sections/MediaFooter";
import { getPhotos } from "./page";
import { getOffer } from "@/lib/prisma";

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
  const offer = await getOffer();
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body
        className={`${poppins.className} scrollbar-none h-screen scroll-smooth`}
      >
        <MenuStateWrapper />
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
          <HeroImage offer={offer} />
          <div className="mb-8 mt-16 w-full px-0">{children}</div>
          {/* sm:px-12 md:px-24 lg:px-36 xl:px-48 */}
          <MediaFooter />
        </main>
      </body>
    </html>
  );
}
