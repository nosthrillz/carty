const memoizedIndex = [];

export const getIndex = (state, action) => {
  const id = action.payload.id;

  if (memoizedIndex[id] === !undefined) {
    return memoizedIndex[id];
  }

  const index = state.items.findIndex((item) => item.id === id);
  memoizedIndex[id] = index;

  return index;
};
