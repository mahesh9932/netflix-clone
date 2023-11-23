import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/currentUser",
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
