import { Product } from "../types/Product";

export const getProducts = async (product: string): Promise<Product[]> => {
  const URL = `http://localhost:5173/public/api/${product}.json`;
  const response = await fetch(URL);

  const data = await response.json();
  return data;
};
