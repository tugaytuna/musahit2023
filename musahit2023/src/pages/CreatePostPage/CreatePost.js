import {React, useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Header from '../../components/Header';
import Candidate from '../../components/Candidate';
import SendButton from '../../components/SendButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SelectList} from 'react-native-dropdown-select-list';
import EditBoxNumberModal from '../../components/Modals/EditBoxNumberModal';

import citiesList from './../../assets/dataCitiesList';
import cities from './../../assets/cities.js';

import style from './CreatePost.style';

const CreatePost = () => {
  const [rteVote, setRteVote] = useState(0);
  const [kkVote, setKkVote] = useState(0);
  const [errVote, setErrVote] = useState(0);

  const [rteVotePerc, setRteVotePerc] = useState(144);
  const [kkVotePerc, setKkVotePerc] = useState(144);
  const [errVotePerc, setErrVotePerc] = useState(2);
  const [totalVote, setTotalVote] = useState(0);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [toggleEditBox, setToggleEditBox] = useState(false);
  const [boxNumber, setboxNumber] = useState('1248');

  const districts = [];

  useEffect(() => {
    district();
    // setSelectedDistrict(null);
    // console.log(districts);
  }, [selectedCity]);

  const district = () => {
    try {
      districts.splice(0, districts.length); // clean
      citiesList.map(item => {
        if (item.name == selectedCity) {
          item.towns.map(item => {
            // console.log(item.name);
            districts.push(item.name);
            return item.name;
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formData = {
    selectedCity,
    selectedDistrict,
    boxNumber,
    rteVote,
    kkVote,
    errVote,
    totalVote,
  };

  const saveBox = () => {
    if (formData.selectedCity == null || formData.selectedDistrict == null) {
      // hata
    } else {
      formData && console.log(formData);
    }
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
      {/* <Text
        style={[
          style.infoText,
          {textAlign: 'center', fontSize: 20, marginTop: 10},
        ]}>
        İstanbul
      </Text> */}
      <SelectList
        placeholder="İl Seçiniz"
        searchPlaceholder="İl ara..."
        // boxStyles={{textAlign: 'center'}}
        inputStyles={{color: 'white', textAlign: 'left'}}
        dropdownTextStyles={{color: 'white'}}
        setSelected={val => setSelectedCity(val)}
        data={cities}
        save="value"
      />
      <SelectList
        placeholder="İlçe Seçiniz"
        searchPlaceholder="İlçe ara..."
        // boxStyles={{textAlign: 'center'}}
        inputStyles={{color: 'white', textAlign: 'left'}}
        dropdownTextStyles={{color: 'white'}}
        setSelected={val => setSelectedDistrict(val)}
        data={districts}
        save="value"
      />

      <View style={style.infoContain}>
        <Text style={style.infoText}>Sandık No: </Text>
        <Text style={style.infoText}>{boxNumber}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            setToggleEditBox(!toggleEditBox);
          }}
          style={{alignItems: 'flex-end'}}>
          <Icon name="edit" size={20} color="#ffffff" />
        </TouchableWithoutFeedback>
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
        votePerc={(rteVotePerc && rteVotePerc) || ''}
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
        votePerc={(kkVotePerc && kkVotePerc) || ''}
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
        votePerc={(errVotePerc && errVotePerc) || ''}
      />
      <View style={style.infoContain}>
        <Text style={[style.infoText, {fontSize: 18}]}>Toplam Seçmen: </Text>
        <Text style={[style.infoText, {fontSize: 18}]}>{totalVote}</Text>
      </View>
      <SendButton title={'KAYDET'} click={saveBox} />
      <EditBoxNumberModal
        visible={toggleEditBox}
        onClose={() => setToggleEditBox(false)}
        onSend={boxNumber => {
          setToggleEditBox(false);
          setboxNumber(boxNumber);
        }}
      />
    </ScrollView>
  );
};

export default CreatePost;
