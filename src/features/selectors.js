export const cartSelector = (state) => {
  const cart = state.cart.items;

  const items = cart.map((item) => {
    return { ...item, qtyPrice: item.qty * item.price };
  });

  const count = cart.reduce((prev, curr) => prev + curr.qty, 0);
  const total = cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);

  return { items, count, total };
};

export const productSelector = (state) => {
  return { items: state.products.items };
};
