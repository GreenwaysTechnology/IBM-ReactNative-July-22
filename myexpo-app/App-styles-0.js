import { View, Text, StyleSheet } from "react-native"


// const App = () => {
//     // inline style 
//     return <View style={{backgroundColor:'pink'}}>
//         <Text>
//             Welcome to React Native
//         </Text>
//     </View>
// }

//external style object 
// const styles = StyleSheet.create({
//     backgroundColor: 'yellow'
// })

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'yellow'
//     },
//     text: {
//         fontSize: 100,
//         color: "red",
//     }

// })

const { container, text } = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    },
    text: {
        fontSize: 100,
        color: "blue",
    }

})


const App = () => {
    // inline style 
    return <View style={container}>
        <Text style={text}>
            Welcome to React Native
        </Text>
    </View>
}
export default App;