import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
  //revalidate because its static and no loose focus of windows just trying it
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
