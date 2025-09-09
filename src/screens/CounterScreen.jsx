import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CounterScreen() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.buttonRow}>
                <Button title="+" onPress={() => setCount(count + 1)} />
                <Button title="-" onPress={() => setCount(count - 1)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    count: { fontSize: 40, marginBottom: 20 },
    buttonRow: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
    },
});