// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^\d{4}$/; // exactly 4 digit numbers
        return regex.test(password);
    };

    const onLogin = () => {
        if (!email.trim()) {
            Alert.alert("Validation Error", "Email is required.");
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert("Validation Error", "Please enter a valid email address.");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Validation Error", "Password is required.");
            return;
        }
        if (!validatePassword(password)) {
            Alert.alert("Validation Error", "Password must be exactly 4 digits (numbers only).");
            return;
        }

        Alert.alert(
            "Login Info",
            `Email: ${email}\nPassword: ${password}`,
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("Posts"),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                {/* Circle placeholder logo with B */}
                <View style={styles.logoCircle}>
                    <Text style={styles.logoText}>B</Text>
                </View>
                <Text style={styles.title}>Welcome To Binny's Login</Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    placeholderTextColor="#aaa"
                />

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password (4-digit PIN)"
                    keyboardType="numeric"
                    secureTextEntry
                    maxLength={4}
                    style={styles.input}
                    placeholderTextColor="#aaa"
                />

                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8", // light background
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    logoCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#0066CC",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Android shadow
    },
    logoText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333",
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 15,
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "#0066CC",
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
    },
});
