import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Candidate from '../../components/Candidate';

import style from './CreatePost.style';

const CreatePost = () => {
  return (
    <View style={style.contain}>
      <Header />
      <View style={style.infoContain}>
        <Text style={style.infoText}>Sandık No: </Text>
        <Text style={style.infoText}>1259</Text>
        <Text>Edit</Text>
      </View>
      <Candidate
        name={'Recep Tayyip Erdoğan'}
        photoURL={require(`./../../assets/rte.png`)}
        styleCandi={'rte'}
      />
      <Candidate
        name={'Kemal Kılıçdaroğlu'}
        photoURL={require(`./../../assets/kk.png`)}
        styleCandi={'kk'}
      />
      <Candidate name={'Geçersiz Oy'} photoURL={null} styleCandi={'gecersiz'} />
      <Text>CreatePost</Text>
    </View>
  );
};

export default CreatePost;
