import {React, useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Candidate from '../../components/Candidate';
import SendButton from '../../components/SendButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SelectList} from 'react-native-dropdown-select-list';
import citiesList from './../../assets/dataCitiesList';

import style from './CreatePost.style';

const CreatePost = () => {
  const [rteVote, setRteVote] = useState(144);
  const [kkVote, setKkVote] = useState(144);
  const [errVote, setErrVote] = useState(2);

  const [rteVotePerc, setRteVotePerc] = useState(144);
  const [kkVotePerc, setKkVotePerc] = useState(144);
  const [errVotePerc, setErrVotePerc] = useState(2);
  const [totalVote, setTotalVote] = useState(0);

  const cities = citiesList.map(item => {
    return item.name;
  });
  console.log('cities', cities);

  const dataCities = [
    {key: '1', value: 'Mobiles', disabled: false},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  const formData = {
    rteVote,
    kkVote,
    errVote,
    totalVote,
  };

  useEffect(() => {
    setTotalVote(rteVote + kkVote + errVote);
    setRteVotePerc(rteVote / (rteVote + kkVote));
    setKkVotePerc(kkVote / (rteVote + kkVote));
    setErrVotePerc(errVote / totalVote);
  }, [rteVote, kkVote, errVote]);

  return (
    <ScrollView style={style.contain}>
      <Header />
      <Text
        style={[
          style.infoText,
          {textAlign: 'center', fontSize: 20, marginTop: 10},
        ]}>
        İstanbul
      </Text>
      <SelectList
        setSelected={val => console.log(val)}
        data={cities}
        save="value"
      />
      <Text
        style={[
          style.infoText,
          {textAlign: 'center', fontSize: 20, marginTop: 10},
        ]}>
        Kadıköy
      </Text>
      <View style={style.infoContain}>
        <Text style={style.infoText}>Sandık No: </Text>
        <Text style={style.infoText}>1259</Text>
        <View style={{alignItems: 'flex-end'}}>
          <Icon name="edit" size={20} color="#ffffff" />
        </View>
      </View>
      <Candidate
        name={'Recep Tayyip Erdoğan'}
        voteCount={rteVote}
        photoURL={require(`./../../assets/rte.png`)}
        styleCandi={'rte'}
        increase={() => {
          setRteVote(rteVote + 1);
        }}
        decrease={() => {
          setRteVote(rteVote - 1);
        }}
        votePerc={rteVotePerc}
      />
      <Candidate
        name={'Kemal Kılıçdaroğlu'}
        voteCount={kkVote}
        photoURL={require(`./../../assets/kk.png`)}
        styleCandi={'kk'}
        increase={() => {
          setKkVote(kkVote + 1);
        }}
        decrease={() => {
          setKkVote(kkVote - 1);
        }}
        votePerc={kkVotePerc}
      />
      <Candidate
        name={'Geçersiz Oy'}
        voteCount={errVote}
        photoURL={null}
        styleCandi={'gecersiz'}
        increase={() => {
          setErrVote(errVote + 1);
        }}
        decrease={() => {
          setErrVote(errVote - 1);
        }}
        votePerc={errVotePerc}
      />
      <View style={style.infoContain}>
        <Text style={[style.infoText, {fontSize: 18}]}>Toplam Seçmen: </Text>
        <Text style={[style.infoText, {fontSize: 18}]}>{totalVote}</Text>
      </View>
      <SendButton
        click={() => {
          console.log(formData);
        }}
      />
    </ScrollView>
  );
};

export default CreatePost;
