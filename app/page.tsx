import HomeGalarySec from "./components/sections/home-sections/HomeGalarySec";
import HomeMediaSec from "./components/sections/home-sections/HomeMediaSec";
import HomeReviewSec from "./components/sections/home-sections/HomeReviewSec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HomeWelcomeSec />
      <HomeServicesSec />
      <HomeGalarySec />
      <HomeReviewSec />
      <HomeMediaSec />
    </main>
  );
}
