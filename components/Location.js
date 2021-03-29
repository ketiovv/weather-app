import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Subheading } from 'react-native-paper';
import { API_KEY } from '../utils/constants';

const Location = (props) => {
    const [text, setText] = useState('');
    
    const handleChangeLocation = () => {
        const API_ROUTE = `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=metric`;
        fetch(API_ROUTE)
            .then(res => res.json())
            .then(json => {
                if(json.cod == 200){
                    props.setSelectedLocation(text);
                }
            });
    }

    return (
        <View style={styles.container}>
            <Subheading>
                Current location
            </Subheading>
            <Title style={styles.currentLocation}>
                {props.selectedLocation}
            </Title>
            <Subheading>
                Enter new location
            </Subheading>
            <TextInput
                label="Location"
                value={text}
                onChangeText={text => setText(text)} />
            <Button onPress={() => handleChangeLocation()}>
                Submit
            </Button>
        </View>
    );
}

export default Location;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      justifyContent: 'center',
      alignContent: 'center'
    },
    currentLocation:{
        marginBottom: 30
    }
});