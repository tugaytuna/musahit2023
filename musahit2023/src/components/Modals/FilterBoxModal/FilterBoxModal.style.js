import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  contain: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
  },
  modal: {justifyContent: 'space-around'},
  textInput: {textAlign: 'center', color: 'white', fontSize: 20},
});
