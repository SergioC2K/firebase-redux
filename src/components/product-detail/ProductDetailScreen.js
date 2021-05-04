import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Button,
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
 
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {TextInput} from 'react-native-gesture-handler';

const ProductDetailScreen = props => {
  const Db = firestore().collection('products');

  const initialState = {
    id: '',
    name: '',
    price: '',
  };

  const [product, setProduct] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (name, value) => {
    setProduct({...product, [name]: value});
  };

  const getProductByID = async id => {
    const productById = Db.doc(id);
    const doc = await productById.get();
    const doc_res = doc.data();

    setProduct({
      ...doc_res,
      id: doc.id,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getProductByID(props.route.params.product_id);
  }, []);

  const EditProduct = async () => {
    const productById = Db.doc(product.id);
    await productById.set({
      name: product.name,
      price: product.price,
    });
    setProduct(initialState);
    props.navigation.navigate('Products');
  };

  const DeleteProduct = async () => {
    const productById = Db.doc(props.route.params.product_id);
    const doc = await productById.delete();
    setIsLoading(false);
    props.navigation.navigate('Products');
  };

  const Show_Confirm = () => {
    Alert.alert(
      'Removing the User',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => DeleteProduct()},
        {text: 'No', onPress: () => console.log('canceled')},
      ],
      {
        cancelable: true,
      },
    );
  };

  if (isLoading) {
    return (
      <View style={{margin: 0}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.input_group}>
        <TextInput
          placeholder={'Name'}
          onChangeText={value => handleChange('name', value)}
          value={product.name}
        />
      </View>
      <View style={styles.input_group}>
        <TextInput
          placeholder={'Price'}
          onChangeText={value => handleChange('price', value)}
          value={product.price}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title={'Save'} onPress={() => EditProduct()} />
        <Button
          title={'Delete'}
          color={'#E37399'}
          onPress={() => Show_Confirm()}
        />
        {/*isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null*/}
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

export default ProductDetailScreen;
