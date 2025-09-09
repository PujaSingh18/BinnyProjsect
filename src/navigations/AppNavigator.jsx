import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import { enableScreens } from 'react-native-screens';
import CounterScreen from '../screens/CounterScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import PostsScreen from '../screens/PostsScreen';

enableScreens();

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: '',
                headerTitleAlign: Platform.OS === 'android' ? 'left' : 'center',
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Posts"
                component={PostsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Counter"
                component={CounterScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
