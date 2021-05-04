import React, {useState} from 'react';
import {View, TextInput, ImageBackground} from 'react-native';
import {Button, LinearProgress} from 'react-native-elements';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {onLogin} from '../../redux/actions/auth_actions';
import Input_alert from '../alert/input_alert';

const LoginScreen = () => {
  const state = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const [NameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState(state);

  const handleChange = (name, value) => {
    setUser({...user, [name]: value});
  };

  const Auth_Login = async () => {
    /*if (state.email === '' && state.password === '') {
      console.log(state.email);
      console.log(state.password);
      console.log('err 1');
      return setNameError(true) & setPasswordError(true);
    } else if (state.password === '') {
      console.log('err 2');
      return setPasswordError(true);
    } else if (state.email === '') {
      console.log('err 3');
      return setNameError(true);
    } else {
      dispatch(onLogin(user));
    }*/
  };

  return (
    <ImageBackground
      source={require('../../assets/img/Fresh_Turboscent.jpg')}
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.input_group}>
            <TextInput
              placeholder={'Email'}
              onChangeText={value => handleChange('email', value)}
              onKeyPress={() => setNameError(false)}
            />
          </View>
          {NameError ? (
            <Input_alert
              message={'El nombre es obligatorio.'}
              type={'tipo'}
              icon={'icono cabroonnn'}
            />
          ) : null}
          <View style={styles.input_group}>
            <TextInput
              placeholder={'Password'}
              onChangeText={value => handleChange('password', value)}
              onKeyPress={() => setPasswordError(false)}
            />
          </View>
          {passwordError ? (
            <Input_alert
              message={'La contraseña es obligatoria.'}
              type={'tipo'}
              icon={'icono cabroonnn'}
            />
          ) : null}

          <View style={styles.input_group}>
            <Button title="Enter" type="outline" onPress={() => Auth_Login()} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
