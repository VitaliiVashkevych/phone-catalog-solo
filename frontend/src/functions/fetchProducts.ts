import { Product } from "../types/Product";
type Options = {
  limit: number;
  offset: number;
}
export const fetchProducts = async (product: string, options: Options): Promise<{products: Product[], productsQuantity: number}> => {
  const URL = `http://localhost:3000/${product}?limit=${options.limit}&offset=${options.offset}`;
  
  const response = await fetch(URL);

  const data = await response.json();
  return data;
};
