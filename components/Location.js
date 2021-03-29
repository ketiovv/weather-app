import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput} from 'react-native-paper';

const Location = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.search}
                label="Location"
                value={text}
                onChangeText={text => setText(text)} />
        </View>
    );
}

export default Location;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    search: {
        marginTop: 30,
        marginHorizontal: 10
    }
  });