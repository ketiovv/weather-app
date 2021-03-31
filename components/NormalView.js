import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
  Text,
  ActivityIndicator,
  Colors,
  Avatar,
  Card,
  useTheme,
} from "react-native-paper";
import {
  getCorrectDateString,
  getCorrectTimeString,
  getWeekName,
  getIconForWeather,
} from "../utils/utils";
import Constants from "expo-constants";

const NormalView = (props) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: colors.accent,
    },
    imageBg: {
      flex: 1,
      resizeMode: "cover",
    },
    topCard: {
      marginTop: Constants.statusBarHeight + 15,
      backgroundColor: "#37474fa0",
      marginHorizontal: 6,
      padding: 3,
    },
    rowDateContainer: {
      flexDirection: "row",
    },
    rowSunsetContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
    },
    date: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    time: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    sunrise: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 9,
    },
    sunset: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 9,
    },
    mediumCard: {
      marginTop: "3%",
      backgroundColor: "#37474fa0",
      marginHorizontal: 6,
      padding: 1,
    },
    location: {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
    },
    bottomCard: {
      marginTop: "10%",
      backgroundColor: "#37474fa0",
      marginHorizontal: 6,
      padding: 3,
    },
    rowTempContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
    },
    temperature: {
      color: "white",
      fontSize: 75,
      fontWeight: "bold",
      textAlign: "center",
    },
    description: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    pressure: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },

    iconStyle: {
      backgroundColor: "transparent",
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
        <ImageBackground
          source={getBackgroundForWeather(props.shortDescription)}
          style={styles.imageBg}
        >
          <Card style={styles.topCard}>
            <Card.Content>
              <Text style={styles.location}>{`${props.weatherLocation}`}</Text>
            </Card.Content>
          </Card>

          <Card style={styles.mediumCard}>
            <Card.Content>
              <View style={styles.rowTempContainer}>
                <Text
                  style={styles.temperature}
                >{`${props.temperature}\xB0 C`}</Text>
                <Avatar.Icon
                  size={100}
                  icon={getIconForWeather(props.shortDescription)}
                  style={styles.iconStyle}
                />
              </View>

              <Text
                style={styles.description}
              >{`${props.shortDescription} (${props.description})`}</Text>

              <Text
                style={styles.pressure}
              >{`Pressure: ${props.pressure} Pa`}</Text>
            </Card.Content>
          </Card>

          <Card style={styles.bottomCard}>
            <Card.Content>
              <View style={styles.rowDateContainer}>
                <Text style={styles.date}>
                  {`${getWeekName(
                    props.currentDate.getUTCDay()
                  )} ${getCorrectDateString(props.currentDate)}`}
                </Text>

                <Text> </Text>

                <Text style={styles.time}>
                  {`${getCorrectTimeString(props.currentDate)}`}
                </Text>
              </View>

              <View style={styles.rowSunsetContainer}>
                <Avatar.Icon
                  icon="weather-sunset-up"
                  size={45}
                  style={styles.iconStyle}
                />
                <Text style={styles.sunrise}>
                  {`${getCorrectTimeString(props.sunrise, "short")}`}
                </Text>

                <Avatar.Icon
                  icon="weather-sunset-down"
                  size={45}
                  style={styles.iconStyle}
                />
                <Text style={styles.sunset}>
                  {`${getCorrectTimeString(props.sunset, "short")}`}
                </Text>
              </View>
            </Card.Content>
          </Card>
        </ImageBackground>
      </View>
    );
  }
};

export default NormalView;

const getBackgroundForWeather = (weather) => {
  switch (weather) {
    case "Clouds":
      return require("../assets/clouds.jpg");
    case "Rain":
      return require("../assets/rain.jpg");
    case "Clear":
      return require("../assets/clear.jpg");
    case "Fog":
      return require("../assets/fog.jpg");
    case "Snow":
      return require("../assets/snow.jpg");
    default:
      return require("../assets/clear.jpg");
  }
};
