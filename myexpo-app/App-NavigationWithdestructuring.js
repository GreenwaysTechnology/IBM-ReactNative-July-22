import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

//create Object By calling createNativeStackNavigator function 
const { Navigator, Screen } = createNativeStackNavigator()

export const HomeScreen = props => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}


const App = () => {
    return <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default App;