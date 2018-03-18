import React from "react";
import { View, Text } from "react-native";

const BannerRight = props => {
  return (
    <View style={{ flex: 2 }}>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={{ fontSize: 25, color: "#002C31" }}
        >{`${firstName} ${lastName}`}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ alignItems: "flex-end", color: "#696969" }}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignSelf: "flex-end",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    zIndex: 5
  },
  thumbnailStyle: {
    borderWidth: 1,
    borderColor: "white"
  }
};

export { BannerRight };
