import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { getTrendingMovies } from "@/utils/apis/movies";
import { BASE_URL_IMAGE } from "@/utils/constants";

async function TrendingMovie() {
  const dataTrendingMovieDay = await getTrendingMovies("day");
  const dataTrendingMovieWeek = await getTrendingMovies("week");

  return (
    <section className="container px-4 md:px-6 mx-auto">
      <Tabs defaultValue="day" className="w-sm">
        <div className="flex items-center gap-4 pb-2 border-b">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <TabsList className="bg-background flex gap-2 border rounded-lg">
            <TabsTrigger className="bg-secondary text-primary rounded-lg" value="day">
              Day
            </TabsTrigger>
            <TabsTrigger className="bg-secondary text-primary rounded-lg" value="week">
              Week
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="day">
          <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {dataTrendingMovieDay.results.map((movie) => (
              <Link key={movie.id} href={`movie/${movie.id}`} className="group relative rounded-lg overflow-hidden" prefetch={false}>
                <Image
                  src={`${BASE_URL_IMAGE}/w500${movie.poster_path}`}
                  width="200"
                  height="300"
                  alt={movie.title}
                  className="w-full h-auto object-cover aspect-[200/300] group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="text-white text-sm font-medium">
                    {movie.title} ({movie.release_date.toLocaleString().slice(0, 4)})
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm mt-1">
                    <Star className="w-4 h-4 mr-1" />
                    {movie.vote_average.toFixed(1)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="week">
          <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {dataTrendingMovieWeek.results.map((movie) => (
              <Link key={movie.id} href={`movie/${movie.id}`} className="group relative rounded-lg overflow-hidden" prefetch={false}>
                <Image
                  src={`${BASE_URL_IMAGE}/w500${movie.poster_path}`}
                  width="200"
                  height="300"
                  alt={movie.title}
                  className="w-full h-auto object-cover aspect-[200/300] group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="text-white text-sm font-medium">
                    {movie.title} ({movie.release_date.toLocaleString().slice(0, 4)})
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm mt-1">
                    <Star className="w-4 h-4 mr-1" />
                    {movie.vote_average.toFixed(1)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default TrendingMovie;
