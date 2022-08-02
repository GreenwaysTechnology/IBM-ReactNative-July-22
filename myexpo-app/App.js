import { Provider, useSelector, useDispatch } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

//application logic 
const counterReducer = (state = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            return { ...state, value: state.value + 1 }
        default:
            return state;
    }
}

export const store = configureStore({
    reducer: counterReducer
})

const CounterScreen = props => {
    const value = useSelector(state => {
        console.log(state)
        return state.value
    })
    const dispatch = useDispatch()

    return <View style={styles.container}>
        <Text>React Native Redux</Text>
        <Text>Value : {value}</Text>
        <Button title="+" onPress={() => {
            //send an action to store
            dispatch({
                type: 'counter/increment'
            })
        }} />
    </View>
}

const Root = () => <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Counter"  component={CounterScreen} />
        </Stack.Navigator>
    </NavigationContainer>
</Provider>
//react native: UI logic
export default App = () => {
    return <Root />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

