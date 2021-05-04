import React from 'react';
import {Text, StyleSheet, View, Modal} from 'react-native';
import {Icon} from 'react-native-elements';

let palabrita = '!';
const Input_alert = ({message, icon, visible}) => {
  const {
    body_message,
    icon_message,
    text_message_container,
    text_icon_message,
    text_message,
  } = styles;

  icon = palabrita;
  return (
    <View style={body_message} visible={visible}>
      <View style={icon_message}>
        <Text style={text_icon_message}> {icon} </Text>
      </View>
      <View style={text_message_container}>
        <Text style={text_message}> {message} </Text>
      </View>
    </View>
  );
};

const black = '#704545';
const border_red_color = '#DF340F';
const white = '#fff';

const styles = StyleSheet.create({
  body_message: {
    margin:8,
    padding:'100%',
    backgroundColor: '#F7EAE4',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: border_red_color,
    flexDirection: 'row',
    padding: 15,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    opacity: 0.8,
  },
  icon_message: {
    right:2,
    alignContent:'center',
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: white,
    backgroundColor: '#D52912',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  text_icon_message: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white,
  },
  text_message_container: {
    textAlign: 'center',
    left: 5,
    fontWeight: 'bold',
  },
  text_message: {
    color: black,
    fontWeight: 'bold',
    textShadowColor: white,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
export default Input_alert;
