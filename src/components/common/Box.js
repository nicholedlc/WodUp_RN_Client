import React from 'react';
import { View } from 'react-native';

const Box = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export { Box };
