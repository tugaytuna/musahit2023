import {View, Text, StatusBar, TextInput, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import colors from '../../styles/colors';

import style from './Home.style';
import BoxResult from '../../components/BoxResult';
import testData from './testData';

const Home = () => {
  const renderData = item => {
    return (
      <BoxResult
        name={item.item.name}
        voteCount={item.item.voteCount}
        photoURL={item.item.photoURL}
        styleCandi={item.item.styleCandi}
        votePerc={item.item.votePerc}
        boxNumber={item.item.boxNumber}
      />
    );
  };

  return (
    <View style={style.contain}>
      <Header />
      <View style={style.filter}>
        <TextInput
          style={{color: 'white', fontSize: 24, textAlign: 'center', flex: 0.8}}
          placeholder="Sandık No"
          placeholderTextColor={'white'}
        />
        <Text style={{flex: 0.2}}>Filter</Text>
      </View>

      <FlatList data={testData} renderItem={item => renderData(item)} />

      {/* <Text>@Tugay Tuna - 2023</Text> */}

      {/* <BoxResult
        name={'Kemal Kılıçdaroğlu'}
        voteCount={321}
        photoURL={require(`./../../assets/kk.png`)}
        styleCandi={'kk'}
        votePerc={0.5248}
      />
      <BoxResult
        name={'Recep Tayyip Erdoğan'}
        voteCount={288}
        photoURL={require(`./../../assets/rte.png`)}
        styleCandi={'rte'}
        votePerc={0.5115}
      /> */}
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.backgroundColor}></StatusBar>
    </View>
  );
};

export default Home;
