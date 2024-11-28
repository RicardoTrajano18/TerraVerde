import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export function ButtonSair({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "red",
    borderWidth: 2,
    width: width * 0.8,
    height: height * 0.08,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
