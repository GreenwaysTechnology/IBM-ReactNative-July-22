import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, TouchableOpacity, Text, FlatList, StatusBar, StyleSheet, ActivityIndicator, Alert } from 'react-native';

//Presental Components 
//Error 
export const Error = props => {
    const { message } = props
    return <View style={styles.error}> Error: {message}</View>;
}
export const Spinner = props => {
    return <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ff00" />
    </View>;
}
export const PostListItem = props => {
    const { posts, onPressItem } = props
    return <View styles={styles.container}>
        <FlatList
            keyExtractor={(post) => {
                return post.id
            }}
            data={posts}
            renderItem={
                ({ item }) => {
                    const { title } = item
                    return <View style={styles.item}>
                        {/* <TouchableHighlight activeOpacity={0.6} underlayColor="#fff" onPress={() => { onPressItem(item) }}>
                            <Text>{title}</Text>
                        </TouchableHighlight> */}
                        <TouchableOpacity activeOpacity={0.6} underlayColor="#fff" onPress={() => { onPressItem(item) }}>
                            <Text>{title}</Text>
                        </TouchableOpacity>
                    </View>
                }
            }
        />
    </View>
}

//Container
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


    const onPressItem = item => {
        console.log(item)
        Alert.alert(JSON.stringify(item))
    }
    //use object destructuring
    const { error, items, isLoaded } = posts;
    if (error) {
        return <Error message={error.message} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <PostListItem onPressItem={onPressItem} posts={items} />
    }


}



const App = () => {

    //status bar properties 
    const STYLES = ['default', 'dark-content', 'light-content'];
    const TRANSITIONS = ['fade', 'slide', 'none'];
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
    const [hidden, setHidden] = useState(false);

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