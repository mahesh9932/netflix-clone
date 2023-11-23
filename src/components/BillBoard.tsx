import useBillBoard from "@/hooks/useBillBoard";
import { IoIosInformationCircleOutline } from "react-icons/io";
import PlayButton from "./PlayButton";

const BillBoard = () => {
  const { data } = useBillBoard();

  console.log("data", data);

  return (
    <div className="h-[56.25vw] relative">
      <video
        className="h-[56.25vw] object-cover brightness-75"
        autoPlay
        poster={data?.thumbnailUrl}
        loop
        muted
        src={data?.videoUrl}
      />
      <div className="absolute top-[35%] md:top-[40%] left-[2%] md:left-[5%] w-full">
        <p className="text-white text-md md:text-2xl lg:text-4xl font-bold max-w-[50%]">
          {data?.title}
        </p>
        <p className="text-white text-[10px] md:text-[14px] lg:text-[16px] font-medium mt-1 md:mt-4 max-w-[70%] lg:max-w-[60%] leading-[1.5] md:leading-normal">
          {data?.description}
        </p>
        <div className="flex flex-row gap-2 mt-2">
          <PlayButton movieId={data?.id} />
          <button className=" flex flex-row gap-1 items-center bg-white bg-opacity-50 px-4 md:px-6 py-1 rounded-md  text-white hover:bg-opacity-30 text-sm md:text-md">
            <IoIosInformationCircleOutline size={20} />
            More
          </button>
        </div>
      </div>
    </div>
  );
};
export default BillBoard;
