//Header Buttons
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



//create Stack Object
const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen = props => {
    const { navigation, route } = props
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go To Profile"
            onPress={() => navigation.navigate('Profile')}
        />
    </View>
}
function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function App() {
    return (<NavigationContainer>
        <Navigator>
            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <Text>Header</Text> ,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="black"
                        />
                    ),
                }}
            />
        </Navigator>
    </NavigationContainer>
    );
}
export default App