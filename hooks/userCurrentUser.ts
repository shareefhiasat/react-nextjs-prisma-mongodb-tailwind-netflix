import useSWR from "swr";
import fetcher from "@/lib/fetcher";

/**
 * ? great tip cound here about SWR https://youtu.be/mqUN4N2q4qY?list=PLMwCFr4NqgMqeQs4i-bc5dxd2GJYLJZwx&t=6174
 */
const UserCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default UserCurrentUser;
