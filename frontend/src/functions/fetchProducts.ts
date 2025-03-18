import { Product } from "../types/Product";

export const fetchProducts = async (product: string): Promise<{products: Product[], productsQuantity: number}> => {
  const URL = `http://localhost:3000/${product}`;
  console.log(URL);
  
  const response = await fetch(URL);

  const data = await response.json();
  return data;
};
