import useSWR from "swr";
import fetcher from "@/libs/fetcher";
const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
    }
  );
  return { data, error, isLoading, mutate };
};
export default useFavourites;
