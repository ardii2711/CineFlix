/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vmxkkV6nyog
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"

export default function Component() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container">
        <Carousel className="rounded-lg shadow-lg">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={1200}
                  height={500}
                  alt="Movie Poster"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "1200/500", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                  <h2 className="text-3xl font-bold">The Shawshank Redemption</h2>
                  <p className="mt-2 text-lg">
                    Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts
                    of common decency.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={1200}
                  height={500}
                  alt="Movie Poster"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "1200/500", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                  <h2 className="text-3xl font-bold">The Godfather</h2>
                  <p className="mt-2 text-lg">
                    The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his
                    reluctant son.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={1200}
                  height={500}
                  alt="Movie Poster"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "1200/500", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                  <h2 className="text-3xl font-bold">The Dark Knight</h2>
                  <p className="mt-2 text-lg">
                    When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must
                    accept one of the greatest psychological and physical tests of his ability to fight injustice.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-colors hover:bg-white">
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-colors hover:bg-white">
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}