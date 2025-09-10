import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PostsScreen() {
    const [posts, setPosts] = useState([]);
    const [expandedId, setExpandedId] = useState(null); // track expanded item

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log("❌ API Error:", error));
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const renderItem = ({ item }) => {
        const isExpanded = expandedId === item.id;
        return (
            <View style={styles.item}>
                {/* Row with title and + / - button */}
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => toggleExpand(item.id)}
                >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.icon}>{isExpanded ? '-' : '+'}</Text>
                </TouchableOpacity>

                {/* Expanded content */}
                {isExpanded && (
                    <View style={styles.details}>
                        <Text style={styles.body}>{item.body}</Text>
                    </View>
                )}
            </View>
        );
    };

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
                renderItem={renderItem}
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
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        marginRight: 10,
    },
    icon: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 8,
    },
    body: {
        fontSize: 14,
        color: '#333',
    },
    footer: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: 'gray',
    },
});
