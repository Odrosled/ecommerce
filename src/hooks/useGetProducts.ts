import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../utils/types";

interface Params {
  limit?: number
}

export async function fetchProducts({limit} : Params) {
  const { data } = await axios.get(`https://fakestoreapi.com/products?limit=${limit ?? 25}`);
  return data 
}

export function useGetProducts({limit} : Params) {
  const data = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetchProducts({limit}),
  });
  return data
}

