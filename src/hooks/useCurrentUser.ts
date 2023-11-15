import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading } = useSWR("/api/currentUser", fetcher);

  return { data, error, isLoading };
};

export default useCurrentUser;
