import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Title,
  Subheading,
  useTheme,
} from "react-native-paper";
import { API_KEY } from "../utils/constants";

const Location = (props) => {
  const [text, setText] = useState("");

  const handleChangeLocation = () => {
    const API_ROUTE = `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=metric`;
    fetch(API_ROUTE)
      .then((res) => res.json())
      .then((json) => {
        if (json.cod == 200) {
          props.setSelectedLocation(text);
        }
      });
  };
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.accent,
      paddingHorizontal: 10,
      justifyContent: "center",
      alignContent: "center",
    },
    currentLocation: {
      marginBottom: 30,
      color: "#fff",
    },
    btnSubmit: {
      marginTop: 10,
      marginHorizontal: "30%",
    },
    fontColor: {
      color: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <Subheading style={styles.fontColor}>Current location</Subheading>
      <Title style={styles.currentLocation}>{props.selectedLocation}</Title>
      <Subheading style={styles.fontColor}>Enter new location</Subheading>
      <TextInput
        label="Location"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        onPress={() => handleChangeLocation()}
        mode={"contained"}
        style={styles.btnSubmit}
      >
        Submit
      </Button>
    </View>
  );
};

export default Location;
