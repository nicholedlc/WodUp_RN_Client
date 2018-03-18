import React from "react";
import { View, Text } from "react-native";

const ErrorMessage = () => {
  return (
    <View style={styles.errorMessageStyle}>
      <Text>Sorry! There was an error with your request.</Text>
    </View>
  );
};

const styles = {
  errorMessageStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { ErrorMessage };
