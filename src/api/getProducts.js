async function getProducts(dispatch, reducerActions) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // only retrieve clothing items
    const products = data.filter((product) =>
      product.category.includes("clothing")
    );
    products.forEach((product) => {
      dispatch(reducerActions.add(product));
    });
  } catch (error) {
    console.error(error);
  }
}

export default getProducts;
