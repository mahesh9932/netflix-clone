import { useRouter } from "next/router";
import { FaPlay } from "react-icons/fa";

type PlayButtonProps = {
  movieId: string;
};

const PlayButton = ({ movieId }: PlayButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white text-black font-semibold px-4 md:px-6 py-1 md:py-2 rounded-md  flex flex-row  justify-center items-center cursor-pointer gap-2 text-sm lg:text-lg"
    >
      <FaPlay />
      play
    </button>
  );
};
export default PlayButton;
