async function getProducts(dispatch, reducerActions) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach((product) => {
      dispatch(reducerActions.add(product));
    });
  } catch (error) {
    console.error(error);
  }
}

export default getProducts;
