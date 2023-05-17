import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import colors from '../../styles/colors';

import style from './Home.style';

const Home = () => {
  return (
    <View style={style.contain}>
      <Header />
      <Text>Home</Text>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.backgroundColor}></StatusBar>
    </View>
  );
};

export default Home;
