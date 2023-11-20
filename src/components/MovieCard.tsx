// type MovieCardProps = {
//   movie: Record<string, any>;
// };

import { IoPlay } from "react-icons/io5";

const MovieCard = ({ movie }: any) => {
  console.log("movie", movie);
  return (
    <div className="group relative">
      <div className="h-[14vw]">
        <img
          src={movie.thumbnailUrl}
          className="w-full rounded-md object-cover h-[14vw] transition duration  sm:group-hover:opacity-0 cursor-pointer delay-200"
        />
      </div>

      <div className="absolute top-0 left-0 scale-0 invisible sm:group-hover:visible group-hover:translate-x-2 group-hover:-translate-y-10 transition delay-300 group-hover:scale-110  z-10">
        <img
          src={movie.thumbnailUrl}
          className="w-full h-[14vw] object-cover rounded-t-md shadow-xl"
        />
        <div className="py-2 px-4 md:px-6 bg-zinc-800 rounded-b-md space-y-2">
          <div className="flex gap-3 flex-row my-4 items-center">
            <div className="w-7 h-7 rounded-full bg-white hover:bg-neutral-300 cursor-pointer transition duration-100 flex justify-center items-center">
              <IoPlay size={20} />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">{movie.title}</p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {movie.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
