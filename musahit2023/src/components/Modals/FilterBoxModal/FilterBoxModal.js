import {View, Text, TextInput} from 'react-native';
import {React, useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import SendButton from '../../SendButton';
import {SelectList} from 'react-native-dropdown-select-list';
import cities from './../../../assets/cities';

import style from './FilterBoxModal.style';

const FilterBoxModal = ({visible, onClose, onSend}) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districts = [];

  // kod tekrarı var, buradaki district fonksiyonunu globale taşımak gerekiyor.

  useEffect(() => {
    district();
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

  return (
    <Modal
      style={style.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={style.contain}>
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
          boxStyles={{marginTop: 10}}
          inputStyles={{color: 'white', textAlign: 'left'}}
          dropdownTextStyles={{color: 'white'}}
          setSelected={val => setSelectedDistrict(val)}
          data={districts}
          save="value"
        />
        <TextInput
          style={style.textInput}
          placeholder="Sandık no giriniz..."
          placeholderTextColor={'white'}
          //   onChangeText={e => setTextBox(e)}
          //   value={textBox}
          keyboardType="decimal-pad"
        />
        <SendButton
          title={'Filtrele'}
          click={() => {
            console.log('filter all');
          }}
        />
      </View>
    </Modal>
  );
};

export default FilterBoxModal;
