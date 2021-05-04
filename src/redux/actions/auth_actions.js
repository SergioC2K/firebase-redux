import {IS_AUTENTICATED, CREATE_USER, USER_ERROR} from '../types/auth_types';
import auth from '@react-native-firebase/auth';

export const IS_LOADING = isLoading => ({
  type: type,
  isLoading,
});

export const user_data = (user, isAutenticated) => ({
  type: IS_AUTENTICATED,
  user,
  isAutenticated,
});

export const create_user = user => ({
  type: CREATE_USER,
  user,
  isAutenticated,
});
export const user_error = error => ({
  type: USER_ERROR,
  error,
});

export const onLogin = user => async dispatch => {
  const {email, password} = user;
  try {
    let res = await auth().signInWithEmailAndPassword(email, password);
    if (res) {
      dispatch(user_data(res.user, true));
    }
  } catch (e) {
    dispatch(user_error(e.message));
  }
};

export const CreateUser = user => async dispatch => {
  const {email, password} = user;
  try {
    let res = await auth().createUserWithEmailAndPassword(email, password);
    if (res) {
      dispatch(create_user(res.user, true));
    }
  } catch (e) {
    dispatch(user_error(e.message));
  }
};

export const autenticationState = user => dispatch => {
  let isLoading = true;
  dispatch(user_data(user, true));
  if (isLoading) {
    dispatch(IS_LOADING(false));
  }
};
