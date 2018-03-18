import React from "react";
import { Modal, View, TouchableWithoutFeedback } from "react-native";
import { ModalBar, ModalContent } from "./ModalBar";

const ModalComponent = props => {
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

        <View>{props.children}</View>
      </View>
    </Modal>
  );
};

const styles = {
  modalViewStyle: {
    justifyContent: "flex-end",
    flex: 1
  }
};

export { ModalComponent };
