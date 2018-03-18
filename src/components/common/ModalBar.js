import React from "react";
import { View } from "react-native";
import { ModalBarButton } from "./ModalBarButton";
import { BACKGROUND_SECONDARY } from "../../styles/common";

const ModalBar = props => {
  return <View style={styles.modalButtonContainerStyle}>{props.children}</View>;
};

const styles = {
  modalButtonContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: `${BACKGROUND_SECONDARY}`
  }
};
export { ModalBar };
