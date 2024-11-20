
const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featuredData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    default:
      state;
  }
};

export default productReducer;
