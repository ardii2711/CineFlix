import { getDetailMovies } from "@/utils/apis/movies";

async function DetailMovie({ params }: { params: { movie_id: string } }) {
  const dataMovie = await getDetailMovies(+params.movie_id)

  return (
    <div>
      <div>DetailMovie {dataMovie.title}</div>
    </div>
  );
}

export default DetailMovie;
