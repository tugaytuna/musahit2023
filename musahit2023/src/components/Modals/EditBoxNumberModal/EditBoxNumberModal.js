import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

import style from './EditBoxNumberModal.style';

const EditBoxNumberModal = ({visible, onClose, onSend, displayName}) => {
  return (
    <View style={style.contain}>
      <Modal
        style={style.modal}
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}>
        <View style={{flex: 1}}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
};

export default EditBoxNumberModal;
