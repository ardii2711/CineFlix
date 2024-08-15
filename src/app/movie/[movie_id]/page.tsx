import Image from "next/image";

import { getDetailMovies, getMovieImages } from "@/utils/apis/movies";
import { BASE_URL_IMAGE } from "@/utils/constants";

async function DetailMovie({ params }: { params: { movie_id: string } }) {
  const dataMovie = await getDetailMovies(+params.movie_id)
  const dataImages = await getMovieImages(+params.movie_id)

  return (
    <div>
      <h1>{dataMovie.title}</h1>
      <p>{dataMovie.overview}</p>
      <h4>{dataMovie.genres.map((genre) => genre.name).join(", ")}</h4>
      <p>{dataMovie.production_countries.map((country) => country.name).join(", ")}</p>
      <Image src={`${BASE_URL_IMAGE}/original${dataImages.backdrops[0].file_path}`} alt={dataMovie.title} width={dataImages.backdrops[0].width} height={dataImages.backdrops[0].height} />
    </div>
  );
}

export default DetailMovie;
