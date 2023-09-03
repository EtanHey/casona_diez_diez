import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MenuStateWrapper from "./components/stateful_wrapper/MenuStateWrapper";
import HeroImage from "./components/HeroImage";
import MediaFooter from "./components/sections/MediaFooter";
import { getPhotos } from "./page";

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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const photos = await getPhotos();
  return (
    <html lang="en">
      <body className={`${poppins.className} scrollbar-none scroll-smooth h-screen`}>
        <MenuStateWrapper />
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
          <HeroImage photos={photos} />
          <div className="mb-8 mt-16 w-full">{children}</div>
          <MediaFooter />
        </main>
      </body>
    </html>
  );
}
