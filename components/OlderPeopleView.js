import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  useTheme,
  ActivityIndicator,
  Avatar,
  Card,
} from "react-native-paper";
import {
  getWeekName,
  getIconForWeather,
  getCorrectDateString,
  getCorrectTimeString,
} from "../utils/utils";

const OlderPeopleView = (props) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.accent,
      justifyContent: "center",
      padding: 10,
    },
    rowTempContainer: {
      flexDirection: "row",
      alignContent: "center",
    },
    rowSunContainer: {
      flexDirection: "row",
      alignContent: "center",
    },
    temperature: {
      fontWeight: "800",
      fontSize: 60,
      color: "#fff",
    },
    description: {
      fontSize: 30,
      color: "#fff",
      fontWeight: "500",
    },
    date: {
      fontSize: 30,
      color: "#fff",
      fontWeight: "500",
    },
    time: {
      fontSize: 30,
      color: "#fff",
      fontWeight: "500",
    },
    location: {
      fontWeight: "800",
      fontSize: 60,
      color: "#fff",
      marginBottom: 10,
    },
    pressure: {
      fontSize: 23,
      color: "#fff",
      fontStyle: "italic",
    },
    sunrise: {
      fontSize: 23,
      color: "#fff",
      fontStyle: "italic",
    },
    sunset: {
      fontSize: 23,
      color: "#fff",
      fontStyle: "italic",
    },
  });

  if (props.isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        color={colors.darkAccent}
        style={styles.container}
        size={"large"}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <Card style={{ backgroundColor: colors.darkAccent }}>
          <Card.Content>
            <Text style={styles.location}>{`${props.weatherLocation}`}</Text>
            <Text style={styles.date}>
              {`${getWeekName(
                props.currentDate.getUTCDay()
              )} ${getCorrectDateString(props.currentDate)}`}
            </Text>
            <Text style={styles.time}>
              {`${getCorrectTimeString(props.currentDate)}`}
            </Text>
            <Text style={styles.sunrise}>
              {`Sunrise: ${getCorrectTimeString(props.sunrise, "short")}`}
            </Text>
            <Text style={styles.sunset}>
              {`Sunset: ${getCorrectTimeString(props.sunset, "short")}`}
            </Text>
          </Card.Content>
        </Card>

        <Card style={{ backgroundColor: colors.darkAccent, marginTop: 20 }}>
          <Card.Content>
            <View style={styles.rowTempContainer}>
              <Text
                style={styles.temperature}
              >{`${props.temperature}\xB0 C`}</Text>
              <Avatar.Icon
                size={80}
                icon={getIconForWeather(props.shortDescription)}
                backgroundColor={colors.darkAccent}
              />
            </View>
            <Text style={styles.description}>
              {props.shortDescription.toLowerCase() ==
              props.description.toLowerCase()
                ? `${props.shortDescription}`
                : `${props.shortDescription} - ${props.description}`}
            </Text>

            <Text
              style={styles.pressure}
            >{`Pressure: ${props.pressure} Pa`}</Text>
          </Card.Content>
        </Card>
      </View>
    );
  }
};

export default OlderPeopleView;
