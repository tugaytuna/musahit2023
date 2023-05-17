import {View, Text} from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import style from './About.style';

const About = () => {
  return (
    <View style={style.contain}>
      <Header />
      <Text>About</Text>
    </View>
  );
};

export default About;
