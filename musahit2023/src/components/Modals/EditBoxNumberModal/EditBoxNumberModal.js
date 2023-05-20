import {View, Text, TextInput} from 'react-native';
import {React, useState} from 'react';
import Modal from 'react-native-modal';

import style from './EditBoxNumberModal.style';
import SendButton from '../../SendButton';

const EditBoxNumberModal = ({visible, onClose, onSend, sandıkNo}) => {
  const [textBox, setTextBox] = useState('');

  const saveBoxNumber = () => {
    setTextBox('');
    textBox && onSend(textBox);
  };

  return (
    <Modal
      style={style.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={style.contain}>
        <TextInput
          style={style.textInput}
          placeholder="Sandık no giriniz..."
          placeholderTextColor={'white'}
          onChangeText={e => setTextBox(e)}
          value={textBox}
          keyboardType="decimal-pad"
        />
        <SendButton title={'Kaydet'} click={saveBoxNumber} />
      </View>
    </Modal>
  );
};

export default EditBoxNumberModal;
