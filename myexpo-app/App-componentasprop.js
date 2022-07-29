import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Logo = props => {
  return <Image
    style={styles.tinyLogo}
    source={require('./assets/favicon.png')}
  />
}

export const Header = props => {
  return <View>
    <Text>{props.title}</Text>
    <View>
      {props.children}
    </View>
  </View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="React Native!!!">
        {/* Component as prop */}
        <Logo />
      </Header >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
