import { useContext } from "react";
import { storeContext } from "../context/Store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Hooks
export const useAuthorizedQuery = (endPoint, queryKey) => {

  const { base_url, token } = useContext(storeContext);

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axios.get(base_url + endPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    staleTime: 1000 * 60 * 60 , // 1 hour
    // refetchInterval: 1000 * 5
  });

  const deDuplicates = (array) => {
    const dataMap = new Map();

   array?.forEach((item) => {
      dataMap.set(item.documentId, item);
    });

    return [...dataMap.values()]
  };

  return {
    query,
    deDuplicates
  };
};
