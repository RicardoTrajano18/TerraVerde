import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export function Button({ title, onPress }) {
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
    borderWidth: 2,
    borderColor: "#60A62E",
    width: width * 0.8,
    height: height * 0.08,
    marginTop: 0,
    marginBottom: 20
  },
  title: {
    color: "#60A62E",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
