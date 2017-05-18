import React from 'react';
import { TextInput, View, Text } from 'react-native';

const FormField = ({
  label,
  value,
  onChangeText,
  keyboardType,
  autoCorrect,
  multiline,
  numberOfLines,
  maxLength,
  style,
  editable
}) => {
  const { textInputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        style={[textInputStyle, style]}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        editable={editable}
      />
    </View>
  );
};

const styles = {
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 100,
    flex: 2
  },
  labelStyle: {
    fontSize: 15,
    color: '#696969',
    paddingLeft: 10,
    flex: 1
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { FormField }
