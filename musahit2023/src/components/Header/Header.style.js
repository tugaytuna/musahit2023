import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  contain: {},
  imageView: {
    flexDirection: 'row',
    marginTop: 20,
    height: 82,
    width: deviceSize.width,
    justifyContent: 'center',
  },
  image: {height: 82, width: 82},
  title: {marginTop: 10, fontSize: 36, textAlign: 'center', color: 'white'},
  sub_title: {fontSize: 20, textAlign: 'center', color: 'white'},
});
