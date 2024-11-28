import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons
        name="arrow-right"
        size={height * 0.05}
        style={{
          color: "white",
          alignSelf: "center",
          bottom: height * 0.018,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#60A62E",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: width * 0.1,
    height: height * 0.05,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    bottom: height * 0.0125,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
