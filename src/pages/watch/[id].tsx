import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useMovie(id as string);
  return (
    <div className="h-screen w-screen bg-black ">
      <nav className="flex flex-row items-center gap-6 z-10 fixed pl-4 mt-2">
        <FaArrowLeft
          onClick={() => router.push("/")}
          size={25}
          className="text-white cursor-pointer"
        />
        <p className="text-white text-xl md:text-2xl font-bold">
          <span className="font-light text-md">watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="w-screen h-screen"
      />
    </div>
  );
};
export default Watch;
