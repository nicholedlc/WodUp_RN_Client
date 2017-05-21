import React from 'react';
import { View } from 'react-native'
import { COLOR_TERNARY } from '../../styles';

const ModalContent = props => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
      {/* <DatePickerIOS
        date={date}
        mode='date'
        onDateChange={val => inputLog({ key: 'date', val })}
      /> */}
    </View>
  );
}

styles = {
  containerStyle: {
    backgroundColor: COLOR_TERNARY
  }
}

export { ModalContent };
