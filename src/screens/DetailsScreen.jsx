import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ route }) {
    const { post } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    body: { fontSize: 16 },
});