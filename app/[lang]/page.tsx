import { getPhotos } from "@/lib/actions";
import HomeGallerySec from "./components/sections/home-sections/HomeGallerySec";
import HomeServicesSec from "./components/sections/home-sections/HomeServicesSec";
import HomeWelcomeSec from "./components/sections/home-sections/HomeWelcomeSec";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
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
    </>
  );
}
