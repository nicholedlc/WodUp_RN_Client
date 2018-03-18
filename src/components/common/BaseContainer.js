import React from "react";
import { View } from "react-native";

const BaseContainer = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    flex: 1
  }
};

export { BaseContainer };
