import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BASE_URL_IMAGE } from "@/utils/constants";
import { getNowPlayingMovies } from "@/utils/apis/movies";

async function NowPlayingMovie() {
  const dataNowPlayingMovie = await getNowPlayingMovies();

  return (
    <section className="container px-4 md:px-6 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Now Playing Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {dataNowPlayingMovie.results.map((movie) => (
          <Link key={movie.id} href={`movie/${movie.id}`} className="group relative rounded-lg overflow-hidden" prefetch={false}>
            <Image
              src={`${BASE_URL_IMAGE}${movie.poster_path}`}
              width="200"
              height="300"
              alt={movie.title}
              className="w-full h-auto object-cover aspect-[200/300] group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <div className="text-white text-sm font-medium line-clamp-2">{movie.title}</div>
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center text-yellow-400 text-sm mt-1">
                  <Star className="w-4 h-4 mr-1" />
                  {movie.vote_average.toFixed(1)}
                </div>
                <div className="text-secondary text-sm mt-1">{new Date(movie.release_date).toLocaleDateString()}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NowPlayingMovie;
