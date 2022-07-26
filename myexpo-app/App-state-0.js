import { React, Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


//state 
export class Counter extends Component {
    state = {
        value: 10
    }
    onIncrement = () => {
        this.setState((prevState) => {
            return { ...prevState, value: prevState.value + 1 }
        })
    }   

    render() {
        return <View>
            <Text>Counter App!!</Text>
            <Text>Value {this.state.value}</Text>
            <Button
                onPress={this.onIncrement}
                title="Increment"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    }
}

//Root Component
const App = () => <View style={styles.container}>
    <Counter />
</View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;
