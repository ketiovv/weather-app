import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Location from './components/Location';
import WeatherViewContainer from './components/WeatherViewContainer';



export default function App() {
  const NormalViewRoute = () => <WeatherViewContainer olderPeopleView={false} />
  const OlderPeopleRoute = () => <WeatherViewContainer olderPeopleView={true} />
  const LocationRoute = () => <Location/>

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'normal', title: 'Normal people', icon: 'account' },
    { key: 'older', title: 'Older people', icon: 'magnify-plus' },
    { key: 'location', title: 'Location', icon: 'map-marker' }
  ])
    const renderScene = BottomNavigation.SceneMap({
        normal: NormalViewRoute,
        older: OlderPeopleRoute,
        location: LocationRoute
    });

    return (
        <BottomNavigation 
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene} />
      );
}