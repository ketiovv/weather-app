import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { getWeekName } from '../utils/utils';


const NormalView = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.isLoading ? ".." : `${props.temperature}\xB0 C`}</Text>
            <Text>{props.isLoading ? ".." : `${props.shortDescription} (${props.description})`}</Text>
            <Text>{props.isLoading ? ".." : `${props.weatherLocation}`}</Text>
            <Text>{props.isLoading ? ".." : `${props.pressure} Pa`}</Text>
            <Text>{props.isLoading ? ".." : `sunrise: ${props.sunrise.getUTCHours()}:${props.sunrise.getUTCMinutes()}`}</Text>                
            <Text>{props.isLoading ? ".." : `sunset: ${props.sunset.getUTCHours()}:${props.sunset.getUTCMinutes()}`}</Text>
            <Text>
                {`${getWeekName(props.currentDate.getUTCDay())} ${props.currentDate.getUTCDate()}.${props.currentDate.getUTCMonth()}.${props.currentDate.getUTCFullYear()}`}
            </Text>
            <Text>                    
                {`${props.currentDate.getUTCHours()}:${props.currentDate.getUTCMinutes()}:${props.currentDate.getUTCSeconds()}`}
            </Text>
        </View>
    );
}

export default NormalView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });