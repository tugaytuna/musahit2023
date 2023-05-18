import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import style from './SendButton.style';

const SendButton = () => {
  return (
    <TouchableOpacity style={style.contain}>
      <Text style={style.title}>KAYDET</Text>
    </TouchableOpacity>
  );
};

export default SendButton;
