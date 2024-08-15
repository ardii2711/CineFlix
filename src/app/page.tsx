import TrendingMovie from "@/components/trending-movie";
import PopularMovie from "@/components/popular-movie";
import TopRatedMovie from "@/components/top-rated-movie";
import NowPlayingMovie from "@/components/now-playing-movie";
import HeroSection from "@/components/hero-section";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 pb-10 space-y-8 md:space-y-12">
      <HeroSection/>
      <TrendingMovie />
      <PopularMovie />
      <TopRatedMovie />
      <NowPlayingMovie />
    </main>
  );
}
