import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

//create Object By calling createNativeStackNavigator function 
const { Navigator, Screen } = createNativeStackNavigator()

export const HomeScreen = props => {
    console.log('home', props)
    const { navigation } = props;
    const moveToScreen = () => {
        // props.navigation.navigate('Details')
        navigation.navigate('Details')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go Details" onPress={moveToScreen} />
    </View>
}
export const DetailsScreen = props => {
    const { navigation } = props;
    return <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button title="Go Back" onPress={() => {
            navigation.goBack();
        }} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

    </View>
}

const App = () => {
    return <NavigationContainer>
        <Navigator>
            {/* Routes  name of the route is represented by name */}
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Details" component={DetailsScreen} />
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