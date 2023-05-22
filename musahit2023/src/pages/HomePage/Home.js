import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import Header from '../../components/Header';
import colors from '../../styles/colors';

import style from './Home.style';
import BoxResult from '../../components/BoxResult';
import testData from './testData';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterBoxModal from '../../components/Modals/FilterBoxModal';

const Home = () => {
  const [filterModalToggle, setFilterModalToggle] = useState(true);

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
          style={{color: 'white', fontSize: 20, textAlign: 'center', flex: 0.8}}
          placeholder="sandık numarası giriniz..."
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={{flex: 0.4, verticalAlign: 'middle'}}
          onPress={() => setFilterModalToggle(true)}>
          <Icon name="filter" size={30} color={'white'} />
        </TouchableOpacity>
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

      <FilterBoxModal
        visible={filterModalToggle}
        onClose={() => {
          setFilterModalToggle(false);
        }}
      />
    </View>
  );
};

export default Home;
