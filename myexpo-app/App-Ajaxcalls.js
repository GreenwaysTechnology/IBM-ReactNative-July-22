import React, {useEffect, useState } from 'react';
import { View, Text, FlatList, StatusBar, StyleSheet, Alert } from 'react-native';


//Post component
export const Post = props => {

    const [posts, setPosts] = useState([])

    //componentDid == useEffect 
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                setTimeout(() => {
                    setPosts(prvPosts => {
                        return prvPosts.concat(posts)
                    })
                }, 5000)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log('Post Component is rendering for now')

    const onPressItem = item => {
        console.log(item)
        Alert.alert(JSON.stringify(item))
    }

    return <View>
        <Text style={styles.headerStyle}>POST Fetching</Text>
        <FlatList
            keyExtractor={(post) => {
                return post.id
            }}
            data={posts}
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



const App = () => {
    return <View style={styles.container}>
        <Post />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default App;