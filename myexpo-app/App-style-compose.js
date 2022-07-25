import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { page } from './globalstyles/page';

const App = () => (
    <View style={container}>
        <Text style={text}>React Native</Text>
    </View>
);

const lists = StyleSheet.create({
    //style-2
    listContainer: {
        flex: 1,
       // backgroundColor: 'green',
    },
    listItem: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
});

//here style one will be overriden by style2
const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

export default App;