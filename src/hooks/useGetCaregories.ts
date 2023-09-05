import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function fetchCategories() {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return data;
}

export function useGetCategories() {
  const data = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  return data;
}
