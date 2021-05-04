import {StyleSheet} from 'react-native';

const white = val => `rgba(255, 255, 255, 0.${val})`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 50,
    padding: 27,
    width: '70%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: white(5),
    borderColor: white(3),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
    opacity: 0.9,
  },
  input_group: {
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    color: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
