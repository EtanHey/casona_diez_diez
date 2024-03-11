import { getPhotos, getReviews } from "@/lib/actions";
import HomeGallerySec from "./components/sections/home-sections/HomeGallerySec";
import HomeReviewSec from "./components/sections/home-sections/HomeReviewSec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const photos = await getPhotos();
  const reviews = await getReviews();
  const photos = await getPhotos();
  const dict = await getDictionary(lang);
  return (
    <>
      <HomeWelcomeSec locale={lang} />
      <HomeServicesSec locale={lang} />
      {photos && photos.length > 0 && (
        <HomeGallerySec
          dict={{
            mainText: dict.home.gallerySection.mainText,
            nextButtonText: dict.common.nextButtonText,
            previousButtonText: dict.common.previousButtonText,
          }}
          photos={photos}
        />
      )}
      {reviews && reviews.length > 0 && (
        <HomeReviewSec
          dict={{
            mainText: dict.home.reviewSection.mainText,
            nextButtonText: dict.common.nextButtonText,
            previousButtonText: dict.common.previousButtonText,
          }}
          reviews={reviews}
        />
      )}
    </>
  );
}
