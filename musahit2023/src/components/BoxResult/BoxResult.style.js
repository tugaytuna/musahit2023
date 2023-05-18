import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

const baseStyle = StyleSheet.create({
  contain: {
    borderRadius: 4,
    marginTop: 20,
    width: deviceSize.width,
    // height: 380,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    height: 82,
    width: 82,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  subContain: {
    margin: 10,
    flexDirection: 'row',
  },
  count: {flex: 1, marginTop: 8},
  counter: {flexDirection: 'row', justifyContent: 'space-around'},
  numberComp: {fontSize: 36, color: 'white'},
  percent: {textAlign: 'center', color: 'white'},
});

export default StyleSheet.create({
  rte: {
    ...baseStyle,
    contain: {...baseStyle.contain, backgroundColor: colors.rteColor},
  },
  kk: {
    ...baseStyle,
    contain: {...baseStyle.contain, backgroundColor: colors.kkColor},
  },
  gecersiz: {
    ...baseStyle,
    contain: {...baseStyle.contain, backgroundColor: 'black'},
  },
});
