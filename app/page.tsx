import Image from "next/image";
import HomeWelcomeSec from "./components/sections/HomeWelcomeSec";
import HomeMediaSec from "./components/sections/HomeMediaSec";
import HomeRoomsSec from "./components/sections/HomeRoomsSec";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <HomeWelcomeSec />
      <HomeRoomsSec />
      <HomeMediaSec />
    </main>
  );
}
