import React from "react";
import { Button } from "react-native";
import { COLOR_PRIMARY } from "../../styles";

const ModalBarButton = props => {
  return (
    <Button color={COLOR_PRIMARY} title={props.title} onPress={props.onPress} />
  );
};

export { ModalBarButton };
