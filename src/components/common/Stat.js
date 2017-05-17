import React from 'react';
import { View, Text } from 'react-native';

const Stat = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        {props.children || '-'}
      </Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 25,
    color: '#34a9b7'
  }
}

export { Stat };
