import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { Factorial } from './src/components/Factorial';

export default function App() {
  return (
    <View>
      <View style={styles.global}>
        <Header title="Калькулятор факториалов" />
        <View style={styles.container}>
          <Factorial />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: 'black',
    width: "100%",
    height: "100%"
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
