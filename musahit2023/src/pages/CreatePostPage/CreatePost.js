import {React, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import Candidate from '../../components/Candidate';

import style from './CreatePost.style';

const CreatePost = () => {
  const [rteVote, setRteVote] = useState(144);
  const [kkVote, setKkVote] = useState(144);
  const [errVote, setErrVote] = useState(2);

  const [rteVotePerc, setRteVotePerc] = useState(144);
  const [kkVotePerc, setKkVotePerc] = useState(144);
  const [errVotePerc, setErrVotePerc] = useState(2);
  const [totalVote, setTotalVote] = useState(0);

  useEffect(() => {
    setTotalVote(rteVote + kkVote + errVote);
    setRteVotePerc(rteVote / totalVote);
    setKkVotePerc(kkVote / totalVote);
    setErrVotePerc(errVote / totalVote);
  }, [rteVote, kkVote, errVote]);

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
      <Text>CreatePost</Text>
    </View>
  );
};

export default CreatePost;
