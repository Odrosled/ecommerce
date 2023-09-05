import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../utils/types";

interface Params {
  limit?: number;
  category: string;
}

export async function fetchCategoryProducts({ limit, category }: Params) {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${category}?limit=${
      limit ?? 25
    }`
  );
  return data;
}

export function useGetCategoryProducts({ limit, category }: Params) {
  const data = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetchCategoryProducts({ limit, category }),
  });
  return data;
}
