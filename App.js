import React, { useState, useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Location from "./components/Location";
import WeatherViewContainer from "./components/WeatherViewContainer";

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState("Warszawa");

  const NormalViewRoute = () => (
    <WeatherViewContainer
      olderPeopleView={false}
      selectedLocation={selectedLocation}
    />
  );
  const OlderPeopleRoute = () => (
    <WeatherViewContainer
      selectedLocation={selectedLocation}
      olderPeopleView={true}
    />
  );
  const LocationRoute = () => (
    <Location
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
    />
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "normal", title: "Normal people", icon: "account" },
    { key: "older", title: "Older people", icon: "magnify-plus" },
    { key: "location", title: "Location", icon: "map-marker" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    normal: NormalViewRoute,
    older: OlderPeopleRoute,
    location: LocationRoute,
  });

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
}
