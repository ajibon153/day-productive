import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './Screen/Navigation';
import { Provider as StoreProvider } from 'react-redux';
import Store from './Reducer/store';

export default function App() {
  return (
    <StoreProvider store={Store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}
