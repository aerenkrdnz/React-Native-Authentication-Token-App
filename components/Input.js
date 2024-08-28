import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onUpdateValue,
  value,
  secure,
  isInValid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInValid && styles. labelInValid]}>{label}</Text>
      <TextInput
        style={[styles.input, isInValid && styles.inputInValid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: "white",
    marginBottom: 5,
  },
  labelInValid:{
    color: 'red',

  },
  input: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  inputInValid:{
    backgroundColor:'red',
  }
});
