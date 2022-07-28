import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StatusBar, StyleSheet, ActivityIndicator, Alert } from 'react-native';


export const Post = props => {

    const [posts, setPosts] = useState({
        error: null, // if any ajax error
        isLoaded: false, //Progress bar enabler
        items: []  // data to be filed
    })

    //componentDid == useEffect 
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                setTimeout(() => {
                    setPosts(prvState => {
                        return { ...prvState, isLoaded: true, items: posts }
                    });
                }, 10000)

            }, (error) => {
                setPosts({
                    isLoaded: true,
                    error
                });
            })

    }, [])

    //console.log('posts ',posts)

    const onPressItem = item => {
        console.log(item)
        Alert.alert(JSON.stringify(item))
    }
    //use object destructuring
    const { error, items, isLoaded } = posts;

    if (error) {
        //render error component
        return <View style={styles.error}> Error: {error.message}</View>;
    } else if (!isLoaded) {
        return <View style={styles.loader}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>;
    } else {
        return <View styles={styles.container}>
            <FlatList
                keyExtractor={(post) => {
                    return post.id
                }}
                data={items}
                renderItem={
                    ({ item }) => {
                        const { title } = item
                        return <View style={styles.item}>
                            <Text onPress={() => { onPressItem(item) }} style={styles.title}>{title}</Text>
                        </View>
                    }
                }
            />
        </View>
    }

}



const App = () => {
    return <View style={styles.container}>
        <Post />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
});

export default App;