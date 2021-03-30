import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const OlderPeopleView = () => {
  return (
    <View style={styles.container}>
      <Text>Older people view</Text>
    </View>
  );
};

export default OlderPeopleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
