import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
});
