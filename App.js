import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [name, setName] = useState('eslam');
    const [age, setAge] = useState('24');
    const changeName = (name) => {
        setName(name);
    }
    return (
        //https://reactnative.dev/docs/textinput
        <View style={styles.container}>
            <Text>Enter Name:</Text>
            <TextInput
                multiline
                keyboardType={'default'}
                style={styles.input}
                placeholder={'e.g. eslam'}
                onChangeText={changeName}
            />
            <Text>Enter Age:</Text>
            <TextInput
                keyboardType={'numeric'}
                style={styles.input}
                placeholder={'e.g. eslam'}
                onChangeText={(val) => setAge(val)}
            />
            <Text>name: {name} ,age :{age}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
});
