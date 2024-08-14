import TrendingMovie from "@/components/trending-movie";
import PopularMovie from "@/components/popular-movie";
import TopRatedMovie from "@/components/top-rated-movie";
import NowPlayingMovie from "@/components/now-playing-movie";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 py-10 space-y-20">
      <TrendingMovie />
      <PopularMovie />
      <TopRatedMovie />
      <NowPlayingMovie />
    </main>
  );
}
