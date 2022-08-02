import * as Network from 'expo-network';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
    const [ip, setIp] = useState('')
    useEffect(() => {
        (async () => {
            const ip = await Network.getIpAddressAsync();
            console.log(ip)
            setIp(ip)
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Ip {ip}</Text>
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
});