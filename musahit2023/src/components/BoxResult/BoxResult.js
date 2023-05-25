import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

import style from './BoxResult.style';

const BoxResult = ({
  selectedCity,
  selectedDistrict,
  name,
  voteCount,
  boxNumber,
  kkVotePerc,
  rteVotePerc,
}) => {
  const [styleCandi, setStyleCandi] = useState('kk');
  const [photoURL, setPhotoURL] = useState(require(`./../../assets/kk.png`));
  const [votePerc, setVotePerc] = useState(0.2857142857142857);
  useEffect(() => {
    if (name == 'Kemal Kılıçdaroğlu') {
      setVotePerc(kkVotePerc);
      setStyleCandi('kk');
      setPhotoURL(require(`./../../assets/kk.png`));
    } else {
      setVotePerc(rteVotePerc);
      setStyleCandi('rte');
      setPhotoURL(require(`./../../assets/rte.png`));
    }
  }, []);

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
