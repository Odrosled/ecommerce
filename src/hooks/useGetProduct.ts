import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../utils/types";

export async function fetchProduct(id: string) {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
}

export function useGetProduct(id: string) {
  const data = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
  return data;
}
