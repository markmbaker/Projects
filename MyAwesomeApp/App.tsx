/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ff8c00" />
      <Text style={styles.text}>hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8c00', // Orange background
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff', // White text
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
