import useMoviesList from "@/hooks/useMoviesList";
import { isEmpty, isError } from "lodash";
import MovieCard from "./MovieCard";
type MoviesListProps = {
  title: string;
};

const MoviesList: React.FC<MoviesListProps> = ({ title }) => {
  const { data: movies = [] } = useMoviesList();

  if (isEmpty(movies)) {
    return <></>;
  }
  return (
    <div className="mt-4 md:mt-8 mb-4 px-4 md:px-6">
      <p className="text-white text-md md:text-xl lg:text-2xl ">{title}</p>
      <div className="mt-4 grid grid-cols-4 gap-2 lg:mt-8">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MoviesList;
