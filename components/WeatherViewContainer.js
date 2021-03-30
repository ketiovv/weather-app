import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { API_KEY } from "../utils/constants";
import OlderPeopleView from "./OlderPeopleView";
import NormalView from "./NormalView";

const WeatherViewContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [weatherLocation, setWeatherLocation] = useState("");
  const [pressure, setPressure] = useState(0);
  const [sunrise, setSunrise] = useState(new Date());
  const [sunset, setSunset] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const fetchWeather = () => {
    const API_ROUTE = `http://api.openweathermap.org/data/2.5/weather?q=${props.selectedLocation}&appid=${API_KEY}&units=metric`;
    fetch(API_ROUTE)
      .then((res) => res.json())
      .then((json) => {
        setTemperature(json.main.temp);
        setIsLoading(false);
        setWeatherLocation(json.name);
        setPressure(json.main.pressure);
        setSunrise(
          convertUTCDateToLocalDate(new Date(json.sys.sunrise * 1000))
        );
        setSunset(convertUTCDateToLocalDate(new Date(json.sys.sunset * 1000)));
        setDescription(json.weather[0].description);
        setShortDescription(json.weather[0].main);
      });
  };

  useEffect(() => {
    fetchWeather();
    setCurrentDate(convertUTCDateToLocalDate(new Date(Date.now())));
  }, []);

  if (props.olderPeopleView) {
    return (
      <OlderPeopleView
        isLoading={isLoading}
        temperature={temperature}
        weatherLocation={weatherLocation}
        pressure={pressure}
        sunrise={sunrise}
        sunset={sunset}
        currentDate={currentDate}
        description={description}
        shortDescription={shortDescription}
      />
    );
  } else {
    return (
      <NormalView
        isLoading={isLoading}
        temperature={temperature}
        weatherLocation={weatherLocation}
        pressure={pressure}
        sunrise={sunrise}
        sunset={sunset}
        currentDate={currentDate}
        description={description}
        shortDescription={shortDescription}
      />
    );
  }
};

export default WeatherViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  var offset = -2;
  var hours = date.getHours();
  newDate.setHours(hours - offset);

  return newDate;
}
