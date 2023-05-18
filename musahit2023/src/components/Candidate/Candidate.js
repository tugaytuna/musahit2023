import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import style from './Candidate.style';

const Candidate = ({
  name,
  photoURL,
  styleCandi,
  voteCount,
  increase,
  decrease,
  votePerc,
}) => {
  return (
    <View style={style[styleCandi].contain}>
      <Text style={style[styleCandi].title}>{name}</Text>
      <View style={style[styleCandi].subContain}>
        {photoURL && (
          <Image style={style[styleCandi].image} source={photoURL} />
        )}
        <View style={style[styleCandi].count}>
          <View style={style[styleCandi].counter}>
            <TouchableOpacity onPress={decrease}>
              <Text style={style[styleCandi].numberComp}>-</Text>
            </TouchableOpacity>
            <Text style={style[styleCandi].numberComp}>{voteCount}</Text>
            <TouchableOpacity onPress={increase}>
              <Text style={style[styleCandi].numberComp}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={style[styleCandi].percent}>{`% ${(votePerc * 100)
            .toString()
            .slice(0, 5)}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Candidate;
