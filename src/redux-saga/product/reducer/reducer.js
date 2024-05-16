import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SUCCESS, } from "../action/action";

let initialState = {
  product: [],
  isLoading: false,
  isError: null,
};

let userReducer = (state = initialState, action) => {
  console.log(action, "action from reducer");
  switch (action.type) {

    //get product

    case GET_PRODUCT_PENDING: {
      return {
        isLoading: true,
        ...state,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        isLoading: false,
        product: action.data,
      };
    }

    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }

    //post product

    case POST_PRODUCT_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case POST_PRODUCT_SUCCESS: {
      return {
        isLoading: false,
        product: state.product.concat(action.data),
      };
    }
    case POST_PRODUCT_ERROR: {
      return {
        isError: action.data,
        ...state,
      };
    }

    //delete product

    case DELETE_PRODUCT_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DELETE_PRODUCT_SUCCESS: {
      return {
        isLoading: false,
        product: state.product.filter((val) => val.id !== action.data.id),
      };
    }

    case DELETE_PRODUCT_ERROR: {
      return {
        isLoading: false,
        isError: action.data,
      };
    }

    //update product

    case UPDATE_PRODUCT_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UPDATE_PRODUCT_SUCCESS: {
      return {
        isLoading: false,
        product: state.product.map((val) => {
          if (val.id == action.data.id) {
            return {
              ...val,
              ...action.data,
            };
          } else {
            return {
              ...val,
            };
          }
        }),
      };
    }

    case UPDATE_PRODUCT_ERROR: {
      return {
        isLoading: false,
        isError: action.data,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;