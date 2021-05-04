import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Add_Product} from '../../redux/actions/product_actions';
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const NewProduct = props => {
  const state = useSelector(store => store.product_reducer);
  const dispatch = useDispatch();

  const [product, SetProduct] = useState({
    name: '',
    price: '',
  });

  const [isLoading, setIsloading] = useState(false);

  const HandleChange = (name, value) => {
    SetProduct({...product, [name]: value});
  };

  const AddNewProduct = async () => {
    let newProduct = {
      name: product.name,
      price: product.price,
    };

    dispatch(Add_Product(newProduct));
    /*props.navigation.navigate('Products');*/
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.input_group}>
        <TextInput
          placeholder={'Name'}
          onChangeText={value => HandleChange('name', value)}
          value={product.name}
        />
      </View>
      <View style={styles.input_group}>
        <TextInput
          placeholder={'Price'}
          onChangeText={value => HandleChange('price', value)}
          value={product.price}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title={'Save'} onPress={() => AddNewProduct()} />
        {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  input_group: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    color: 'black',
  },
});
export default NewProduct;
