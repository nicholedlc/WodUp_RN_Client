import React from "react";
import { View, Button } from "react-native";
import { COLOR_PRIMARY, BORDER_RADIUS } from "../../styles";

const ButtonPrimary = props => {
  return (
    <View style={styles.buttonContainerStyle}>
      <Button color="white" title={props.title} onPress={props.onPress} />
    </View>
  );
};

const styles = {
  buttonContainerStyle: {
    flex: 0,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: `${COLOR_PRIMARY}`,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    borderColor: `${COLOR_PRIMARY}`
  }
};

export { ButtonPrimary };
