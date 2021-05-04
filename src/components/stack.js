import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/login/LoginScreen';
import ProductScreen from '../components/product/ProductScreen';
import ProductDetailScreen from '../components/product-detail/ProductDetailScreen';
import newProduct from '../components/new-product/newProductScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Products"
        component={ProductScreen}
        options={{title: 'Produc List'}}
      />
      <Stack.Screen
        name="Product_Detail"
        component={ProductDetailScreen}
        options={{title: 'Product Detail'}}
      />
      <Stack.Screen
        name="NewProduct"
        component={newProduct}
        options={{title: 'New Product'}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => (
  <Stack.Navigator initialRouteName={'Login'}>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{title: 'Login'}}
    />
  </Stack.Navigator>
);

export {AuthStack, StackNavigator};
