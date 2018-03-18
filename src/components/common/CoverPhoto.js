import React from "react";
import { Dimensions, Image } from "react-native";
import { COLOR_PRIMARY } from "../../styles";

const CoverPhoto = props => {
  return <Image style={styles.imageStyle} source={props.source} />;
};

const styles = {
  imageStyle: {
    width: Dimensions.get("window").width,
    height: 250,
    opacity: 0.5,
    backgroundColor: COLOR_PRIMARY
  }
};

export { CoverPhoto };
