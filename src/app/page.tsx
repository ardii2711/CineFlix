import TrendingMovie from "@/components/trending-movie";
import PopularMovie from "@/components/popular-movie";
import TopRatedMovie from "@/components/top-rated-movie";
import NowPlayingMovie from "@/components/now-playing-movie";
import HeroSection from "@/components/hero-section";
import Link from "next/link";
import UpcomingMovie from "@/components/upcoming-movie";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 pb-10 space-y-8 md:space-y-12">
      <HeroSection />
      <TrendingMovie />
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center pb-2 border-b mb-3 md:mb-6">
          <h2 className="text-2xl font-bold">Popular Movies</h2>
          <Link href="/movie/popular" className="text-primary font-semibold hover:underline">
            View All
          </Link>
        </div>
        <PopularMovie />
      </section>
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center pb-2 border-b mb-3 md:mb-6">
          <h2 className="text-2xl font-bold">Now Playing Movies</h2>
          <Link href="/movie/now_playing" className="text-primary font-semibold hover:underline">
            View All
          </Link>
        </div>
        <NowPlayingMovie />
      </section>
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center pb-2 border-b mb-3 md:mb-6">
          <h2 className="text-2xl font-bold">Upcoming Movies</h2>
          <Link href="/movie/upcoming" className="text-primary font-semibold hover:underline">
            View All
          </Link>
        </div>
        <UpcomingMovie />
      </section>
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center pb-2 border-b mb-3 md:mb-6">
          <h2 className="text-2xl font-bold">Top Rated Movies</h2>
          <Link href="/movie/top_rated" className="text-primary font-semibold hover:underline">
            View All
          </Link>
        </div>
        <TopRatedMovie />
      </section>
    </main>
  );
}
