const getProducts = async (product: string) => {
  const URL = `http://localhost:3000/api/${product}.json`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
