import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCTS,
  GET_PRODUCTS,
  PRODUCT_ERROR,
} from '../types/productTypes';

const initialState = {
  product: [],
  loading: false,
  error: '',
};

export const product_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        product: action.product,
        loading: true,
      };
    case ADD_PRODUCT:
      console.log(action);
      return {
        ...state,
        product: action.product,
        loading: true,
      };
    case DELETE_PRODUCT:
      return {...state, ...payload};
    case UPDATE_PRODUCTS:
      return {...state, ...payload};
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
