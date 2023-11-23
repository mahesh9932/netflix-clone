import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import axios from "axios";
import { without } from "lodash";
import { GoPlus } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";

interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton = ({ movieId }: FavouriteButtonProps) => {
  const { data: user, isLoading, error, mutate: mutateUser } = useCurrentUser();
  const { mutate: mutateFavourites } = useFavourites();

  if (isLoading || error) {
    return <></>;
  }

  let isFavourite = user.favouriteIds.includes(movieId);

  let Icon = isFavourite ? IoCheckmark : GoPlus;

  const toggleFavourite = async () => {
    if (isFavourite) {
      const res = await axios.delete("/api/favourite", {
        data: {
          movieId,
        },
      });
      const updatedUser = res.data;
      mutateUser({
        ...user,
        favouriteIds: updatedUser.favouriteIds,
      });
      mutateFavourites(updatedUser.favouriteIds);
    } else {
      const res = await axios.post("/api/favourite", {
        movieId,
      });
      const updatedUser = res.data;
      mutateUser();
      mutateFavourites();
    }
  };

  return (
    <div
      onClick={toggleFavourite}
      className="w-7 h-7 rounded-full border-white border-2 hover:border-neutral-300 cursor-pointer transition duration-100 flex justify-center items-center"
    >
      <Icon size={23} className="text-white" />
    </div>
  );
};
export default FavouriteButton;
