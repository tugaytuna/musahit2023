import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  contain: {
    margin: 10,
    padding: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  title: {
    flexDirection: 'row',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
});
