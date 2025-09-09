// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        // show an alert with entered values
        Alert.alert(
            'Login Info',
            `Email: ${email}\nPassword: ${password}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        // OPTIONAL: navigate to posts after pressing OK
                        navigation.navigate("Posts");
                    },
                },
            ],
        { cancelable: false }
        );
    };

return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome To Binny's Login</Text>

        <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
        />

        <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
        />


        <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
);
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: '700', marginBottom: 24, alignSelf: 'center' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#0066CC',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 8,
    },
    buttonText: { color: 'white', textAlign: 'center', fontWeight: '600' },
});
