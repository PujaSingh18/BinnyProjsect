import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PostsScreen({ navigation }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("📡 Fetching posts...");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log("✅ API Response:", data); // Logs full API data
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.log("❌ API Error:", error);
                setLoading(false);
            });
    }, []);

    const handlePostPress = (item) => {
        console.log("👉 Post Clicked:", item); // Logs clicked post
        navigation.navigate('Details', { post: item });
    };

    // if (loading) {
    //     console.log("⏳ Loading posts...");
    //     return (
    //         <View style={styles.center}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Posts</Text>
            </View>

            {/* List */}
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handlePostPress(item)}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 50 }}
                ListFooterComponent={
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>End of List</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: {
        padding: 15,
        backgroundColor: '#6200ee',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: { fontWeight: 'bold' },
    footer: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: 'gray',
    },
});