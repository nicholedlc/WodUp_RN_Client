import React from 'react';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import { ModalBar } from './ModalBar';

const ModalComponent = props => {
  // const { modalActive, openModal, date, inputLog } = this.props;
  // const { modalViewStyle, modalButtonContainerStyle, datePickerStyle } = styles;
  return (
    <Modal
      visible={props.visible || false}
      transparent={props.transparent}
      animationType={props.animationType}
    >
      <View style={styles.modalViewStyle}>
        <TouchableWithoutFeedback onPress={props.onPress}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>

        <View>
          <ModalBar>
            {props.children}
          </ModalBar>
          {/* <ModalContent>
            {props.children}
          </ModalContent> */}
        </View>

      </View>
    </Modal>
  );
}

const styles = {
  modalViewStyle: {
    justifyContent: 'flex-end',
    flex: 1
  }
};

export { ModalComponent };
