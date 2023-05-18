import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import style from './Candidate.style';

const Candidate = ({name, photoURL, styleCandi}) => {
  return (
    <View style={style[styleCandi].contain}>
      <Text style={style[styleCandi].title}>{name}</Text>
      <View style={style[styleCandi].subContain}>
        {photoURL && (
          <Image style={style[styleCandi].image} source={photoURL} />
        )}
        <View style={style[styleCandi].count}>
          <View style={style[styleCandi].counter}>
            <TouchableOpacity>
              <Text style={style[styleCandi].numberComp}>-</Text>
            </TouchableOpacity>
            <Text style={style[styleCandi].numberComp}>144</Text>
            <TouchableOpacity>
              <Text style={style[styleCandi].numberComp}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={style[styleCandi].percent}>%50</Text>
        </View>
      </View>
    </View>
  );
};

export default Candidate;
