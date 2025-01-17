import Heading from "@/components/_organisms/Heading";
import React from "react";
import { View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Heading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D192C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
