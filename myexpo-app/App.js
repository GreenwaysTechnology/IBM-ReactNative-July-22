import { React } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Greeter } from './greeter/Greeter';
import { User } from './users/User';

//Root Component
const App = () => <View style={styles.container}>
    <Greeter />
    <Greeter message="Hello" name="Subramanian" />
    <Greeter message="Hello" name="Ram" />
    <User user={{ id: 1, name: 'Subramanian', city: 'Coimbatore' }} skills={
        ['Java','Javascript','Devops','Cloud']
    } />
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
