const memoItems = [];

export const priceXqty = (price, qty) => {
  const stringifiedArgs = price + "" + qty;

  if (memoItems[stringifiedArgs] === !undefined) {
    return memoItems[stringifiedArgs];
  }

  memoItems[stringifiedArgs] = price * qty;
  return memoItems[stringifiedArgs];
};
