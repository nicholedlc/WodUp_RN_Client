import React from 'react';
import { View, Text } from 'react-native';

const StatHeader = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 12,
    color: '#1c4951'
  }
}

export { StatHeader };
