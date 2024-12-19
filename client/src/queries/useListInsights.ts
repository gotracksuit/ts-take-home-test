import { useQuery } from "@tanstack/react-query";

export const useListInsights = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["insights"],
    queryFn: () => fetch(`/api/insights`).then((res) => res.json()),
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    isPending,
    data,
  };
};
