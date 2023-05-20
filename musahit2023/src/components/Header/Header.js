import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';

import style from './Header.style';

const Header = () => {
  return (
    <View style={style.contain}>
      <View style={style.imageView}>
        <Image
          style={style.image}
          source={require('./../../assets/cb_logo.png')}
        />
      </View>
      <Text style={style.title}>Cumhurbaşkanlığı Seçimi</Text>
      <Text style={style.sub_title}>2023</Text>
      <Text style={style.version}>alpha-version: 0.102</Text>
    </View>
  );
};

export default Header;
