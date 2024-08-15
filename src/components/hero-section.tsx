import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Link from "next/link";
import { getPopularMovies } from "@/utils/apis/movies";
import { BASE_URL_IMAGE } from "@/utils/constants";

async function HeroSection() {
  const movies = await getPopularMovies();

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {movies.results.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="relative h-[300px] sm:h-[420px] lg:h-[500px] overflow-hidden">
              <Image
                src={`${BASE_URL_IMAGE}/original${movie.backdrop_path}`}
                alt={movie.title}
                width={1200}
                height={700}
                className="w-full h-full object-cover aspect-[1200/700]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)]">
                <div className="absolute top-1/2 -translate-y-1/2 flex flex-col justify-end p-12 sm:p-10 lg:p-16">
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{movie.title}</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-white/80 line-clamp-4 md:line-clamp-none">{movie.overview}</p>
                    <div className="flex gap-3">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        prefetch={false}
                      >
                        Watch Trailer
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        prefetch={false}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute bg-secondary top-1/2 left-2 -translate-y-1/2 z-10 transform cursor-pointer" />
      <CarouselNext className="absolute bg-secondary top-1/2 right-2 -translate-y-1/2 z-10 transform cursor-pointer" />
    </Carousel>
  );
}

export default HeroSection;
