//Header Buttons
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



//create Stack Object
const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen = props => {
    const [count, setCount] = useState(0);
    const { navigation } = props;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
            ),
        });
    }, [navigation]);

    return <Text>Count: {count}</Text>;
}

function App() {
    return (<NavigationContainer>
        <Navigator>
            <Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Text>Counter</Text>,
                })}
            />
        </Navigator>
    </NavigationContainer>
    );
}
export default App