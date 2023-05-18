import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  contain: {flex: 1, backgroundColor: colors.backgroundColor},
  infoContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  infoText: {
    color: 'white',
    fontSize: 24,
  },
});
