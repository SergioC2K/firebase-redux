import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem, Avatar} from 'react-native-elements';
import {Get_Products} from '../../redux/actions/product_actions';

const ProductScreen = props => {
  const [productList, SetProductList] = useState([]);
  const state = useSelector(store => store.product_reducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(Get_Products());
    SetProductList(state.product);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <Button
        title={'New Product'}
        onPress={() => props.navigation.navigate('NewProduct')}
      />
      {productList.map(item => (
        <ListItem
          key={item.id}
          bottomDivider
          onPress={() => {
            props.navigation.navigate('Product_Detail', {
              product_id: item.id,
            });
          }}>
          <ListItem.Chevron />
          <Avatar
            source={{
              uri: 'https://via.placeholder.com/150/f66b97',
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default ProductScreen;
