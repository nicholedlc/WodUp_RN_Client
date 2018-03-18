import React from "react";
import { TextInput, View, Text } from "react-native";

const FormField = ({
  label,
  style,
  // ref,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  autoCorrect,
  autoCapitalize,
  multiline,
  numberOfLines,
  maxLength,
  editable,
  onChangeText,
  blurOnSubmit,
  onSubmitEditing
}) => {
  const { textInputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={[textInputStyle, style]}
        // ref={ref}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        editable={editable}
        onChangeText={onChangeText}
        blurOnSubmit={blurOnSubmit}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = {
  textInputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 13,
    lineHeight: 100,
    flex: 2
  },
  labelStyle: {
    fontSize: 13,
    color: "#696969",
    paddingLeft: 10,
    flex: 1.2
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { FormField };
