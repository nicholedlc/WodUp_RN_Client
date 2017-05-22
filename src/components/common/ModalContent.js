import React from 'react';
import { View } from 'react-native'
import { BACKGROUND_TERNARY } from '../../styles';

const ModalContent = props => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

styles = {
  containerStyle: {
    backgroundColor: `${BACKGROUND_TERNARY}`
  }
}

export { ModalContent };
