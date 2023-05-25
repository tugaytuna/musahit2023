import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import style from './BoxResult.style';

const BoxResult = ({
  selectedCity,
  selectedDistrict,
  name,
  photoURL,
  styleCandi,
  voteCount,
  votePerc,
  boxNumber,
}) => {
  return (
    <View style={style[styleCandi].contain}>
      <Text
        style={
          style[styleCandi].sub_title
        }>{`${selectedCity} -- ${selectedDistrict}`}</Text>

      <Text style={style[styleCandi].title}>{`Sandık No: ${boxNumber}`}</Text>
      <View style={style[styleCandi].subContain}>
        {photoURL && (
          <View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom: 5,
              }}>
              <Image style={style[styleCandi].image} source={photoURL} />
            </View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              {name}
            </Text>
          </View>
        )}
        <View style={style[styleCandi].count}>
          <View style={style[styleCandi].counter}>
            <Text style={style[styleCandi].numberComp}>{`% ${(votePerc * 100)
              .toString()
              .slice(0, 5)}`}</Text>
          </View>
          <Text
            style={
              style[styleCandi].percent
            }>{`Toplam Seçmen:  ${voteCount}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default BoxResult;
