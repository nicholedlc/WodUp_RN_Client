import React from 'react';
import { View } from 'react-native';

const BaseContainer = props => {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  viewStyle: {
    flex: 1
  }
}

export { BaseContainer };
