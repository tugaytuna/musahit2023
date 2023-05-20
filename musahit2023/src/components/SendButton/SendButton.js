import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import style from './SendButton.style';

const SendButton = ({click, title="default"}) => {
  return (
    <TouchableOpacity style={style.contain} onPress={click}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SendButton;
