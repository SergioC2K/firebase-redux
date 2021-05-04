import {
  IS_AUTENTICATED,
  USER_ERROR,
  CREATE_USER,
  IS_LOADING,
} from '../types/auth_types';

const initial_State = {
  isAutenticated: false,
  isLoading: true,
  user: {},
  error: '',
};

export const authReducer = (state = initial_State, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case IS_AUTENTICATED:
      return {
        ...state,
        isAutenticated: action.isAutenticated,
        user: action.user,
        isLoading: action.isLoading,
      };
    case CREATE_USER:
      return {
        ...state,
        isAutenticated: action.isAutenticated,
        user: action.user,
        isLoading: action.isLoading,
      };
    case USER_ERROR:
      return {
        ...state,
        isAutenticated: false,
        user: {},
        error: action.error,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
