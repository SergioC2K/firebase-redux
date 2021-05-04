import React, {useEffect, useState} from 'react';
import {AuthStack, StackNavigator} from './components/stack';
import {useDispatch, useSelector} from 'react-redux';
import {autenticationState} from './redux/actions/auth_actions';
import auth from '@react-native-firebase/auth';

const index = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return !user ? <AuthStack /> : <StackNavigator />;
};

export default index;
