import fetcher from "@/libs/fetcher";
import useSWR from "swr";
const useMoviesList = () => {
  const { data, isLoading, error } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: false,
  });

  return { data, isLoading, error };
};
export default useMoviesList;
