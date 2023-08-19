import Image from "next/image";
import CddDarkLogo from "./components/svgs/CddDarkLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CddDarkLogo />
    </main>
  );
}
