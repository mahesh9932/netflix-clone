import fetcher from "@/libs/fetcher";
import useSWR from "swr";
const useMovie = (id: string) => {
  const { data, isLoading, error } = useSWR(
    `${id ? "/api/movies/" + id : null}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, isLoading, error };
};
export default useMovie;
