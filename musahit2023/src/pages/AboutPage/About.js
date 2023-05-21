import {View, Text, Linking} from 'react-native';
import React from 'react';
import SendButton from '../../components/SendButton';

import Header from '../../components/Header';
import style from './About.style';

const About = () => {
  return (
    <View style={style.contain}>
      <Header />
      <Text style={[style.title1, {marginTop: 20}]}>
        Bu uygulama 2023 Cumhurbaşkanlığı 2. Tur seçimleri için
        geliştirilmiştir.
      </Text>
      <Text style={style.title1}>
        Hiçbir siyasi parti ya da görüş ile bağlantısı yoktur.
      </Text>
      <Text style={style.title1}>
        Kar amacı olmadan tamamen açık kaynaklı olarak geliştirilmiştir.
      </Text>
      <Text style={style.title1}>Teşekkürler.</Text>
      <Text style={style.title2}>Tugay Tuna</Text>
      <Text style={style.title2}>2023</Text>
      <SendButton
        click={() => {
          Linking.openURL('https://github.com/tugaytuna/musahit2023');
        }}
        title={'github'}
      />
      <SendButton
        click={() => {
          Linking.openURL('https://twitter.com/Tuna_Tugay');
        }}
        title={'twitter'}
      />
    </View>
  );
};

export default About;
