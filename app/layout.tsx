import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MenuStateWrapper from "./components/stateful_wrapper/MenuStateWrapper";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} scrollbar-none h-screen`}>
        <MenuStateWrapper />
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
