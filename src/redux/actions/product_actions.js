import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCTS,
  GET_PRODUCTS,
  PRODUCT_ERROR,
} from '../types/productTypes';
import firestore from '@react-native-firebase/firestore';
const Db = firestore().collection('products');

const list_product = product => ({
  type: GET_PRODUCTS,
  product,
});

const new_product = product => ({
  type: ADD_PRODUCT,
  product,
});

const product_error = error => ({
  type: PRODUCT_ERROR,
  product,
});
export const Get_Products = () => dispatch => {
  let product = [];
  try {
    Db.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const {name, price} = doc.data();
        product.push({
          id: doc.id,
          name: name,
          price: price,
        });
      });
      dispatch(list_product(product));
    });
  } catch (error) {
    dispatch(product_error(error));
  }
};

export const Add_Product = product => async dispatch => {
  const {name, price} = product;
  try {
    Db.add({name, price});
    console.log('addedd');
    dispatch(new_product(product));
  } catch (error) {
    dispatch(product_error(error));
  }
};
