import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

import style from './CreatePost.style';

const CreatePost = () => {
  return (
    <View style={style.contain}>
      <Header />
      <Text>CreatePost</Text>
    </View>
  );
};

export default CreatePost;
